import React from 'react';

const UserOutput = props =>{
    return (
        <div className="paragraph">
            <p className="username">Username : {props.username}</p>
            <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum quaerat possimus error pariatur. Nam ab, quisquam eaque voluptatum iure architecto consectetur, nulla rerum dolores dignissimos placeat optio fuga neque.</p>
        </div>
    )
}

export default UserOutput;