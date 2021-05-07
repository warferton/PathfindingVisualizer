import { getNeighbours } from '../../common-functions';

export const BFS = (grid, start, goal) => {
    const visited = [];
    const unvisited = [];

    start.visited = true;
    unvisited.push(start)

    console.log("Before the loop");

    while (unvisited.length > 0) {
        const node = unvisited.shift();
        
        if(node.wall) continue;

        visited.push(node);

        console.log(node);

        if(node === goal) return [visited];

        const neighbours = getNeighbours(node, grid);

        for(const neighbour of neighbours){
            neighbour.visited = true;
            neighbour.parent = node;
            unvisited.push(neighbour);
        }
    }

    //No path found
    return [visited];

}