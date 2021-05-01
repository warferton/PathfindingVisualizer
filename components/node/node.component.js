import { useState } from 'react';
import styles from '../../styles/Node.module.css';

const Node = (props) =>{

    const [style, setStyle] = useState(styles.node);

    const {
        role,
        visited,
        x,
        y,
        weight,
        wall
    } = props

    // function setVisited(visited) {
    //     this.visited = visited;
    // }

   if(role == 'START') setStyle(styles.startNode);

   if(role == 'GOAL') setStyle(styles.goalNode); 

   if(visited) setStyle(styles.visitedNode);

   if(wall) setStyle(styles.wallNode);
   
    return(
        <div className={style}>
        </div>
    )

}

export default Node;