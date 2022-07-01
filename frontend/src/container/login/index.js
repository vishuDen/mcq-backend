import React, { useState } from 'react';
import axios from 'axios'
import { Navigate } from 'react-router-dom';


class Login extends React.Component {

  constructor(props) {
    super(props)
  }

  state = {
    name : '',
    password:'',
    error: false,
    submitted: false,
    login: true,
    password: '',
    worked: false
  }

  setName = (name) => {
    this.setState({name})
  }

  setEmail = (email) => {
    this.setState({email})
  }

  setPassword = (password) => {
    this.setState({password})
  }

  setLogin = (login) => {
    this.setState({login})
  }

  setSubmitted = (submitted) => {
    this.setState({submitted})
  }

  // Handling the name change
  handleName = (e) => {
    this.setName(e.target.value);
    this.setSubmitted(false);
  };

  // Handling the email change
  handleEmail = (e) => {
    this.setEmail(e.target.value);
    this.setSubmitted(false);
  };

  // Handling the password change
  handlePassword = (e) => {
    this.setPassword(e.target.value);
    this.setSubmitted(false);
  };

  // Handling the form submission
  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.email === '' || this.state.password === '') {
      this.setError(true);
    } else {
      try {
        const config = {
          headers: {
            "Content-type": "application/json"
          }
        }
        const { data } = await axios.post("/api/user/login", { email: this.state.email, password:this.state.password }, config);
        if (data) {
          localStorage.setItem('token', data.token)
         this.props.history.push('/dashboard')
        }

      } catch (error) {
        console.log(error)
      }
    }
  };

  // Showing success message
  successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: this.state.submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: this.state.error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  render() {
    return (
      <div className="wrapper">

        {/* Calling to the methods */}
        <div className="messages">
          {this.errorMessage()}
          {this.successMessage()}
        </div>
        <div>
          <div className="title-text">
            {this.state.login ? <div className="title login">Login Form</div> :
              <div className="title signup">Signup Form</div>
            }
          </div>
          <div className="form-container">
            <div className="slide-controls">
              <input type="radio" name="slide" id="login" checked={this.state.login} />
              <input type="radio" name="slide" id="signup" checked={!this.state.login} />
              <label onClick={() => this.setLogin(true)} htmlFor="login" className="slide login">Login</label>
              <label onClick={() => this.setLogin(false)} htmlFor="signup" className="slide signup">Signup</label>
              <div className="slider-tab"></div>
            </div>
            <div className="form-inner">
              {this.state.login ?
                <form onSubmit={this.handleSubmit} key={this.state.login} className="login">
                  <div className="field">
                    <input onChange={this.handleEmail} name="email" className="input"
                      value={this.state.email} type="text" placeholder="Email Address" required />
                  </div>
                  <div className="field">
                    <input onChange={this.handlePassword} name="password" type="password" placeholder="Password" required />
                  </div>
                  <div className="pass-link"><a href="#">Forgot password?</a></div>
                  <div className="field btn">
                    <div className="btn-layer"></div>
                    <input type="submit" value="Login" />
                  </div>
                  <div className="signup-link">Not a member? <a href="">Signup now</a></div>
                </form> :
                <form className="signup">
                  <div className="field">
                    <input onChange={() => this.setEmail} name="email" type="text" placeholder="Email Address" required />
                  </div>
                  <div className="field">
                    <input type="password" placeholder="Password" required />
                  </div>
                  <div className="field">
                    <input type="password" placeholder="Confirm password" required />
                  </div>
                  <div className="field btn">
                    <div className="btn-layer"></div>
                    <input type="submit" value="Signup" />
                  </div>
                </form>
              }
            </div>
          </div>
        </div>

      </div>
    )
  }
}


export default Login;