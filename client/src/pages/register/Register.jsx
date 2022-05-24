import React from 'react'
import './register.scss'
import logo from '../../component/navbar/images/netflix-logo.png'
import { useRef, useState } from 'react'
function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();
    const handleStart = () => {
        setEmail(emailRef.current.value);
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    }


    return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
                <img className='logo' src={logo} alt="" />
                <button className="loginButton">Sign In</button>
            </div>

        </div>

        <div className="container">
                <h1>Unlimited moveis, TV shows, and more</h1>
                <h2>Watch anywhere, cancle anytime</h2>
                <p>Readt to watch? Enter your email to start your membership</p>
            
            {!email ? (
            <div className="input">
                <input type="email" placeholder='Email address' ref={emailRef}/>
                <button className="registerButton" onClick={handleStart}>Get Started</button>
            </div>
            )
            : (
            <form className="input">
                <input type="password" placeholder='Password' ref={passwordRef}/>
                <button className="registerButton" onClick={handleFinish}>Start</button>
            </form>
            )}

        </div>
    </div>
  )
}

export default Register