import { useState, useEffect } from 'react';
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

    useEffect( () => {

        if(role == 'START') setStyle(styles.startNode);
        
        else if(role == 'GOAL') setStyle(styles.goalNode); 
        
        else if(visited) setStyle(styles.visitedNode);
        
        else if(wall) setStyle(styles.wallNode);
    }, [])
   
    return(
        <div className={style.node + " " + style}>
        </div>
    )

}

export default Node;