import React from 'react'
import ContactForm from './ContactForm'
import { Container, Row, Col } from 'reactstrap'
import TempImg from '../../assets/custompagewp.jpg'

const MainPage = (props) => {
  return (
    <Container>          
        <Row>
            <Col sm={{ size: '6'}}> <img src={TempImg} className="tempImage" alt="temp" width="100%"/></Col>
            <Col sm={{ size: '6'}}><ContactForm /></Col>
        </Row>
    </Container>
  );
}

export default MainPage;