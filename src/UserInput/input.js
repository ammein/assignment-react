import React from 'react';
import './input.css';

const UserInput = props =>{

    return(
        <input className="input" type="text" name="userinput" onChange={props.changed} value={props.username}></input>
    )

}

export default UserInput;