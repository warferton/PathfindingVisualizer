import { updateNeighbours, deconstruct2d, prioritiseDistances } from '../../common-functions'

export const dijkstra = function(grid, start, goal){

    const visited = [];
    start.distance = 0;

    const unvisited =  deconstruct2d(grid);


    while(unvisited.length > 0) {
        prioritiseDistances(unvisited);

        const node = unvisited.shift();

        // we are trapped
        if(node.distance === Infinity) return visited;
        
        //skip if encounter a wall
        if(node.wall) continue;
        
        //mark as visited and add to visited list
        node.visited = true;
        visited.push(node);
        
        //goal found
        if(node === goal) {
            return visited;
        }
        //update distances
        updateNeighbours(node, grid);
        
    }

}


