import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
         <div className="App">
           <h1>
             GDG Senior
    
           </h1>
          
         </div>
       </BrowserRouter>
      );  
    }
}

export default App;
