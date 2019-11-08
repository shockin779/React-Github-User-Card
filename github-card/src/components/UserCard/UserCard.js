import React from 'react';
import axios from 'axios';

import './UserCard.css';

class UserCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            githubUser: ''
        }
    }

    async componentDidMount() {
        let res = await axios.get('https://api.github.com/users/shockin779');
        let user = res.data;
        console.log(user)
        this.setState({githubUser: user});
    }

    componentDidUpdate() {
        
    }

    render() {
        let thisUser = this.state.githubUser;
        return(
            <div className='user-card-wrapper'>
                <div className='user-card'>
                    <div className='user-image'>
                        <img src={thisUser.avatar_url} />
                    </div>
                    <div className='user-description'>
                        <h2>{thisUser.name}</h2>
                        <p>Bio:<br></br> {thisUser.bio}</p>
                        <p>Total followers of {thisUser.name}: {thisUser.followers}</p>
                        <p>Total users {thisUser.name} is following: {thisUser.following}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCard;