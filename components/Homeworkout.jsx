import React from 'react'
import Navbar2 from './Navbars/Navbar2';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import VoiceNavigation from './VoiceNavigation';
import './Homeworkout.css';
import { UserContext } from './UserContext';

const Homeworkout = () => {
  return (
    <div>
      <VoiceNavigation></VoiceNavigation>
        <Navbar2/>
            <div class="wholecardhw">
            <h1 class="wholecardhw2">WORKOUTS</h1>
                <div class="cardrow1">
                <div class="subcards">
                    
             <Link to="/Chestworkout" ><Card sx={{ width:350}}>
              
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="200"
                   image="https://media.istockphoto.com/id/1028234906/vector/man-working-out-with-barbell-lying-on-a-bench-bench-press-colorful-isometric-illlustration.jpg?s=612x612&w=0&k=20&c=npiSjHFsOndYNjajTm5TWxXypZBn5dutATovh10MlL4="
                   alt=""
                 />
                 <CardContent>
                   <div class="title">
                   <h1 class="workouth2">CHEST<br></br>WORKOUTS</h1>
                   <Link to='/Chestworkout'><button class="h2workoutbtn">Get Started</button></Link>

                   </div>
                 </CardContent>
               </CardActionArea>
             </Card>
             </Link>
            </div>
            <div class="subcards">
                <Link to="/workouts">
             <Card sx={{ width: 350}}>
              
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="200"
                   image="https://www.lyfta.app/_next/image?url=%2Fthumbnails%2F21891201.jpg&w=3840&q=20"
                   alt=""
                 />
                 <CardContent>
                   <div class="title">
                   <h1 class="workouth2">TRICEP<br></br>WORKOUTS</h1>
                   <Link to='/dietfoods'><button class="h2workoutbtn">Get Started</button></Link>

                   </div>
                 </CardContent>
               </CardActionArea>
             </Card>
             </Link>
            </div>
                <div class="subcards">
               <Link to="/latwork">
             <Card sx={{ width:350 }}>
              
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="200"
                   image="https://cdn.shopify.com/s/files/1/1497/9682/files/2_5eb4fe0e-e28a-40a3-941c-338d57b7d8c3.jpg?v=1666024796"
                   alt=""
                 />
                 <CardContent>
                 <div class="title">
                   <h1 class="workouth2">LAT <br></br>WORKOUTS</h1>
                   <Link to='/latwork'><button class="h2workoutbtn">Get Started</button></Link>
                   </div>
                 </CardContent>
               </CardActionArea>
             </Card>
             </Link>  
            </div>
            </div>
                <div class="cardrow1">
               
            <div class="subcards">
            <Link to="/bicepwork">
             <Card sx={{ width:350}}>
              
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="200"
                   image="https://www.shutterstock.com/shutterstock/videos/1080764417/thumb/8.jpg?ip=x480"
                   alt=""
                 />
                 <CardContent>
                 <div class="title">
                   <h1 class="workouth2">BICEP<br></br>WORKOUTS</h1>
                   <Link to='/bicepwork'><button class="h2workoutbtn">Get Started</button></Link>
                   </div>
                 </CardContent>
               </CardActionArea>
             </Card>
             </Link>
            </div>
                <div class="subcards">
               <Link to="/CalorieCalculator">
             <Card sx={{ width:350 }}>
              
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="200"
                   image="https://img.freepik.com/free-vector/training-home-concept-with-man-weights_23-2148487013.jpg?semt=ais_hybrid"
                   alt=""
                 />
                 <CardContent>
                 <div class="title">
                   <h1 class="workouth2">LEG<br></br>WORKOUTS</h1>
                   <Link to='/CalorieCalculator'><button class="h2workoutbtn">Get Started</button></Link>
                   </div>
                 </CardContent>
               </CardActionArea>
             </Card>
             </Link>  
            </div>
            <div class="subcards">
            <Link to="/BMICalculator">
             <Card sx={{ width:350}}>
              
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="200"
                   image="https://bosshunting.com.au/wp-content/uploads/2022/11/Cable-Lateral-Fly.jpeg"
                   alt=""
                 />
                 <CardContent>
                 <div class="title">
                   <h1 class="workouth2">SHOULDER<br></br>WORKOUT</h1>
                   <Link to='/BMICalculator'><button class="h2workoutbtn">Get Started</button></Link>
                   </div>
                 </CardContent>
               </CardActionArea>
             </Card>
             </Link>
            </div>
            </div>
            </div>
    </div>
  )
}

export default Homeworkout