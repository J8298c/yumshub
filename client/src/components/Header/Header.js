import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import MenuItem from './MenuItem';
import MenuIcon from './MenuIcon';
import './header.css';

const Header = () => (
    <Menu className='menu-header'>
        <MenuItem
            name="YumsHub"
        />
        <Menu.Menu position='right'>
            <MenuItem
                name='Contact Us'
            />
            <MenuIcon
                iconName='alarm'
            />
            <MenuIcon
                iconName='user'
            />
            <MenuIcon
                iconName='shopping cart'
            />
        </Menu.Menu>
    </Menu>
);
export default Header;