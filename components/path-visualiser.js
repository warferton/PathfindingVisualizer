import { useState, useRef } from 'react';
import { Grid } from './grid/grid.component'
import { Nav } from './nav/nav.component';
import { InfoModal as Modal } from './modal/modal.component';

const PathVisualiser = () => {

    const [placeItem, setPlaceItem] = useState('')

    const [pathAlgorithm, setPathAlgorithm] = useState();

    const [mazeAlgorithm, setMazeAlgorithm] = useState();

    const [grid, setGrid] = useState([]);

    const algoRunRef = useRef(null);

    const mazeRunRef = useRef(null);

    const cleanRef = useRef(null);

    const modalRef = useRef(null);

    const [showModal, setShowModal] = useState(true);

    return (
        <>
            <div ref={ modalRef }>
                <Modal
                ref={ modalRef }
                onClose={() => setShowModal(false)}
                active={ showModal }
                />
            </div>

            <Nav 
            setPlaceItem={ setPlaceItem } 
            setPathAlgorithm={ setPathAlgorithm } 
            setMazeAlgorithm={ setMazeAlgorithm } 
            setShowModal = { setShowModal }
            algoRef={ algoRunRef }
            mazeRef={ mazeRunRef } 
            cleanRef={ cleanRef }
            />

            <Grid 
            limit={ 300 } 
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