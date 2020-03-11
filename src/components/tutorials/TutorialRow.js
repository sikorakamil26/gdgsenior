import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
import { TempImg } from '../../assets/318x180.svg'


const TutorialRow = (props) => {
  return (
    <CardGroup>
      <Card>
        <CardImg top width="100%" src={TempImg} alt="Card image cap" />
        <CardBody>
          <CardTitle>Tutorial 1</CardTitle>
          <CardSubtitle>Jakiś opis</CardSubtitle>
          <CardText>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</CardText>
          <Button>Czytaj dalej</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
        <CardTitle>Tutorial 1</CardTitle>
          <CardSubtitle>Jakiś opis</CardSubtitle>
          <CardText>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</CardText>
          <Button>Czytaj dalej</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
        <CardTitle>Tutorial 1</CardTitle>
          <CardSubtitle>Jakiś opis</CardSubtitle>
          <CardText>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</CardText>
          <Button>Czytaj dalej</Button>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default TutorialRow;