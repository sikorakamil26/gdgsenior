import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  NavbarText
} from 'reactstrap';

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
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
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
// const Navbar = () => {
//     return (
//       <div className="nav_bar_custom">
//       <nav className="navbar navbar-expand-lg navbar-light">
//         <div className="d-flex flex-grow-1">
//             <span className="w-100 d-lg-none d-block"></span>
//             <a className="navbar-brand d-none d-lg-inline-block" href="#">
//               <img src={ Logo } width="300vw"/>
//             </a>
//             <a className="navbar-brand-two mx-auto d-lg-none d-inline-block" href="#">
//             </a>
//             <div className="w-100 text-right">
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//             </div>
//         </div>
//         <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
//             <ul id="menu" className="navbar-nav ml-auto flex-nowrap">
//                 <li className="nav-link m-2 menu-item nav-item">
//                     <Link class to="/">Strona główna</Link>
//                 </li>
//                 <li className="nav-item">
//                     <a href="#" className="nav-link m-2 menu-item">Linki</a>
//                 </li>
//                 <li className="nav-item">
//                     <a href="#" className="nav-link m-2 menu-item">O nas</a>
//                 </li>
//                 <li className="nav-item">
//                     <a href="#" className="nav-link m-2 menu-item">Samouczek</a>
//                 </li>
//                 <li className="nav-item">
//                     <a href="#" className="nav-link m-2 menu-item">Zaproś nas</a>
//                 </li>
//                 <li className="nav-item">
//                     <a href="#" className="nav-link m-2 menu-item">Organizatorzy</a>
//                 </li>
//                 <li className="nav-item">
//                     <a href="#" className="nav-link m-2 menu-item">Kontakt</a>
//                 </li>
//             </ul>
//         </div>
//     </nav>


//       </div>
//     )


// }
// export default Navbar;


