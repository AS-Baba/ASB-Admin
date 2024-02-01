import React from 'react'
import {Images} from "../images/index"
import login from "../images/auth/Login_bg.jpg"
import PropTypes from 'prop-types'

const Register = props => {

  return (
    <div className="container-scroller" >
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="row w-100 m-0">
        <div className="content-wrapper full-page-wrapper d-flex align-items-center auth login-bg " style={{background:'url('+ require('../images/auth/Login_bg.jpg')+')'}}>
            <div className="container card col-lg-9 mx-auto">
              <div className="card-body px-5 py-5">
                <h3 className="card-title text-left mb-3">Register</h3>
                <form className= "row">
                 <div className = "col col-md-6">

                  <div className="form-group">
                    <label>First name</label>
                    <input
                    type="text"
                    className="form-control p_input"
                    name = "first_name"
                    />
                  </div>
                   <div className="form-group">
                    <label>Last name</label>
                    <input
                    type="text"
                    className="form-control p_input"
                    name = "last_name"
                    />
                  </div>
                   <div className="form-group">
                    <label>Phone</label>
                    <input
                    type="text"
                    className="form-control p_input"
                    name = "phone"
                    />
                  </div>
                   <div className="form-group">
                    <label>Location</label>
                    <input
                    type="text"
                    className="form-control p_input"
                    name = "location"
                    />
                  </div>
                 </div>

                 <div  className ="col col-md-6">
                       <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control p_input" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control p_input" />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control p_input" />
                  </div>
                   <div className="form-group">
                    <label>Photo</label>
                    <input type="file" name ="photo" className="form-control p_input" />
                  </div>
                  <div className="form-group d-flex align-items-center justify-content-between">
                    <div className="form-check">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" /> Remember me </label>
                    </div>
                    <a href="#" className="forgot-pass">Forgot password</a>
                  </div>

                 </div>


                  <div className =" col col-md-4 m-auto">
                        <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-block enter-btn">Login</button>
                  </div>
                  <div className="d-flex">
                    <button className="btn btn-facebook col mr-2">
                      <i className="mdi mdi-facebook"></i> Facebook </button>
                    <button className="btn btn-google col">
                      <i className="mdi mdi-google-plus"></i> Google plus </button>
                  </div>
                  <p className="sign-up text-center">Already have an Account?<a href="#"> Sign Up</a></p>
                  <p className="terms">By creating an account you are accepting our<a href="#"> Terms & Conditions</a></p>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Register.propTypes = {}

export default Register
