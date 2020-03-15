import React, { Component } from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import MainPage from './components/mainpage/MainPage'
import Tutorials from './components/tutorialSummary/Tutorials'
import Contact from './components/contact/ContactPage'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/tutorialSummary' component={Tutorials} />
            <Route exact path='/contact' component={Contact} />
          </Switch>

        </div>
       </BrowserRouter>
      );  
    }
}

export default App;
