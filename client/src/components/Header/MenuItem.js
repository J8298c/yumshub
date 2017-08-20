import React from 'react';
import { Menu } from 'semantic-ui-react';

const MenuItem = (props) => (
    <Menu.Item>
        <p className='menu-item'>{props.name}</p>
    </Menu.Item>
);
export default MenuItem;