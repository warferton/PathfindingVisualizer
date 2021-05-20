const VerticalLineMaze = (grid) => {
    const temp_grid = grid.slice();
    for(const row of temp_grid){
        let flag = false;
        let count = 0;
        for(let i = 0; i < row.length; i++){
            const node = row[i];
            if(node.role === 'GOAL' || node.role === 'START') continue;
            if(node.x%2 === 0) continue;

            node.wall = true;

            if(!flag){
                const rand = Math.floor(Math.random() * 100) <= 20;
                count++;
                node.wall = rand;
                if(count >= 3) flag = true;
            }
            if(i === row.length-1 && count < 1)
                row[i].wall = false;
        }
    }
    return temp_grid;
}

const HorizontalLineMaze = (grid) => {
    const temp_grid = grid.slice();
    for(const row of temp_grid){
        let flag = false;
        let count = 0;
        for(let i = 0; i < row.length; i++){
            const node = row[i];
            if(node.role === 'GOAL' || node.role === 'START') continue;
            if(node.y%2 === 0) continue;

            node.wall = true;

            if(!flag){
                const rand = Math.floor(Math.random() * 100) <= 20;
                count++;
                node.wall = rand;
                if(count >= 3) flag = true;
            }
            if(i === row.length-1 && count === 0)
                node.wall = false;
        }
    }
    return temp_grid;
}

const DiagonalLineMaze = (grid) => {
    const temp_grid = grid.slice();
    for(const row of temp_grid){
        for(const node of row){
            if(node.role !== 'GOAL' || node.role !== 'START')
                node.wall = true;
        }
    }
    return temp_grid;
}

export const LineMaze = () => {
    const rand = Math.floor(Math.random() * 10);
    const flag = rand <= 3 ? 3 : 
                 rand > 3 && rand <= 6 ? 6 : 10;
    switch(flag){
        case 3:
            return VerticalLineMaze;
        case 6:
            return HorizontalLineMaze;
        // case 10:
        //     return DiagonalLineMaze;
    }
}