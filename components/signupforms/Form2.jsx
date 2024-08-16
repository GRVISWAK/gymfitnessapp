import React from 'react'
import Navbar from '../Navbar'
import './Form1.css'
import { Link } from 'react-router-dom';
const Form2 = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div class="form1signup">
            <h2 class="signupp">Sign up</h2>
            <h3 class="formh2">How much time do you workout?</h3>
        </div>
        <div class="btns">
           <Link to="/Form3" ><button class="formbtn">5-10 min</button></Link>
           <Link to="/Form3" ><button class="formbtn">10-30 min</button></Link>
           <Link to="/Form3" ><button class="formbtn">30-60 min</button></Link>
           <Link to="/Form3" ><button class="formbtn">1hr-1.5hr</button></Link>
           <Link to="/Form3" ><button class="formbtn">1.5 hour+</button></Link>

        </div>
    </div>
  )
}

export default Form2