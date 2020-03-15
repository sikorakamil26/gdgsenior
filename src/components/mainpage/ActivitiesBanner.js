import './styles/activityBanner.scss'

import React, { Component } from 'react';
import { Container } from 'reactstrap'
import ScrollAnimation from 'react-animate-on-scroll'

import MeetingsIcon from '../../assets/icons/meetingIconBlue.png'
import TutorialsIcon from '../../assets/icons/tutorialIconPink.png'
import HelpIcon from '../../assets/icons/helpIconYellow.png'
import SocializingIcon from '../../assets/icons/integrationIcon.png'

class ActivitiesBanner extends Component{

  state = {
    hoverItem: 'meet',
  }

  render() {

  let {hoverItem} = this.state;
  let squareColor = '#E8F0FE'
  let imgIcon = MeetingsIcon
  let imgText = 'temptemptemp'

  if(hoverItem === 'meet'){
    squareColor = '#E8F0FE'
    imgIcon = MeetingsIcon
    imgText = 'Organizujemy spotkania w domach seniora, oraz eventy skierowane dla osób starszych. Chcemy przybliyć im technologię i urozmaicić zycie'
  }else if (hoverItem === 'tutorial'){
    squareColor = '#FCE8E6'
    imgIcon = TutorialsIcon
    imgText = 'Nasz zestaw szkoleń nauczy Cię podstaw korzystania z internetu oraz nowoczesnych aplikacji. Dowiedz się jak ułatwić swoje zycie'
  }else if (hoverItem === 'help'){
    squareColor = '#FEF7E0'
    imgIcon = HelpIcon
    imgText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget nibh ut magna molestie consequat. Sed pretium pharetra ipsum, nec bibendum nibh accumsan eget. Mauris ex ligula, scelerisque eu lorem vitae, pharetra fermentum urna.'
  }else if (hoverItem === 'integration'){
    squareColor = '#E6F4EA'
    imgIcon = SocializingIcon
    imgText = 'Vestibulum sed metus ligula. Aliquam dapibus nec tortor quis gravida. Nulla non diam vehicula, malesuada eros vestibulum, viverra lorem. Maecenas ac eros sed lacus ultrices sodales in auctor massa. '
  }

    return (
     
  
      <div className='container-fluid main-wrapper'>
         <div className='header-wrapper'>
           <h1 className='header'>
                 Czym się zajmujemy?
           </h1>
         </div>
 
 
          <div className='wrapper-grid'>
           <div className='list-wrapper'>
              <ul>
                <ScrollAnimation animateIn='fadeIn'>
                  <li onMouseEnter={()=>this.setState({hoverItem: "meet"})}>Spotkania</li>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn'>
                  <li onMouseEnter={()=>this.setState({hoverItem: "tutorial"})}>Szkolenia</li>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn'>
                  <li onMouseEnter={()=>this.setState({hoverItem: "help"})}>Pomoc</li>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn'>
                  <li onMouseEnter={()=>this.setState({hoverItem: "integration"})}>Integracja</li>
                </ScrollAnimation>
              </ul>
            </div>
              <div className='front-image' style={{backgroundColor: squareColor}}>
                <img src={imgIcon} className='image-icon' alt='icon'/>
                  <p className='image-text'>
                    {imgText}
                  </p>
              </div>
            <div className='back-image'/>
          </div>
      </div>
    );
  }

};

export default ActivitiesBanner;