import React from 'react'
import ContactForm from './ContactForm'
import { Container, Row, Col } from 'reactstrap'
import './styles/mainBanner.scss'

const MainBanner = (props) => {
  return (
    <Container className='main-banner' fluid>   
        <Row className='banner-header'>
            <Col>
                <h1>jakis opis</h1>
            </Col>
            <Col><ContactForm /></Col>
        </Row>
    </Container>
  );
}

export default MainBanner;