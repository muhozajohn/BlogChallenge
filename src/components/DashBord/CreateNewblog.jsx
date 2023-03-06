import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'
const CreateNewblog = () => {
  return (
    <>
    <section id='Dashbord'>
    <h2>ADMIN/BlOG CONTROL PANEL</h2>

    <div className="container blogContainer">

      <div className="blogMenu">
        <ul>
            <Link to="/DashBoard"><li>Home</li></Link>
            <Link to="/Manage"><li>Manage</li></Link>
            <Link to="/Create"><li>CreateNewBlog</li></Link>
            <Link to="/CreateNewuser"><li>CreateUser</li></Link>
            <Link to="/logout"><li>logout</li></Link>
        </ul>
      </div>

      <div className="blogContent">
        <h2>Create New Blog</h2>
      <form action="">
          <div className="formGroup">
            <label htmlFor="">Username</label>
            <input type="text" placeholder='UserName'/>
          </div>
          <div className="formGroup">
            <label htmlFor="">Title</label>
            <input type="text" placeholder='Title'/>
          </div>
          <div className="formGroup">
            <label htmlFor="">ProfilePIciture</label>
            <input type="file" placeholder='Title'/>
          </div>
          <div className="formGroup">
            <label htmlFor="">Description</label>
            <textarea placeholder='Description'/>
          </div>
          <div className="formGroup">
          
           <Link to="/blog"><input type="submit" value="Create Blog"/></Link> 
          </div>
         
        </form>
        
       
      </div>
    </div>




</section>
    <Footer/>
    </>

  )
}

export default CreateNewblog