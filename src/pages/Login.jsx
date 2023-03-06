import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import './pages.css'
const Login = () => {
  return (
    <>
    <section>
      <h2>Login Form</h2>
      <div className="container">
        {/* login Form */}
        <form action="">
          <div className="formGroup">
            <label htmlFor="">Username</label>
            <input type="text" placeholder='UserName'/>
          </div>
          <div className="formGroup">
            <label htmlFor="">PassWord</label>
            <input type="password" placeholder='PassWord'/>
          </div>
          <div className="formGroup">
          
           <Link to="/DashBoard"><input type="submit" value="Login"/></Link> 
          </div>
          <div className="formLinks">
            <Link to="#">Forgot Password</Link>
            <Link to="/SignUp">Sign Up</Link>
          </div>
        </form>
       
      </div>


    </section>
      <Footer />
      </>
  )
}

export default Login