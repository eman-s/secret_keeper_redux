import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from "../actions";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    updateState = (field) => {
        return (event) => {
            this.setState({[field]: event.target.value})
        }
    }

    login = (event) => {
        event.preventDefault();

        const login = this.props.login;
        login(this.state.email, this.state.password, () => {
          this.setState({
              email: "",
              password: ""
          });
        });
    }

    render() {
        return (
          <div className="align">
            <div className="grid">
              <form onSubmit={this.login} className="form login">
                <header className="login__header">
                  <h3 className="login__title">Login</h3>
                </header>
                <div className="login__body">
                  <div className="form__field">
                    <input type="email" placeholder="Email" value={this.state.email} onChange={this.updateState('email')} />
                  </div>
                  <div className="form__field">
                    <input type="password" placeholder="Password" value={this.state.password} onChange={this.updateState('password')} />
                  </div>
                </div>
                <footer className="login__footer">
                  <input type="submit" value="Login" />
                  <p></p>
                </footer>
              </form>
          </div>
        </div>


        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: !!state.token
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password, callback) => dispatch(login(username, password, callback))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
