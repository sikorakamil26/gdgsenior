import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarToggler,
  UncontrolledDropdown,
} from 'reactstrap';
import { Link, NavLink as RRNavLink } from 'react-router-dom';
import React, { Component } from 'react';
import './styles/navbarStyles.scss'
import Logo from '../../assets/gdgSeniorLogo.png';

class Navigation extends Component {

  state = {
    isOpen: false,
    top: 33, 
    left: 4, 
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
      if(window.screen.width <= 1220){
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
          top: this.mapNumberToRange(scrollTop, 0, window.screen.height /6, 33, 0.8), 
          left: this.mapNumberToRange(scrollTop, 0, window.screen.height/6, 4, 0), 
          width: this.mapNumberToRange(scrollTop, 0, window.screen.height/6, 500, 300),
          padding: this.mapNumberToRange(scrollTop, 0, window.screen.height/6, 0, 12),
        })
      }else if(width !== 20 || left !== 0 || top !== 0 ){
        this.setState({
          top: 0.8, 
          left: 0, 
          width: 300,
          padding: 12,
        })
      }
  }

  mapNumberToRange = (number ,in_min, in_max, out_min, out_max) => {
    return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }


render() {

  let {isOpen, top, left, width, padding} = this.state

  if(!this.props.animated){
      top = 0.5
      left = 0
      width = 250
      padding = 12
  }
  
  if(isOpen || window.screen.width <= 1120){
    console.log(window.screen.width)
    top = 0
    left = 0 
    width = 250
    padding = 20
  }

  return (
      <div>
        <Navbar color="white" light expand="md" fixed='top' className="shadow-sm p-3 bg-white" >
          <Link to="/"  style={{position: 'fixed', top: top +'vh', left: left + 'vw', padding: padding + 'px 0 0 ' + padding + 'px'}}>
            <img src={Logo} alt="logo" style={{width: width + 'px', minWidth: '250px', minTop: '100px', position: 'fixed', top: top +'vh', left: left + 'vw', padding: padding + 'px 0 0 ' + padding + 'px'}} />
          </Link>
        
          <NavbarToggler onClick={()=>this.setState({isOpen: !isOpen})} className="ml-auto" />
          <Collapse isOpen={isOpen} navbar>
            
            <Nav className="ml-md-auto z-index-3 nav-items-custom" navbar>
              <NavItem>
                <NavLink exact to="/" activeClassName="active" tag={RRNavLink}>Strona główna</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/tutorialSummary" activeClassName="active" tag={RRNavLink}>Portal szkoleniowy</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/links" activeClassName="active" tag={RRNavLink}>Linki</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/contact" activeClassName="active" tag={RRNavLink}>Kontakt</NavLink>
              </NavItem>
          
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
