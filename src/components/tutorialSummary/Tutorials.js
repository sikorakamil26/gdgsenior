import React from 'react';
import TutorialRow from './TutorialRow';
import { Container } from 'reactstrap';
import NavBar from '../layout/Navbar'

const Tutorials = (props) => {
  return (
    <Container>
      <NavBar />
        <TutorialRow />
        <TutorialRow />
        <TutorialRow />
        <TutorialRow />
    
    
    </Container>
  );
}

export default Tutorials;