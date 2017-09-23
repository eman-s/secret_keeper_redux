import React, {Component} from 'react';
import {connect} from 'react-redux';
import {register} from "../actions";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            full_name: "",
            message: "",
            password: ""
        }
    }

    updateState = (field) => {
        return (event) => {
            this.setState({[field]: event.target.value})
        }
    }

    register = (event) => {
        event.preventDefault();

        const register = this.props.register;
        register(this.state, () => {
          this.setState({
              email: "",
              full_name: "",
              message: "",
              password: ""
          })
        });
    }

    render() {
        return (
          //
          <div className="align">
            <div className="grid">
              <form onSubmit={this.register} className="form login">
                <header className="login__header">
                  <h3 className="login__title">Register</h3>
                </header>
                <div className="login__body">
                  <div className="form__field">
                    <input type="email" placeholder="Email" value={this.state.email} onChange={this.updateState('email')} />
                  </div>
                  <div className="form__field">
                    <input type="text" placeholder="Full Name" value={this.state.full_name} onChange={this.updateState('full_name')} />
                  </div>
                  <div className="form__field">
                    <input type="text" placeholder="Secret" value={this.state.message} onChange={this.updateState('message')} />
                  </div>
                  <div className="form__field">
                    <input type="password" placeholder="Password" value={this.state.password} onChange={this.updateState('password')} />
                  </div>
                </div>
                <footer className="login__footer">
                  <input type="submit" />
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
        register: (regInfo, callback) => dispatch(register(regInfo, callback))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
