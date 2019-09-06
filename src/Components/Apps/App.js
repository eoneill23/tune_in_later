import React, { Component }  from 'react';
import './App.css';
import SearchForm from '../Forms/SearchForm'
import Container from '../Container/Container';
import { Router, Route, Link } from 'react-router-dom';
import LogInForm from '../Forms/LogInForm';
import SignUpForm from '../Forms/SignUpForm';

class App extends Component {
  render() {
    return (
      <section className="App">
        <Route exact path='/' render={() => <SearchForm />} />
        <Route exact path='/' render={() => <Container/>} />
        <Route exact path='/login' render={() => <LogInForm />} />
        <Route exact path='/signup' render={() => <SignUpForm />} />
      </section>
      );
    }
}

export default App;
