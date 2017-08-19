import React from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router';
import './LandingPage.css';

class LandingPage extends React.Component{
    render(){
        return( 
            <div>
                <div className="landingpage-image">
                    <Logo />
                    <div className="blurred">
                        <h4>Welcome to Yumshub</h4>
                        <Link to="/login"><button>Login</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;