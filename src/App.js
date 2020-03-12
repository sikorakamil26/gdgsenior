import React, { Component } from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import MainPage from './components/mainpage/MainPage'
import Tutorials from './components/tutorials/Tutorials'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/tutorials' component={Tutorials} />
          </Switch>

        </div>
       </BrowserRouter>
      );  
    }
}

export default App;
