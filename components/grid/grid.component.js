import { useState, useEffect, forwardRef } from 'react';
import { createRef } from 'react';
import { animate, createNode } from '../../algorithms/common-functions';
import Node from '../node/node.component';
import styles from '../../styles/Grid.module.css';
import NodeStyles from '../../styles/Node.module.css';


export const Grid = (props) => {

    const { 
        placeItem, 
        pathAlgorithm, 
        mazeAlgorithm, 
        algoRef, 
        mazeRef,
        cleanRef
    } = props; 

    const [START, setSTART] = useState({ y:20, x: 35 });
    const [GOAL, setGOAL] = useState({ y:10, x: 10 });
    const [SPECIAL_NODE_DRAG, setSPECIAL_NODE_DRAG] = useState(null);

    const [grid, setGrid] = useState([]);

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
        const temp_grid = grid.slice();
        const node = temp_grid[y][x];
        if(node.x === START.x && node.y === START.y 
            || node.x === GOAL.x && node.y === GOAL.y) {
            if(SPECIAL_NODE_DRAG === null){
                setSPECIAL_NODE_DRAG(node.role);
                return;
            }
        }
        else
            paint(x, y, grid);
        }

    const onMouseUp = (x, y) => {
        const temp_grid = grid.slice();
        
        setMouseDown(false);
        setSPECIAL_NODE_DRAG(null);
        console.log(SPECIAL_NODE_DRAG);
    }

    const onMouseEnter = (x, y) => {
        if(!mouseDown) return;
            console.log(SPECIAL_NODE_DRAG);
            if(SPECIAL_NODE_DRAG !== null){
                const temp_grid = grid.slice();
                const node = temp_grid[y][x];
                if(SPECIAL_NODE_DRAG === 'START'){
                    node.role = 'START';
                    setSTART(node);
                }
                if(SPECIAL_NODE_DRAG === 'GOAL'){
                    node.role = 'GOAL';
                    setGOAL(node);
                }
                return;
            }
            else
                paint(x, y, grid);
    }

    const onMouseLeave = (x, y) => {
        if(!mouseDown) return;
        if(SPECIAL_NODE_DRAG === null) return;
        const temp_grid = grid.slice();
        const node = temp_grid[y][x];
        node.role = '';
        console.log('left');
    }

    const runAlgorithm = () => {
        if(!!!pathAlgorithm) return;
        clearPaths();
        const algorithm = pathAlgorithm.algorithm;
        const start_node = grid[START.y][START.x];
        const end_node = grid[GOAL.y][GOAL.x];
        return setTimeout(() => {
            const result = animate(pathAlgorithm.algorithm(grid, start_node, end_node));
            return result;
        }, 10);
    }

    const constructMaze = () => {
        if(!!!mazeAlgorithm) return;
        clearAll();
        const { algorithm, percentile } = mazeAlgorithm;
        setTimeout(() => {if(percentile)
            setGrid(algorithm(grid, 25));
        else
            setGrid(algorithm(grid))}, 100)
    }

    const clearAll = () => {
        const temp_grid = grid.slice();
        for(const row of temp_grid){
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
        setGrid(temp_grid);
    }

    const clearPaths = () => {
        const temp_grid = grid.slice();
        for(const row of temp_grid){
            for(const node of row){
                node.parent = null;
                node.visited = false;
                if(node.wall){
                    node.ref.current.className = `${NodeStyles.node} ${NodeStyles.wallNode}`;
                    continue;
                }

                if(node.weight > 1){
                    node.ref.current.className = `${NodeStyles.node} ${NodeStyles.weightNode}`;
                    continue;
                }

                if(node.role === '' ){
                    node.ref.current.className = NodeStyles.node;
                    continue;
                }

            }
        }
        setGrid(temp_grid);
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
                            mouseLeave={ onMouseLeave }
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
            <button ref={ mazeRef } onClick={() => constructMaze()} style={{display: "none"}}>Maze</button>
            <button ref={ cleanRef } onClick={() => clearAll()} style={{display: "none"}}>Clear Grid</button>
            <div 
                className={styles.grid}
                onMouseUp = { onMouseUp }
            >
                { display_grid }
            </div>
        </>
    )

};