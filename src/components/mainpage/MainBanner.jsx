import './styles/mainBanner.scss'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import TempImage from '../../assets/temp/HannahGadsby_2019-embed.jpg'

const MainBanner = (props) => {
  return (
    <div className='main-banner'>
    <div className='square-container'>
      <ScrollAnimation animateIn='fadeIn'>
      <div className='intro-container'>
            <p className='intro-paragraph'>
              GDG Senior jest programem realizowanym przez GDG Warszawa.
              Mamy za zadanie edukować, pomagać i wspierać osoby starsze.
              Naszym celem jest tworzenie spotkań, wydarzeń i kursów online, które wspomogą rozwój osób dojrzałych, a także integrują osoby pragnące wdrożyć sie w najnowsze technologie.
            </p>
            <div className="button-wrapper">
              <button className='contact-button btn btn-primary btn-lg'>
              Kontakt
              </button>
            </div>
            </div>
        </ScrollAnimation>
        </div>

<div className='image-container'>
  <img src={TempImage} alt='temp' className='image-header'></img>
</div>



</div>
  );
}

export default MainBanner;