export const SimpleMaze = (grid, percentile) => {
    const temp_grid = grid.slice();
    for(const row of temp_grid){
        for(const node of row){
            if(node.role !== 'GOAL' || node.role !== 'START')
                node.wall = Math.floor(Math.random() * 100) < percentile;
        }
    }
    return temp_grid;
}