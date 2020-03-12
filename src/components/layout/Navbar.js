import React, { useState } from 'react';
import { Link, NavLink as RRNavLink } from 'react-router-dom';
import Logo from '../../assets/gdgSeniorLogo.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
// NavItem jest tez w reakcje, zaimportuj razem z Link NavBar i zmien nazwe NavBar z reactstrapa na RSNavBar na przyklad
  return (
    <div>
      <Navbar color="white" light expand="md" sticky={'top'} className="shadow-sm p-3 mb-5 bg-white rounded">
        <Link to="/" className="brand-logo"><img src={Logo} alt="logo" width="250vw"/></Link>
      
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          
          <Nav className="ml-md-auto" navbar>
            <NavItem>
              <NavLink exact to="/" activeClassName="active" className="nav-item" tag={RRNavLink}>Strona główna</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/tutorials" activeClassName="active" tag={RRNavLink}>Samouczek</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/links" activeClassName="active" tag={RRNavLink}>Linki</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/contact" activeClassName="active" tag={RRNavLink}>Kontakt</NavLink>
            </NavItem>
        
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
         
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
