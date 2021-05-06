import { getNeighbours, updateHeuristic } from '../../common-functions'

// only used for visualization purposes
const visited = [];

export const IDA = (grid, start, goal) => {

    updateHeuristic(start, goal);
    let threshold = start.heuristic;

    while(1){

        const temp = search(start, 0 ,threshold, grid, goal);
        if(temp === goal) {
            console.log("FOUND IN MAIN");
            return visited;
        }
        if(temp.f === Infinity) {
            console.log("NO PATH");
            return visited;
        }
        threshold = temp.f;
    }

}

const search = (node, g, threshold, grid, goal) => {

    updateHeuristic(node, goal);

    visited.push(node);

    node.f = g + node.heuristic;

    if(node.f > threshold) return node;

    if(node === goal){
        console.log("FOUND IN SEARCH");
        return node;
    }

    let min = { f: Infinity };

    const neighbours = getNeighbours(node, grid);

    for(const neighbour of neighbours){
        neighbour.visited = true;
        neighbour.parent = node;

        const new_g = g + neighbour.weight;
        const temp = search(neighbour, new_g, threshold, grid, goal);

        if(temp === goal){
            console.log("FOUND IN RECURSIVE");
            return temp;
        }

        if(temp.f < min.f) min = temp;
    }
    return min;

};