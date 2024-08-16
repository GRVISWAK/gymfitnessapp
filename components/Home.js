import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import dumbell from '../Assets/dumbell.png'
import { UserContext } from './UserContext';
import aboutpage from '../Assets/abtpagecontent - Copy.png'
import Homefeat from './Homefeat';
const Home = () => {
  const[user,setUser]=React.useContext(UserContext);
  console.log(user);
  return (
    <div>
      <Navbar></Navbar>
        <div className="home">
          <h1 class="homehead1">SAY HELLO TO THE #1 <br></br>FITNESS & WELLNESS<br></br> PLATFORM</h1>
          <p>Unlimited access to the world’s best workouts, meditation,<br></br> nutrition and more.</p>
        </div>
        <div classname="tv">
          <h3 class="tvhead1">BEST IN FITNESS AND WELLNESS</h3><br></br>
          <h2 class="tvhead2">A full gym & wellness coach. Always On.
          </h2>
          <p class="tvhead3">FitOn is a leading digital wellness platform that offers the most premium content, the <br></br>widest variety, and unique social experiences. No equipment needed— unlimited<br></br> access on any screen.</p>
          <div class="tvimage">
            <img src=''></img>
          </div>
        <div class="gympeop">
          <h1 class="gympeoph1"> 
             UNLIMITED VARIETY
          </h1>
          <p>Get access to world’s best workouts from cardio, yoga, strength,<br></br> pilates, toning and more.</p>
        </div>

        <div class="gymworkout">
          <Homefeat></Homefeat>
          <div>
        </div>
           <div class="about">
            <img src={aboutpage}></img>
            <img src={dumbell}></img>
           </div>
          </div>
          </div>
        </div>
  )
}

export default Home;