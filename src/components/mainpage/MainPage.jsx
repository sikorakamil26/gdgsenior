import React from 'react'
import { Container, Row } from 'reactstrap'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import MainBanner from './MainBanner' 
import ActivitiesBanner from './ActivitiesBanner'

const MainPage = (props) => {
  return (
    <Container fluid>    
      <Navbar animated={true} />      
        <Row>
            <MainBanner />
        </Row>
        <Row>
          <ActivitiesBanner />
        </Row>

        <Row>
         <Footer />
        </Row>
        
    </Container>
  );
}

export default MainPage;