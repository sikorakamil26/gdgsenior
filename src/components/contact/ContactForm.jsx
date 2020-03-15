import React, { Component } from 'react';
import {
    Container
  } from 'reactstrap';

  import { MDBInput } from 'mdbreact';
import './styles/contactStyle.scss'
class ContactForm extends Component {

    
    state = {
        email: {
            value: '',
            valid: false
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
          if (emailRex.test(e.target.value)) {
          
            this.setState({ email: { value: e.target.value, valid: true } });
            console.log(this.state.email)
            
          } else {
            this.setState({ email: {  value: e.target.value, valid: false } });
          }
          
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    changeHandler = event => {
      this.setState({ [event.target.name]: { value: event.target.value, valid: !!event.target.value } });
    };
    

    render() {
        
        return(
        <Container className = 'CustomForm container'>
        

        <section className="mb-4">

          <h2 className="h1-responsive font-weight-bold text-center my-4">Kontakt</h2>
          <p className="text-center w-responsive mx-auto mb-5">Masz jakieś pytanie? Może chcesz umówić się z nami na spotkanie, lub poprostu masz ciekawy pomysł, który chcesz zrealizować? Skontaktuj się z nami wypełniając poniższy formularz.</p>
      
          <div className="row">
      
              <div className="col-md-9 mb-md-0 mb-5">
                  <form id="contact-form" name="contact-form" action="mail.php" method="POST">
      
                      <div className="row">
      
                          <div className="col-md-6">
                              <MDBInput label="Imię" />
                          </div>
                          <div className="col-md-6">
                              <div className="md-form mb-0">
                            
                               <MDBInput 
                               
                               label="Email"
                               className={this.state.email.valid ? "form-control is-valid" : "form-control is-invalid"}
                               onChange={(e) => {this.validateEmail(e)}}
                               type="email"
                               id="defaultFormRegisterConfirmEx3"
                               name="email"
                               required
                                />
                                
                                <div className="valid-feedback" style={this.state.email.valid ? {display: 'contents'} : {display: 'none'}}>Ten adres email jest poprawny.</div>
                                <div className="invalid-feedback" style={!this.state.email.valid && this.state.email.value !== "" ? {display: 'contents'} : {display: 'none'}}>Proszę podaj poprawny adres email.</div>
                              </div>
                          </div>
      
                      </div>
                      <div className="row">
                          <div className="col-md-12">
                            <MDBInput label="Temat" />
                          </div>
                      </div>
      
                      <div className="row">
                          <div className="col-md-12">
                          <MDBInput type="textarea" label="Treść wiadomości" rows="5" />
                          </div>
                      </div>
                  </form>
      
                  <div className="text-center text-md-left">
                      <button className="btn btn-primary" onClick={(e) => this.handleSubmit(e)}>Wyślij</button>
                  </div>
                  <div className="status"></div>
              </div>
              <div className="col-md-3 text-center">
                  <ul className="list-unstyled mb-0">
    
                      <li><i className="fas fa-phone mt-4 fa-2x"></i>
                          <p>+ 01 234 567 89</p>
                      </li>
      
                      <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                          <p>kontakt@gmail.com</p>
                      </li>
                  </ul>
              </div>
      
          </div>
    
        </section>
        </Container>

        )
    };
    
}

export default ContactForm;