import React, { Component }  from 'react';
import './App.css';
import SearchForm from '../Forms/SearchForm'
import Container from '../Container/Container';
import { Route, Redirect } from 'react-router-dom';
import LogInForm from '../Forms/LogInForm';
import SignUpForm from '../Forms/SignUpForm';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const {user} = this.props;
    
    return (
      <section className="App">
        <Route exact path='/' render={() => user ? <Redirect to="/" /> :  <Redirect to='/login' />} />
        <Route exact path='/signup' render={() => <SignUpForm />} />
        <Route exact path='/' render={() => <SearchForm />} />
        <Route exact path='/login' render={() => <LogInForm />} />
        <Route exact path='/' render={() => <Container/>} />
      </section>
      );
    }
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(App);
