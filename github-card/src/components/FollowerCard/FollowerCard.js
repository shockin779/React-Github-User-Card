import React from 'react';

import './FollowerCard.css';

const FollowerCard = props => {
    return (
        <div className='follower-card'>
            <div className='follower-image'>
                <img src={props.follower.avatar_url} />
            </div>
            <div className='follower-description'>
                <h2>{props.follower.login}</h2>
                <p>Type:<br></br> {props.follower.type}</p>
            </div>
        </div>
    );
}

export default FollowerCard;