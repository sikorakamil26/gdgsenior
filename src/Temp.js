import React from 'react';
import Firebase from './Firebase';

  class Temp extends React.Component {
    constructor () {
      super()
      this.state = {
        logo: '',
      }
      
      this.getImage('GDG Chapter lockup - GDG Senior')
    }
    
    getImage (image) {
      let { state } = this
      Firebase.child(`${image}.png`).getDownloadURL().then((url) => {
        state[image] = url
        this.setState(state)
      }).catch((error) => {
        // Handle any errors
      })
    }
  
    render() {
      return (
        <div>
          <img src={ this.state.logo } alt="LOGO" />
         </div>
      );
    }
  }

  export default Temp;