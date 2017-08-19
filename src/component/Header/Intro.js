import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router';
import HeadContainer from './HeadContainer';
import './Header.css';

export default function Intro() {
        return (
            <div>
                <HeadContainer />
                <h1 className="help-title">Welcome to YumsHub</h1>
                <div className="help-para">We send you all the restuarants nearby that deliver you pick the restaurant you want. Now that you choose your restaurant you will be taken to the menu page.
                Ahh! The menu page one step closer to your doorbell ringing, with your delicious food delivery, so lets wrap this up. While browsing through the menu find what you want to eat and click the <span><Button className='demo-button'>add to cart</Button></span> and just like that its added to your cart.
                Nice now on to your final step click on the <span><Glyphicon className="demo-cart" glyph="shopping-cart"/></span> from here double check your order click pay and your foods on its way.
                </div>
                <div className="help-link"><Link className="help-link" to="/">Proceed to the app</Link></div>
            </div>
        )
    }
