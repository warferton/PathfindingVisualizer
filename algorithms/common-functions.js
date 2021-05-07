import NodeStyles from '../styles/Node.module.css'

/**
 *  Gets all the node's neighbours on the grid
 * @param {Object} node 
 * @param {Object[]} grid 
 * @returns neighbours[]
 */
export const getNeighbours = (node, grid) => {
    const neighbours = [];

    const {x, y} = node;
    
    if (x > 0) neighbours.push(grid[y][x - 1]);
    
    if (y < grid.length - 1) neighbours.push(grid[y + 1][x]);
    
    if (y > 0 ) neighbours.push(grid[y - 1][x]);

    if (x < grid[0].length - 1) neighbours.push(grid[y][x + 1]);

    return neighbours.filter(neighbour => !neighbour.visited && !neighbour.wall);

}

/**
 * Visits all the node's neighbours on the grid and
 * updated their distance property
 * @param {Object} node 
 * @param {Object[]} grid 
 */
export const updateNeighbours = (node, grid) => {
    const neighbours = getNeighbours(node, grid);
    for(const n of neighbours) {
        n.distance = node.distance + n.weight;
        n.parent = node;
    }
}

/**
 * Updates heuristics of a given node
 * @param {*} node 
 * @param {*} goal 
 */
export const updateHeuristic = (node, goal) => {
    // Manhattan distance
    const raw_distance = Math.abs(node.x - goal.x) + Math.abs(node.y - goal.y);
    node.heuristic = raw_distance + node.weight;
}

/**
 * Deconstructs a 2D array into a 1D array
 * @param {Object[][]} structure_2d 
 * @returns list[] - 1-dimensional array list
 */
export const deconstruct2d = (structure_2d) => {
    const result = [];
    for(const bucket of structure_2d) {
        for(const item of bucket) {
            result.push(item);
        }
    }
    return result;
}

/**
 * Sorts the structure based on distance property of its items
 * @param {Object[]} heap 
 */
export const prioritiseDistances = ( heap ) => {
    heap.sort( (a,b) => a.distance - b.distance);
}

export const prioritiseHeuristics = ( heap ) => {
    heap.sort( (a,b) => a.heuristic - b.heuristic);
}

/**
 * Constructs a Path between the start and goal nodes,
 * taking the goal node as parameter
 * @param {Object} end_node 
 * @returns path[]
 */
export const buildPath = (end_node) => {
    const path = [];
    let cur_node = end_node;

    while(!!cur_node) {
        path.unshift(cur_node);
        cur_node = cur_node.parent;
    }

    return path;
}

/**
 * Animates Search and Path construction
 * @param {Object[]} node_list
 */
export const animate = (argument_list) => {
    let flag = false;
    let node_list = [];
    if(argument_list.length === 2) flag = true;
        
    node_list = argument_list[0];
    
    const len =  node_list.length;

    //animate
    for(let i = 0; i <= len; i++) {

        // if finished iterating and animating search ->
        // animate path
        if(i === len){
            let path = [];
            if(flag){
                path = argument_list[1];
            }
            else
                path = buildPath(node_list[i-1]);

            setTimeout( () => {
                for(let i = 0; i < path.length; i++){
                    setTimeout( () => {
                        if(path[i].role === '')
                        path[i].ref.current.className += ` ${ NodeStyles.pathNode }`
                    }, 8 * i)
                }
            }, 12 * i)
                return;
        }

        //animate search
        setTimeout(() => {
            node_list[i].ref.current.className += ` ${ NodeStyles.visitedNode }`
        }, 12 * i);
    }
}


/**
 * Takes in grid coordinates and a ref value, and creates a node
 * @param {number} x
 * @param {number} y
 * @param {import('react').RefObject} ref
 * @param {Object} START 
 * @param {Object} GOAL
 * @return node
 */
export const createNode = (x, y, ref, START, GOAL) => {
    const node_role = 
            y === START.y && x === START.x? "START" 
            : 
            y === GOAL.y && x === GOAL.x ? "GOAL" 
            : '';

    const node_is_wall = false;

    const node = {
            ref: ref,
            key: `${ x }-${ y }` ,
            role:  node_role,
            wall: node_is_wall,
            x: x,
            y: y,
            distance: Infinity,
            heuristic: null,
            f: null,
            g: null,
            weight: 1,
            parent: null,
            visited: false
        } 

    return  node;
        
    
}