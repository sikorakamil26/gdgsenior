import React, { Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormFeedback,
  } from 'reactstrap';
import './styles.scss'
class ContactForm extends Component {

    
    state = {
        validate: {
            email: '',
        },
        name: '',
    }
    
    handleChange = (e) => {
        this.setState ({
            [e.target.id]: e.target.value
        });
    }

    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
          if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
          } else {
            validate.emailState = 'has-danger'
          }
          this.setState({ validate })
        }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
        
    

    render() {
        
        return(
        <Container className = 'CustomForm container'>
        <h1 className="formHeading">Kontakt</h1>
        <p className='formSubHeading'>Napisz do nas :), jakis tekst jakis tekst</p>
        <Form className="form" onSubmit={this.handleSubmit}>
            <Col>
              <FormGroup>
            
                
                <Input
                type="email"
                name="email"
                id="exampleEmail"
                valid={ this.state.validate.emailState === 'has-success' }
                invalid={ this.state.validate.emailState === 'has-danger' }
                onChange={ (e) => {
                            this.validateEmail(e)
                            this.handleChange(e)
                          } }
                ></Input>
                <Label className="inputLabel">Email</Label>
              <FormFeedback valid>
                Ten adres email jest prawidłowy
              </FormFeedback>
              <FormFeedback>
                O nie! Wygląda na to, że ten adres email jest niepoprawny
              </FormFeedback>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  id="name"
                />
                <Label className="inputLabel">Imię</Label>
              </FormGroup>
            </Col>
            <div className="submitButton"><Button className="submitButton" type="submit">Wyślij</Button></div>
        </Form>
        </Container>
        

        )
        };
    
}

export default ContactForm;