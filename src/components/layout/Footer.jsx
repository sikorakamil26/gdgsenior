import React from 'react'
import { Container  } from 'reactstrap'

const Footer = (props) => {
  return (
      <Container fluid style={{padding: 0}}>

     
    <footer className="page-footer font-small elegant-color pt-4">

    <div className="container text-center text-md-left">
  
      <div className="row text-center text-md-left mt-3 pb-3">
  
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">GDG Warszawa</h6>
          <p>Warszawska społeczność użytkowników i developerów technologii Google. </p>
        </div>
  
        <hr className="w-100 clearfix d-md-none"/>
  
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Menu</h6>
          <p>
            <a href="#!">Strona główna</a>
          </p>
          <p>
            <a href="#!">Portal szkoleniowy</a>
          </p>
          <p>
            <a href="#!">Linki</a>
          </p>
          <p>
            <a href="#!">Kontakt</a>
          </p>
        </div>
  
        <hr className="w-100 clearfix d-md-none"/>
  
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Przydatne linki</h6>
          <p>
            <a href="#!">Google</a>
          </p>
          <p>
            <a href="#!">Google callendar</a>
          </p>
          <p>
            <a href="#!">Gogle maps</a>
          </p>
          <p>
            <a href="#!">Google drive</a>
          </p>
        </div>
  
        <hr className="w-100 clearfix d-md-none"/>
  
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <h6 className="text-uppercase mb-4 font-weight-bold">Kontakt</h6>
          <p>
            <i className="fas fa-home mr-3"></i> Warszawa</p>
          <p>
            <i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
          <p>
            <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
        </div>
  
      </div>
  
      <hr className='grey lighten-5'/>
  
      <div className="row d-flex align-items-center">
  
        <div className="col-md-7 col-lg-8">
  
          <p className="text-center text-md-left">© 2020 Copyright:
            <a href="https://mdbootstrap.com/">
              <strong> GDG Warsaw</strong>
            </a>
          </p>
  
        </div>
  
        <div className="col-md-5 col-lg-4 ml-lg-0">
  
          <div className="text-center text-md-right">
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                  <i className="fab fa-google-plus-g"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
  
        </div>
  
      </div>
  
    </div>
  
  </footer>
  </Container>
  );
}

export default Footer;