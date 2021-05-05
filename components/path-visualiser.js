import { useState } from 'react';
import Grid from './grid/grid.component'
import Nav from './nav/nav.component';

const PathVisualiser = () => {

    const [placeItem, setPlaceItem] = useState('')

    return (
        <>
            <Nav setPlaceItem={setPlaceItem}/>
            <Grid limit ={300} placeItem={ placeItem }/>
        </>
    )

}

export default PathVisualiser;