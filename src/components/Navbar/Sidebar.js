import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

export default class SideBar extends React.Component {
  render() {
    return (
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem >Menu</MenuItem>
          <SubMenu title="Components" >
            <MenuItem>Voyages</MenuItem>
            <MenuItem>Mon profil</MenuItem>
            <MenuItem>A propos</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    );
  }
}

