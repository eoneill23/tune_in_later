import React, { Component }  from 'react';
import './App.css';
import { fetchAlbums } from '../../util/apiCalls'
import LogInForm from '../SignUp_LogIn_Forms/LogInForm'

class App extends Component {
  constructor () {
    super();
    this.state = {
      albums: []
    }
  }
  componentDidMount() {
    fetchAlbums()
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <section className="App">
        {/* <LogInForm /> */}
      </section> 
      );
    }
}

export default App;
