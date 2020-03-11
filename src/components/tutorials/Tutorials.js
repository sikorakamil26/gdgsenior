import React from 'react';
import TutorialRow from './TutorialRow';
import { Container } from 'reactstrap';

const Tutorials = (props) => {
  return (
    <Container>
          
        <TutorialRow />
        <TutorialRow />
        <TutorialRow />
        <TutorialRow />
    
    
    </Container>
  );
}

export default Tutorials;