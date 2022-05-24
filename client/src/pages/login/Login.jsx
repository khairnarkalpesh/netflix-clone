import React from 'react'
import './login.scss'
import logo from '../../component/navbar/images/netflix-logo.png'
import { useRef, useState } from 'react'
function Login() {
    return (
    <div className='login'>
        <div className="top">
            <div className="wrapper">
                <img className='logo' src={logo} alt="" />
            </div>

        </div>

        <div className="container">
              <form action="">
                  <h1>Sign In</h1>
                  <input type="email" placeholder='Email' />
                  <input type="password" placeholder='Password' />
                  <button className="loginButton">Sign In</button>
                  <span>New to Netflix? <b>Sign up now</b></span>

                  <small>This page is protected by Google reCaptcha to ensure you're note a robot. <b>Learn more</b>. </small>
              </form>
        </div>
    </div>
  )
}

export default Login