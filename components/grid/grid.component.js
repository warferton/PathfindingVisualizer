import Node from '../node/node.component';
import styles from '../../styles/Grid.module.css';

const Grid = (props) => {

    const {limit} = props

    const rows = limit / 10

    const grid = []

    for(let i = 0; i < limit; i++) {
        grid.push(<Node key={ i }></Node>);
    }

    return(
        <div className={styles.grid}>
            { grid }
        </div>
    )

}
export default Grid;