import React, { Component }  from 'react';
import './App.css';
import { fetchAlbums } from '../../util/apiCalls'
// import LogInForm from '../Forms/LogInForm'
import SearchForm from '../Forms/SearchForm'
import Container from '../Container/Container'

class App extends Component {
  constructor () {
    super();
    this.state = {
      albums: []
    }
  }

  // componentDidMount() {
  //   fetchAlbums()
  //   .then(data => console.log(data))
  //   .catch(error => console.log(error))
  // }

  searchArtist = (queryArtist) => {
    fetchAlbums(queryArtist)
    .then(albums => this.setState({albums: albums.results}))
    .catch(error => console.log(error))
  }

  render() {
    return (
        <section className="App">
          <SearchForm searchArtist={this.searchArtist}/>
          <Container albums={this.state.albums}/>
        </section>
      );
    }
}

export default App;
