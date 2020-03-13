import React from 'react'
import ContactForm from './ContactForm'
import { Container, Row, Col } from 'reactstrap'
import Navbar from '../layout/Navbar'
import MainBanner from './MainBanner' 

const MainPage = (props) => {
  return (
    <Container fluid>    
      <Navbar animated={true} />      
        <Row>
            <MainBanner />

        </Row>
       
    </Container>
  );
}

export default MainPage;