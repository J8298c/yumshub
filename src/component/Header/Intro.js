import React from 'react';
import {Button, Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router';

export default function Intro() {
        return (
            <div>
                <h1>Welcome to YumsHub</h1>
                <p>The app that lets you order food without having to pick up your phone</p>
                <div>We send you all the restuarants nearby that deliver you pick the restaurant you want. Now that you choose your restaurant you will be taken to the menu page.</div>
                <div>
                Ahh! The menu page one step closer to your doorbell ringing, with your delicious food delivery, so lets wrap this up. While browsing through the menu find what you want to eat and click the <span><Button className='demo-button'>add to cart</Button></span> and just like that its added to your cart.
                </div>
                <div>
                Nice now on to your final step click on the <span><Glyphicon className="demo-cart" glyph="shopping-cart"/></span> from here double check your order click pay and your foods on its way.
                </div>
                <div><Link to="/">Proceed to the app</Link></div>
            </div>
        )
    }
