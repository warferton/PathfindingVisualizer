import { updateNeighbours, deconstruct2d, prioritiseDistances } from '../../common-functions'

/**
 * Traverses the grid using Dijkstra algorithm
 * and returns a list of all the visited nodes
 * @param {Object[][]} grid 
 * @param {Object} start 
 * @param {Objec} goal 
 * @returns visited[]
 */
export const Dijkstra = function(grid, start, goal){

    const visited = [];
    start.distance = 0;

    const unvisited =  deconstruct2d(grid);


    while(unvisited.length > 0) {
        prioritiseDistances(unvisited);

        const node = unvisited.shift();

        // we are trapped
        if(node.distance === Infinity) return visited;
        
        //mark as visited and add to visited list
        node.visited = true;
        if(!node.wall)
            visited.push(node);
        
        //goal found
        if(node === goal) return visited;
    
        //update distances
        updateNeighbours(node, grid);
        
    }

}


