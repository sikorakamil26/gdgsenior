import React from 'react'
import { Container, Row } from 'reactstrap'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import ContactForm from './ContactForm'

const MainPage = (props) => {
  return (
    <Container fluid>    
      <Navbar />  
        <Row>
           <ContactForm />
        </Row>
        <Row>
             <Footer />
        </Row>
    </Container>
  );
}

export default MainPage;