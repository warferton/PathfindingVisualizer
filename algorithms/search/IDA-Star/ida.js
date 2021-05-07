import { getNeighbours, updateHeuristic } from '../../common-functions'

// only used for visualization purposes, not part of the algorithm
const visited = [];

/**
 * 
 * @param {Object[][]} grid 
 * @param {Object} start 
 * @param {Object} goal 
 * @returns visited[]
 */
export const IDA = (grid, start, goal) => {

    const path = [];

    updateHeuristic(start, goal);
    let threshold = start.heuristic;

    path.unshift(start);

    while (1) {
        const temp = search(path, 0, threshold, grid, goal);
        if(temp === 'GOAL') {
            console.log("FOUND");
            return [visited, path];
        }
        if(temp === Infinity) {
            console.log("NONFOUND");
            return [visited, path];
        }
        threshold = temp;
    }

}

/**
 * 
 * @param {Object[]} path 
 * @param {number} g 
 * @param {number} threshold 
 * @param {Object[][]} grid 
 * @param {Object} goal 
 * @returns 
 */
const search = (path, g, threshold, grid, goal) => {

    const node = path[0];

    const f = g + node.heuristic;

    if(f < threshold) return f;

    if(node === goal) return 'GOAL';

    let min = Infinity;

    const neighbours = getNeighbours(node, grid);

    console.log(neighbours);

    neighbours.sort( (a, b) =>{
        updateHeuristic(a, goal);
        updateHeuristic(b, goal);
        const val_a = a.heuristic + g;
        const val_b = b.heuristic + g;
        return val_a - val_b;
    });


    for(const neighbour of neighbours){

        if(path.includes(neighbour)) continue;

        path.unshift(neighbour);
        visited.push(neighbour);

        neighbour.g = g + neighbour.heuristic;
        neighbour.parent = node;

        neighbour.f = search(path, neighbour.g, threshold, grid, goal);

        if(neighbour.f === 'GOAL') return 'GOAL';
        if(neighbour.f < min) min = neighbour.f;
        path.unshift();
    }
    return min;

}