import { useState, useRef } from 'react';
import { Grid } from './grid/grid.component'
import { Nav } from './nav/nav.component';

const PathVisualiser = () => {

    const [placeItem, setPlaceItem] = useState('')

    const [pathAlgorithm, setPathAlgorithm] = useState();

    const [mazeAlgorithm, setMazeAlgorithm] = useState();

    const [grid, setGrid] = useState([]);

    const algoRunRef = useRef(null);

    const mazeRunRef = useRef(null);

    const cleanRef = useRef(null);

    return (
        <>
            <Nav 
            setPlaceItem={setPlaceItem} 
            setPathAlgorithm={ setPathAlgorithm } 
            setMazeAlgorithm={ setMazeAlgorithm } 
            algoRef={ algoRunRef }
            mazeRef={ mazeRunRef } 
            cleanRef={ cleanRef }
            />

            <Grid 
            limit ={300} 
            placeItem={ placeItem } 
            pathAlgorithm={ pathAlgorithm } 
            mazeAlgorithm={ mazeAlgorithm } 
            algoRef={ algoRunRef } 
            mazeRef={ mazeRunRef }
            cleanRef={ cleanRef }
            grid={ grid } 
            setGrid={ setGrid }
            />
        </>
    )

}

export default PathVisualiser;