import React, { Component }  from 'react';
import './App.css';
import SearchForm from '../Forms/SearchForm'
import Container from '../Container/Container';
import { Route, Link } from 'react-router-dom';
import { fetchUserFavorites } from '../../util/apiCalls';
import LogInForm from '../Forms/LogInForm';
import SignUpForm from '../Forms/SignUpForm';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <section className="App">
        <header>
          <article className="headerContents">
          <h1>TuneIn Later</h1>
          <img src={require('./headphones.svg')} alt=""/>
          </article>
          {!this.props.user && 
          <article className="buttonContainer">
            <Link to="/login">
            <img id="existingUser" src={require('./user-silhouette.svg')} alt=""/>
            <button>LogIn</button>
            </Link>
            <Link to="/signup">
            <img id="newUser" src={require('./new-user.svg')} alt=""/>
            <button>SignUp</button>
            </Link>
          </article>}
        </header>
        <Route exact path='/signup' render={() => <SignUpForm />} />
        <Route exact path='/' render={() => <SearchForm />} />
        <Route exact path='/login' render={() => <LogInForm />} />
        <Route exact path='/' render={() => <Container/>} />
        <Route exact path='/my-collection' render={() => <Container/>}/>
      </section>
      );
    }
}

const mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps)(App);
