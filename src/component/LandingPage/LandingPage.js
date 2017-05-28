import React from 'react';
import Logo from '../Logo/Logo';
import { Link } from 'react-router';
import './LandingPage.css';

class LandingPage extends React.Component{
    render(){
        return( 
            <div>
                <div className="landingpage-image">
                </div>
                <div className="app-access">
                    <Logo />
                    <Link to="/login"><button>Login</button></Link>
                    <Link to="/signup"><button>Signup</button></Link>
                </div>
            </div>
        )
    }
}

export default LandingPage;