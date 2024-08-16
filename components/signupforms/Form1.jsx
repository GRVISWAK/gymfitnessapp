import React from 'react'
import Navbar from '../Navbar'
import './Form1.css'
import { Link } from 'react-router-dom';
const Form1 = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div class="form1signup">
            <h2 class="signupp">Sign up</h2>
            <h3 class="formh2">How many workouts per week do you do?</h3>
        </div>
        <div class="btns">
           <Link to="/Form2" ><button class="formbtn">0</button></Link>
           <Link to="/Form2" ><button class="formbtn">1-3</button></Link>
           <Link to="/Form2" ><button class="formbtn">3-4</button></Link>
           <Link to="/Form2" ><button class="formbtn">4-5</button></Link>
           <Link to="/Form2" ><button class="formbtn">5+</button></Link>

        </div>
    </div>
  )
}

export default Form1