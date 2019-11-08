import React from 'react';
import axios from 'axios';

import FollowerCard from '../FollowerCard/FollowerCard';

import './Followers.css';

class Followers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followers: null
        }
    }

    async componentDidMount() {
        let res = await axios.get('https://api.github.com/users/shockin779/followers');
        let followersOfMe = res.data;
        console.log(followersOfMe)
        this.setState({followers: followersOfMe});
    }

    render() {
        if(this.state.followers) {
            return(
                <div className='follower-cards-wrapper'>
                    {
                        this.state.followers.map(follower => (
                            <FollowerCard key={follower.id} follower={follower} />
                        ))
                    }
                </div>
            );
        }
        else {
            return(
                <div>
                    <h3>Loading</h3>
                </div>
            );
        }

    }
}

export default Followers;