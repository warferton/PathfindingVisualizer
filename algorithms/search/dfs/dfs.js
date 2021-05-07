import { getNeighbours } from '../../common-functions';

export const DFS = (grid, start, goal) => {
    const visited = [];

    let found_flag = false;

    (function recursive(node){
    if(found_flag) return;
    if(node === null) return;
    console.log(node);
    node.visited = true;
    visited.push(node);
    if(node === goal) 
    {
        found_flag = true;
        return;
    }
    const neighbours = getNeighbours(node, grid);
    for(const neighbour of neighbours) {
        neighbour.parent = node;
        recursive(neighbour);
    }

    })(start);

    return [visited];
}