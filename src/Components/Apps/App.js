import React, { Component }  from 'react';
import './App.css';
import { fetchAlbums } from '../../util/apiCalls'

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
      
      </section> 
      );
    }
}

export default App;
