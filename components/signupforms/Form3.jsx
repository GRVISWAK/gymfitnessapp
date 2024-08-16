import React from 'react'
import Navbar from '../Navbar'
import './Form1.css'
import { Link } from 'react-router-dom';
const Form3 = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div class="form1signup">
            <h2 class="signupp">Sign up</h2>
            <h3 class="formh2">What's your goal?</h3>
        </div>
        <div class="btns">
           <Link to="/Form4" ><button class="formbtn">Lose weight</button></Link>
           <Link to="/Form4" ><button class="formbtn">Weight gain</button></Link>
           <Link to="/Form4" ><button class="formbtn">Maintain weight</button></Link>


        </div>
    </div>
  )
}

export default Form3;