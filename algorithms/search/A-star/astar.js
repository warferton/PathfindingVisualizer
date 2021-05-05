import { getNeighbours, prioritiseHeuristics, updateHeuristic } from '../../common-functions'

/**
 * Traverses the grid using A-Star algorithm
 * and returns a list of all the visited nodes
 * @param {Object[][]} grid 
 * @param {Object} START 
 * @param {Object} GOAL 
 * @returns visited[]
 */
export const Astar = (grid, start, goal) => {

    const openSet = []
    const closedSet = [];

    const visited = [];

    openSet.push(start)
    
    while(openSet.length > 0) {
        
        prioritiseHeuristics(openSet);

        const current_node = openSet.shift();
        visited.push(current_node);
        current_node.visited = true;

        if(current_node === goal){
            console.log("FOUND !!");
            console.log(visited);
            return visited;
        }

        closedSet.push(current_node);

        const neighbours = getNeighbours(current_node, grid);

        // iterate over neighbours
        for( const neighbour of neighbours ){
            if(neighbour.wall || closedSet.includes(neighbour)) continue;

            const temp_g = current_node.g + 1;
            console.log("tempG: " + temp_g);
            const new_path = false;

            if(openSet.includes(neighbour)){
                if(temp_g < neighbour.g){
                    neighbour.g = temp_g;
                    new_path = true;
                }

            }

            else{
                neighbour.g = temp_g;
                openSet.push(neighbour);
                new_path = true;
            }

            // reset the final cost, the heuristic, and change the parent node
            if(new_path){
                updateHeuristic(neighbour, goal);
                console.log(neighbour);
                neighbour.f = neighbour.g + neighbour.heuristic;
                neighbour.parent = current_node;
            }
        }

    }
    console.log('No PAth FOund ((');
    return visited;
}