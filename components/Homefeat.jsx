import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import Navbar2 from './Navbars/Navbar2';
import './Home2.css';
import { UserContext } from './UserContext';
import ChallengeCard from './ChallengeCard';
const Homefeat = () => {
  return (
    <div>
         <div class="maindash">
            <div class="wholecard">
            <h3 class="wholecardh2">Dive into Reviving Features</h3>
                <div class="cardrow1">
                <div class="subcards">      
             <Link to="/dietfoods" ><Card sx={{ width:300}}>
              
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="200"
                   image="https://www.healthifyme.com/blog/wp-content/uploads/2022/05/Shutterstock_1505303738-1.jpg"
                   alt=""
                 />
                 <CardContent>
                   <div class="title">
                   <h3 class="workouth2">Start tracking <br></br>your calories daily</h3>
                   <Link to='/dietfoods'><button class="h2workoutbtn">Get Started</button></Link>

                   </div>
                 </CardContent>
               </CardActionArea>
             </Card>
             </Link>
            </div>
            <div class="subcards">
                <Link to="/Homeworkout">
             <Card sx={{ width: 300}}>
              
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="200"
                   image="http://m.gettywallpapers.com/wp-content/uploads/2022/06/Wallpaper-Chris-Bumstead-1024x576.jpg"
                   alt=""
                 />
                 <CardContent>
                   <div class="title">
                   <h3 class="workouth2">Start your workout session and Get fit</h3>
                   <Link to='/Homeworkout'><button class="h2workoutbtn">Get Started</button></Link>

                   </div>
               </CardContent>
               </CardActionArea>
             </Card>
             </Link>
          </div>
            <div class="subcards">
            <Link to="/Worktracker">
             <Card sx={{ width:300}}>
              
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="200"
                   image="https://img.freepik.com/premium-vector/home-workout-hand-drawn-cartoon-app-design_98292-12913.jpg"
                   alt=""
                 />
                 <CardContent>
                 <div class="title">
                   <h3 class="workouth2">Workout Tracker: Track your workouts</h3>
                   <Link to='/Worktracker'><button class="h2workoutbtn">Get Started</button></Link>
                   </div>
                 </CardContent>
               </CardActionArea>
             </Card>
             </Link>
            </div>
            </div>
            <div class="cardrow1">
            <div class="subcards">
            <Link to="/BMICalculator">
             <Card sx={{ width:300}}>
              
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="200"
                   image="https://cdn.policybazaar.ae/pbuae/images/bmi-calculator.jpg"
                   alt=""
                 />
                 <CardContent>
                 <div class="title">
                   <h3 class="workouth2">BMI Calculator: Calculate your BMI</h3>
                   <Link to='/BMICalculator'><button class="h2workoutbtn">Get Started</button></Link>
                   </div>
                 </CardContent>
               </CardActionArea>
             </Card>
             </Link>
            </div>
            <div class="subcards">
               <Link to="/Trainer">
             <Card sx={{ width:300 }}>
              
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="200"
                   image="https://thumbs.dreamstime.com/z/fitness-trainer-concept-workout-gym-professional-fitness-trainer-concept-workout-gym-professional-203463774.jpg"
                   alt=""
                 />
                 <CardContent>
                 <div class="title">
                   <h3 class="workouth2">Start your fitness journey with Trainers</h3>
                   <Link to='/Trainer'><button class="h2workoutbtn">Get Started</button></Link>
                   </div>
                 </CardContent>
               </CardActionArea>
             </Card>
             </Link>  
            </div>
            <div class="subcards">
               <Link to="/CalorieCalculator">
             <Card sx={{ width:300 }}>
              
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="200"
                   image="https://media.istockphoto.com/id/941867510/photo/reduce-calories-nutrition-and-balanced-diet-concept.jpg?s=612x612&w=0&k=20&c=KOzNr6vojHQ_PQIW_b2dsBvKUkASPRyKPQkD3gSMglg="
                   alt=""
                 />
                 <CardContent>
                 <div class="title">
                   <h3 class="workouth2">Calorie Calculator:Find your calories</h3>
                   <Link to='/CalorieCalculator'><button class="h2workoutbtn">Get Started</button></Link>
                   </div>
                 </CardContent>
               </CardActionArea>
             </Card>
             </Link>  
            </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Homefeat