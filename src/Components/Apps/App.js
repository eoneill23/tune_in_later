import React, { Component }  from 'react';
import './App.css';
import SearchForm from '../Forms/SearchForm'
import Container from '../Container/Container';
import { Router, Route, Link, Redirect } from 'react-router-dom';
import LogInForm from '../Forms/LogInForm';
import SignUpForm from '../Forms/SignUpForm';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    if (this.props.user !== {}) {
      return <Redirect to="/login" />
    }
    
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

const mapStateToProps = ({ user }) => ({
  user
});

export default connect(mapStateToProps)(App);
