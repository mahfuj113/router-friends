import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id} = props.friend;
    const history = useNavigate();
    
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history(url);
        // history.push(url);
    }
    const friendStyle = { 
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>email: {email}</p>
            <Link to={`/friend/${id}`}>show detail of {id}</Link> <br /> <br />
            <button onClick={() => handleClick(id)}>click me</button>
        </div>
    );
};

export default Friend;
