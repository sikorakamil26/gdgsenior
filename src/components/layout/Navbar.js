import React, { useState, Component } from 'react';
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


class Navigation extends Component {

  state = {
    isOpen: false,
    top: 23, 
    left: 2, 
    width: 500,
    padding: 0,
  } 

 
    
  componentDidMount() {
    if(this.props.animated){
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    if(this.props.animated){
      window.removeEventListener('scroll', this.handleScroll);
    }
  }

  handleScroll = (e) => {

      let scrollTop = window.pageYOffset;
      const {isOpen, top, left, width, padding} = this.state

      if(isOpen) return
      if(window.screen.width <= 768){
        if(top !== 0 || left !== 0 || width !== 20 || padding !== 12 ){
          this.setState({
            top: 0, 
            left: 0, 
            width: 20,
            padding: 12,
          })
        }
        return;
      }

      if(scrollTop < window.screen.height/6){

        this.setState({
          top: this.mapNumberToRange(scrollTop, 0, (window.screen.height /6), 23, 0.5), 
          left: this.mapNumberToRange(scrollTop, 0, window.screen.height/6, 2, 0), 
          width: this.mapNumberToRange(scrollTop, 0, window.screen.height/6, 500, 250),
          padding: this.mapNumberToRange(scrollTop, 0, window.screen.height/6, 0, 12),
        })
        // console.log('size: ', this.mapNumberToRange(scrollTop, 0, window.screen.height, 60, 20))
        // console.log('left:', this.mapNumberToRange(scrollTop, 0, window.screen.height, 20, 0))
        // console.log('top:', this.mapNumberToRange(scrollTop, 0, window.screen.height, 25, 0))
      }else if(width !== 20 || left !== 0 || top !== 0 ){
        this.setState({
          top: 0.5, 
          left: 0, 
          width: 250,
          padding: 12,
        })
      }
  }

  mapNumberToRange = (number ,in_min, in_max, out_min, out_max) => {
    return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }


// NavItem jest tez w reakcje, zaimportuj razem z Link NavBar i zmien nazwe NavBar z reactstrapa na RSNavBar na przyklad
render() {

  let {isOpen, top, left, width, padding} = this.state

  if(!this.props.animated){
      top = 0.5
      left = 0
      width = 250
      padding = 12
  }
  
  if(isOpen || window.screen.width <= 768){
    console.log(window.screen.width)
    top = 0
    left = 0 
    width = 250
    padding = 20
  }

  return (
      <div>
        <Navbar color="white" light expand="md" fixed='top' className="shadow-sm p-3 bg-white rounded" >
          <Link to="/" className="brand-logo" style={{position: 'fixed', top: top +'vh', left: left + 'vw', padding: padding + 'px 0 0 ' + padding + 'px'}}>
            <img src={Logo} alt="logo" style={{width: width + 'px', minWidth: '250px', minTop: '100px'}} />
            </Link>
        
          <NavbarToggler onClick={()=>this.setState({isOpen: !isOpen})} className="ml-auto" />
          <Collapse isOpen={isOpen} navbar>
            
            <Nav className="ml-md-auto z-index-3" navbar>
              <NavItem>
                <NavLink exact to="/" activeClassName="active" className="nav-item" tag={RRNavLink}>Strona główna</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/tutorialSummary" activeClassName="active" tag={RRNavLink}>Portal Szkoleniowy</NavLink>
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
}

export default Navigation;
