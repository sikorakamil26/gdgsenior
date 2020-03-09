import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';



function App() {
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

export default App;
