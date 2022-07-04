import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Input, Menu, Segment } from 'semantic-ui-react'

export default class Navbar extends Component {
  render() {
    return (
      <Menu pointing>
        <Menu.Item as={NavLink} to="/"
          name='home'
        // active={activeItem === 'home'}
        // onClick={this.handleItemClick}
        />
        <Menu.Item as={NavLink} to="/transactions"
          name='Transactions'
        // active={activeItem === 'messages'}
        // onClick={this.handleItemClick}
        />
        <Menu.Item as={NavLink} to="/form"
          name='Add Transaction'
        // active={activeItem === 'friends'}
        // onClick={this.handleItemClick}
        />
        {/* <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu> */}
      </Menu>
    )
  }
}
