import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import './pages.css'
const Login = () => {
  return (
    <>
    <section>
      <h2>SignUp Form</h2>
      <div className="container">
        {/* login Form */}
        <form action="">
          <div className="formGroup">
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder='FullName'/>
          </div>
          <div className="formGroup">
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Email'/>
          </div>
          <div className="formGroup">
            <label htmlFor="">Username</label>
            <input type="text" placeholder='UserName'/>
          </div>
          <div className="formGroup">
            <label htmlFor="">PassWord</label>
            <input type="password" placeholder='PassWord'/>
          </div>
          <div className="formGroup">
          
            <input type="submit" value="Sign Up"/>
          </div>
          <div className="formLinks">
            <Link to="#">If You Already have Already Acount</Link>
            <Link to="/Login">Sign In</Link>
          </div>
        </form>
       
      </div>


    </section>
      <Footer />
      </>
  )
}

export default Login