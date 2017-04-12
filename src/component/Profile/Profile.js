import React from 'react';
import {connect} from 'react-redux';
import './Profile.css';
import {Link} from 'react-router';

export class Profile extends React.Component{
    render(props){
        const userImage = 'http://coddify.com/wp-content/uploads/avatar-1.png';
        const {email, displayName} = this.props.user;
        return (
            <div>
                <div className="userImage">
                <img src={userImage} className="profile-pic" alt="bio pic of user"/>
                </div>
                <div className="user-profile">
                    <label htmlFor="email">Email:</label>
                    <input type="text" value={email} name="email" readOnly/>
                    <br/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" value="*********" name="password" readOnly/>
                    <br/>
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" value={displayName} name="firstname" readOnly/>
                    <div className="gohome"><Link to="/">Back to search</Link></div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {user} = state;
    return {
        user
    }
}
export default connect(mapStateToProps, null)(Profile);
