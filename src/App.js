import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {loadTokenFromCookie} from "./actions";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './containers/Login'
import Register from './containers/Register'
import UserInfo from './containers/UserInfo'
import BaseLayout from './BaseLayout'

class App extends Component {
    componentWillMount() {
        const loadToken = this.props.loadToken;
        loadToken();
    }
    render() {
        return (
          <BrowserRouter>
            <Switch>
              <BaseLayout>
                <Route exact path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/info' component={UserInfo} />
              </BaseLayout>
            </Switch>
          </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadToken: () => dispatch(loadTokenFromCookie())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
