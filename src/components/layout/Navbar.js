import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/custom.scss";
import Logo from '../../assets/gdgSeniorLogo.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
// NavItem
  return (
    <div>
      <Navbar color="white" light expand="md" sticky={'top'} className="shadow-sm p-3 mb-5 bg-white rounded">
        <NavbarBrand><Link to="/" className="brand-logo"><img src={Logo} alt="logo" width="250vw"/></Link></NavbarBrand>
      
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          
          <Nav className="ml-md-auto" navbar>
            <NavItem>
              <NavLink href="/components" activeClassName="active">Strona główna</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tutorials" activeClassName="active">Samouczek</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" activeClassName="active">Linki</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="" activeClassName="active">Kontakt</NavLink>
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
