import React from 'react'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import './Dash.css'

const Manage = () => {
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
                
            <div className="Managecards">

                <div className="mcontents">
                    <div><h3>Your most unhappy  customers are your greatest source of learning.</h3></div>
                    <div><h4>09/feb/2023</h4></div>
                    <div className="actions"><button className='btn'>Delete</button> <button className='btn'>Update</button> </div>
                </div>
                <div className="mcontents">
                    <div><h3>Destiny is All.</h3></div>
                    <div><h4>09/feb/2023</h4></div>
                    <div className="actions"><button className='btn'>Delete</button> <button className='btn'>Update</button> </div>
                </div>
                <div className="mcontents">
                    <div><h3>More Life.</h3></div>
                    <div><h4>09/feb/2023</h4></div>
                    <div className="actions"><button className='btn'>Delete</button> <button className='btn'>Update</button> </div>
                </div>
                <div className="mcontents">
                    <div><h3>source of learning.</h3></div>
                    <div><h4>19/feb/2023</h4></div>
                    <div className="actions"><button className='btn'>Delete</button> <button className='btn'>Update</button> </div>
                </div>
                <div className="mcontents">
                    <div><h3>Politics.</h3></div>
                    <div><h4>20/feb/2023</h4></div>
                    <div className="actions"><button className='btn'>Delete</button> <button className='btn'>Update</button> </div>
                </div>
                <div className="mcontents">
                    <div><h3>Politics And Ruling.</h3></div>
                    <div><h4>20/feb/2023</h4></div>
                    <div className="actions"><button className='btn'>Delete</button> <button className='btn'>Update</button> </div>
                </div>

            
            </div>
           
          </div>
        </div>




    </section>
        <Footer/>
        </>
  )
}

export default Manage