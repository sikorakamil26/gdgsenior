import './styles/activityBanner.scss'

import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap'

class ActivitiesBanner extends Component{

  state = {
    hoverItem: 'meet',
  }

  render() {

  let {hoverItem} = this.state;
  let squareColor = '#E8F0FE'
  let imgIconUrl = ''
  let imgText = 'temptemptemp'

  if(hoverItem === 'meet'){
    squareColor = '#E8F0FE'
  }else if (hoverItem === 'tutorial'){
    squareColor = '#FCE8E6'
  }else if (hoverItem === 'help'){
    squareColor = '#FEF7E0'
  }else if (hoverItem === 'integration'){
    squareColor = '#E6F4EA'
  }

    return (
     
      <div>

        <div className='header-wrapper'>
          <h1 className='header'>
                Czym się zajmujemy
          </h1>
        </div>
         
  
         <Container fluid className= 'd-flex main-wrapper'>
            <div className='list-wrapper'>
              <ul>
                <li onMouseEnter={()=>this.setState({hoverItem: "meet"})}>Spotkania</li>
                <li onMouseEnter={()=>this.setState({hoverItem: "tutorial"})}>Szkolenia</li>
                <li onMouseEnter={()=>this.setState({hoverItem: "help"})}>Pomoc</li>
                <li onMouseEnter={()=>this.setState({hoverItem: "integration"})}>Integracja</li>
              </ul>
            </div>
            <div className='image-wrapper'>
            </div>
            <div className='front-image' style={{backgroundColor: squareColor}}>
              <img src={{imgIconUrl}} className='image-icon' alt='icon'></img>
              <p className='image-text'>
                {imgText}
              </p>
            </div>
            
            <div className='back-image'></div>
            
          </Container>
        </div>
    );
  }

};

export default ActivitiesBanner;