import { useState, useEffect, forwardRef } from 'react';
import { createRef } from 'react';
import { animate, createNode } from '../../algorithms/common-functions';
import Node from '../node/node.component';
import styles from '../../styles/Grid.module.css';
import NodeStyles from '../../styles/Node.module.css';


const START = { y:20, x: 35 };
const GOAL = { y:10, x: 10 };

export const Grid = (props) => {

    const { placeItem, pathAlgorithm, mazeAlgorithm, grid, setGrid, algoRef, mazeRef } = props; 

    let marked_nodes = [];
    
    useEffect( () => {
        const max_rows = props.limit / 10;
        const grid = []
        for(let row = 0; row < max_rows; row++) {
            const temp_row = []
            for(let col = 0; col < 50; col++) {
                const node_ref = createRef();
                const new_node = createNode(col, row, node_ref, START, GOAL);
                temp_row.push(new_node);
            }
            grid.push(temp_row);
        }
        setGrid(grid);
    }, 
    []);
    
    // mouse handling 
    const [mouseDown, setMouseDown] = useState(false);

    const onMouseDown = (x, y) => {
        setMouseDown(true);
        paint(x, y, grid);
    }

    const onMouseUp = () => {
        setMouseDown(false);
    }

    const onMouseEnter = (x, y) => {
        if(mouseDown) {
            paint(x, y, grid);
        }
    }

    const runAlgorithm = () => {
        if(!!!pathAlgorithm) return;
        const algorithm = pathAlgorithm.algorithm;
        const start_node = grid[START.y][START.x];
        const end_node = grid[GOAL.y][GOAL.x];
        marked_nodes = animate(pathAlgorithm.algorithm(grid, start_node, end_node));
    }

    const constructMaze = () => {
        if(!!!mazeAlgorithm) return;
        clear();
        console.log("MAZE");
        const { algorithm, percentile } = mazeAlgorithm;
        if(percentile)
            setGrid(algorithm(grid, 25));
        else
            setGrid(algorithm(grid, 25));
    }

    const clear = () => {
        for(const row of grid){
            for(const node of row){
                node.wall = false;
                node.weight = 1;
                node.parent = null;
                node.visited = false;

                if(node.role === ''){
                    node.ref.current.className = NodeStyles.node;
                    continue;
                }

                if(node.role === 'START'){
                    node.ref.current.className = `${NodeStyles.node} ${NodeStyles.startNode}`;
                    continue;
                }

                if(node.role === 'GOAL'){
                node.ref.current.className = `${NodeStyles.node} ${NodeStyles.goalNode}`;
                    continue;
                }

            }
        }
    }

    //============================================================================

    const display_grid = grid.map(
        row => {
            return row.map(
                node => {
                    const { 
                        key,
                        x, 
                        y,
                        wall,
                        weight,
                        visited,
                        role,
                        ref
                    } = node;
                    return (
                        <Node
                            key={ key }
                            x={ x }
                            y={ y }
                            wall={ wall }
                            visited={ visited }
                            role={ role }
                            ref={ ref }
                            weight={ weight }
                            mouseDown={ onMouseDown }
                            mouseEnter={ onMouseEnter }
                        />
                    )
                }
            )
        }
    )

    /**
     * Toggle paint item on grid
     * @param {Number} x
     * @param {Number} y
     * @param {Object[][]} grid
     * */ 
    const paint = (x, y, grid) => {
        if (placeItem === '') return;
        
        const temp_grid = grid.slice();
        const temp_node = temp_grid[y][x];
        let new_node = {};
        
        if(placeItem === 'wall') {
            new_node = {
                ...temp_node,
                wall: !temp_node.wall
            }
        }
        else if (placeItem === 'weight') { 
            const new_weight = temp_node.weight === 1 ? 15 : 1 
            new_node = {
                ...temp_node,
                weight: new_weight
            }
            console.log(new_node);
        }
        temp_grid[y][x] = new_node;
        setGrid(temp_grid);
    }


    return(
        <>
            <button ref={ algoRef } onClick={() => runAlgorithm()} style={{display: "none"}}/>
            <button ref={ mazeRef }onClick={() => constructMaze()} style={{display: "none"}}>Maze</button>
            <div 
            className={styles.grid}
            onMouseUp = { onMouseUp }
            >
                { display_grid }
            </div>
            <button onClick={() => clear()} style={{margin: "10rem"}}>Clear Grid</button>
        </>
    )

};