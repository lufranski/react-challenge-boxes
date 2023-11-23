import React from "react";

export default function Box(props){

    const styles = {

        backgroundColor: props.on ? '#cccccc' : '#222222'
    }

    return(
        <div className="box" style={styles} onClick={props.handleClick}>
        </div>
    )
}