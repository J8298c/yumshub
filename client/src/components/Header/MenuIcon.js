import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

const MenuIcon = (props) => (
    <Menu.Item>
        <span className='menu-item'>
        <Icon
            name={props.iconName}
        />
        </span>
    </Menu.Item>
);
export default MenuIcon;