import React from 'react';
import './Logo.css';

export default class Logo extends React.Component{
    render(){
        return (
            <div className="logo-container">
                <h1 className="logo"><span className="firstletter">Y</span><span className="secondletter">U</span><span className="thirdletter">M</span>
                <span className="fourthletter">S</span>
                </h1>
            </div>
        )
    }
}