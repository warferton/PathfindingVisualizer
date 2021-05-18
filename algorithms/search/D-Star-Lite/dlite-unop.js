import { getNeighbours, prioritiseHeuristics, updateHeuristic } from '../../common-functions'

// let key_m;
const queue = [];
const visited = [];

export const DStarLiteUnOptimized = (grid, start, goal) => {
    // key_m = 0;
    let node_last = start;
    start.rhs = 0;
    CalculateKey(node);
    queue.push(start);
    ComputeShortestPath(grid, goal);

    while(start !== goal) {
        if(start.g === Infinity) return console.log("Not Found!");

        const neighbours = getNeighbours(start, grid)
        let min_node = Infinity;
        let min_arg = null;
        for(const neighbour of neighbours) {
            updateHeuristic(start, neighbour);
            let temp = start.heuristic;
            if(temp < min_node) {
                min_node = temp;
                min_arg = neighbour;
            }
        }
        start = min_arg;
        visited.push(start);
        //Scan Graph for Changes
        const changes = ScanChanges(grid); // !!!
         if(changes.length > 0) {
             node_last = start;
         }
    }


}

const CalculateKey = (node) => {
    node.key = Math.min(node.g, node.rhs);
}

const ComputeShortestPath = (grid, goal)=> {
    while(queue[0] < CalculateKey(start) || start.rhs !== start.g) {
        // const key_old = queue[0];
        const cur_node = queue.shift();

        if(cur_node.g > cur_node.rhs) {
            cur_node.g = cur_node.rhs;
            const neighbours = getNeighbours(cur_node, grid);
            for(const neighbour of neighbours) {
                if(neighbour !== goal){
                    updateHeuristic(neighbour, cur_node);
                    neighbour.rhs = Math.min(neighbour.rhs, neighbour.heuristic);
                }
                UpdateNode(neighbour);
            }
        }
        else{
            const g_old = neighbour.g;
            neighbour.g = Infinity;
            const neighbours = getNeighbours(cur_node, grid);
            neighbours.push(cur_node);
            for(const neighbour of neighbours) {
                updateHeuristic(neighbour, cur_node);
                if(neighbour.rhs === g_old + neighbour.heuristic){
                    if(neighbour !== goal){
                        neighbour.rhs = Math.min(neighbour.rhs, neighbour.heuristic);
                    }
                }
                UpdateNode(neighbour);
            }
        }


    }
}

const UpdateNode = (node, goal) => {
    if(node !== goal){
        node.rhs = 0; //!??
    }
    if(queue.includes(node)){
        const index = queue.indexOf(node);
        queue.splice(index, 1);
    }
    if(node.g != node.rhs) {
        queue.push(node);
        SortByKey(queue);
    }
}

// sorts collection by key values
const SortByKey = (structure) => {
    structure.sort( (a,b) => a.key - b.key);
}