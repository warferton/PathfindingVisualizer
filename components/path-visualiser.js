import { useState, useRef } from 'react';
import { Grid } from './grid/grid.component'
import { Nav } from './nav/nav.component';

const PathVisualiser = () => {

    const [placeItem, setPlaceItem] = useState('')

    const [pathAlgorithm, setPathAlgorithm] = useState();

    const runRef = useRef(null);

    return (
        <>
            <Nav setPlaceItem={setPlaceItem} setPathAlgorithm={ setPathAlgorithm } runRef={ runRef }/>
            <Grid limit ={300} placeItem={ placeItem } pathAlgorithm={ pathAlgorithm } ref={ runRef }/>
        </>
    )

}

export default PathVisualiser;