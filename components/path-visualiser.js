import Grid from './grid/grid.component'
import Nav from './nav/nav.component';

const PathVisualiser = () => {

    return (
        <>
            <Nav/>
            <Grid limit ={1000}/>
        </>
    )

}

export default PathVisualiser;