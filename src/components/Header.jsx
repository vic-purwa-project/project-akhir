import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar style = {{backgroundColor: '#066575', height:'75px'}} expand="md">
          <NavbarBrand style={{fontFamily: 'Indie Flower, cursive', fontSize: '40px', color: 'white'}} href="/">Candy🍬Mart</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{fontSize:'18px', color:'white'}} href="/components/">Products</NavLink>
              </NavItem>
              
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={{fontSize:'18px', color:'white'}} nav caret>
                    Account
                </DropdownToggle>
                <DropdownMenu right>
                  <NavLink to='/signin'>
                  <DropdownItem style={{fontSize:'18px'}}>
                    Sign In
                  </DropdownItem>
                  </NavLink>
                  <NavLink to='/signup'>
                  <DropdownItem style={{fontSize:'18px'}}>
                    Sign Up
                  </DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
