import React, { Component }  from 'react';
import './App.css';
import SearchForm from '../Forms/SearchForm'
import Container from '../Container/Container'


class App extends Component {
  render() {
    return (
        <section className="App">
          <SearchForm />
          <Container/>
        </section>
      );
    }
}

export default App;
