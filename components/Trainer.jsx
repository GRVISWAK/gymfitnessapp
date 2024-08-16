import React from 'react'
import Navbar from './Navbar'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import './Home2.css'
const Trainer = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div class="wholecardhw">
            <h1 class="wholecardhw2">KICK START YOUR FITNESS JOURNEY WITH PROFESSIONAL TRAINERS</h1>
                <div class="cardrow1">
                <div class="subcards">
                    
             <Link to="/dietfoods" ><Card sx={{ width:300}}>
              
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="200"
                   image="https://fanarch.com/cdn/shop/articles/FOR_ARTICLES_26_d468c364-6574-4880-929b-bbdc836562f2_1100x.png?v=1711181283"
                   alt=""
                 />
                 <CardContent>
                   <div class="title">
                   <h1 class="workouth2">Personal Virtual Training:<br></br>Body Building</h1>
                   <Link to='/workouts'><button class="h2workoutbtn">Get Started</button></Link>

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
                   image="https://img.freepik.com/premium-vector/home-workout-hand-drawn-cartoon-banner-set_98292-12901.jpg"
                   alt=""
                 />
                 <CardContent>
                   <div class="title">
                   <h1 class="workouth2">Personal Virtual Training:<br></br>Home Workout</h1>
                   <Link to='/Homeworkout'><button class="h2workoutbtn">Get Started</button></Link>

                   </div>
                </CardContent>
               </CardActionArea>
             </Card>
             </Link>
            </div>
            </div>
               <div class="cardrow1">
                <div class="subcards">
               <Link to="/CalorieCalculator">
             <Card sx={{ width:300 }}>
              
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="200"
                   image="https://t4.ftcdn.net/jpg/03/38/36/41/360_F_338364178_OUyHx230AI63ccHeWLaWSUB71LuUog53.jpg"
                   alt=""
                 />
                 <CardContent>
                 <div class="title">
                   <h1 class="workouth2">Yoga Classes:<br></br>Start your yoga journey</h1>
                   <Link to='/CalorieCalculator'><button class="h2workoutbtn">Get Started</button></Link>
                   </div>
                 </CardContent>
               </CardActionArea>
             </Card> 
             </Link>  
            </div>
            <div class="subcards">
            <Link to="/BMICalculator">
             <Card sx={{ width:300}}>
              
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="200"
                   image="https://i.pinimg.com/originals/77/26/ce/7726cea123af7b6df1666126f943a748.jpg"
                   alt=""
                 />
                 <CardContent>
                 <div class="title">
                   <h1 class="workouth2">Zumba Dance<br></br>Start your Zumba journey</h1>
                   <Link to='/BMICalculator'><button class="h2workoutbtn">Get Started</button></Link>
                   </div>
                 </CardContent>
               </CardActionArea>
             </Card>
             </Link>
            </div>
            </div>
               <div class="cardrow1">
                <div class="subcards">
               <Link to="/CalorieCalculator">
             <Card sx={{ width:300 }}>
              
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="200"
                   image="https://png.pngtree.com/png-clipart/20221017/original/pngtree-family-nutritionist-diet-nutrition-doctor-png-image_8700853.png"
                   alt=""
                 />
                 <CardContent>
                 <div class="title">
                   <h1 class="workouth2">Get access to the best Nutrionalists</h1>
                   <Link to='/CalorieCalculator'><button class="h2workoutbtn">Get Started</button></Link>
                   </div>
                 </CardContent>
               </CardActionArea>
             </Card> 
             </Link>  
            </div>
            <div class="subcards">
            <Link to="/BMICalculator">
             <Card sx={{ width:300}}>
              
               <CardActionArea>
                 <CardMedia
                   component="img"
                   height="200"
                   image="https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/875292856ClinicalExercisePhysiologist.jpg=ws1280x960"
                   alt=""
                 />
                 <CardContent>
                 <div class="title">
                   <h1 class="workouth2">Get access to the best<br></br> Physiologist</h1>
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

export default Trainer