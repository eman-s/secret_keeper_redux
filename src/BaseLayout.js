import React, {Component} from 'react'
import {NavLink, Link} from 'react-router-dom'
import {logOut} from './actions'
import {connect} from 'react-redux'



class BaseLayout extends Component {
  render(){
    return(
      <div>
        <section>
          <div className='row'>
            <div className="col-md-3 col-sm-3 col-xs-6">
              <NavLink className="btn btn-sm animated-button victoria-one" to='/login'>Log In</NavLink>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-6">
              <NavLink className="btn btn-sm animated-button victoria-two" to='/register'>Register</NavLink>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-6">
              <NavLink className="btn btn-sm animated-button    victoria-one" to='/info'>Info</NavLink>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-6">
              <NavLink to='#' className="btn btn-sm animated-button victoria-two" onClick={this.props.logOutAsProp}>Log Out</NavLink>
            </div>
          </div>
        </section>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}

const mapStateToProps = () => {
  return{

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    logOutAsProp: () => dispatch(logOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout)
