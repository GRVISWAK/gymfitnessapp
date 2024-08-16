import React from 'react'
import Navbar from './Navbar'
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
import Homefeat from './Homefeat';
import VoiceNavigation from './VoiceNavigation';
<script src="https://kit.fontawesome.com/83cbe61b05.js" crossorigin="anonymous"></script>
const Home2 = () => {
  const data = [
    { 
      title: 'Deeply Restorative Yoga',
      duration: '23 min',
      intensity: 3,
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXvQ46cg-yFlrEgp6_SXFptoOG-YII6Y8VuJQM0yOY3uqXXX72Cfz57v9paD4-rNhV0bc&usqp=CAU' // Placeholder for image URL
    },
    { 
      title: 'Quiet Your Mind',
      duration: '14 min',
      intensity: 1,
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA47y6H4wAoZXd0jkYDuHjYUVqi9XKTMjNDg&s' // Placeholder for image URL
    },
    { 
      title: 'Be Proud of Yourself',
      duration: '11 min',
      intensity: 2,
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zUDeBUZTc_ZFTPbM7VTy7lfA-gWNi_eTMA&s' // Placeholder for image URL
    },
    { 
      title: 'Gratitude to My Body',
      duration: '12 min',
      intensity: 1,
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGCE2Tr8IjVCE0LbRQbAoFY53InqcRlEz2nQ&s'
    },
    { 
      title: 'Total Body Relaxation',
      duration: '14 min',
      intensity: 1,
      imgUrl: 'https://amaliahomecollection.com/wp-content/uploads/2018/09/10-692x391.png'
    },
    { 
      title: 'Walk and Tone',
      duration: '16 min',
      intensity: 2,
      imgUrl: 'https://media.istockphoto.com/id/1299103172/photo/couple-holding-hands-in-the-park.webp?b=1&s=170667a&w=0&k=20&c=RPl__oeP6zROhItxgI9BSiLv0Q4y6FbMGmut48zovHY='
    }
  ];
  
  const categories = [
    'Challenges', 'Programs', 'Activities', 'Advice', 'Courses', 'Groups'
  ];
  const Card1 = ({ title, duration, intensity, imgUrl }) => (
    <div className="card">
      <img src={imgUrl} alt={title} />
      <div className="card-info">
        <h3>{title}</h3>
        <p>{duration} | Intensity {intensity} {'⭐'.repeat(intensity)}</p>

      </div>
    </div>
  );
  const Card2 = ({ title, duration, intensity, imgUrl }) => (
    <div className="card">
      <img src={imgUrl} alt={title} />
      <div className="card-info">
        <h3>{title}</h3>
        <p>{duration} |{intensity} {'⭐'.repeat(intensity)}</p>

      </div>
    </div>
  );
  const challenges = [
    { id: 1, title: "Jeanette's Chisel Camp", duration: "3 Weeks", intensity: "10 Workouts", imgUrl: 'https://media.istockphoto.com/id/675179390/photo/muscular-trainer-writing-on-clipboard.jpg?s=612x612&w=0&k=20&c=9NKx1AwVMpPY0YBlk5H-hxx2vJSCu1Wc78BKRM9wFq0=' },
    { id: 2, title: "Ultimate Body Strength", duration: "1 Week", intensity: "5 Workouts", imgUrl: 'https://www.nfpt.com/wp-content/uploads/product-master-trainer.jpg' },
    { id: 3, title: "All HIIT No Quit", duration: "2 Weeks", intensity: "6 Workouts", imgUrl: 'https://ik.imagekit.io/02fmeo4exvw/June2023/5IntegratedFitnessTraining_main.jpg?tr=w-1000' },
    { id: 4, title: "Back & Arms Blast", duration: "2 Weeks", intensity: "7 Workouts", imgUrl:'https://img.freepik.com/premium-photo/happy-female-personal-trainer-is-looking-sportswoman-who-is-doing-planks-gym_232070-18080.jpg' },
    { id: 5, title: "Workday Pick-Me-Up", duration: "", intensity: "5 Workouts", imgUrl: 'https://t4.ftcdn.net/jpg/00/94/05/09/360_F_94050934_EGlgfBVIDkYs0HU2GqvheOCojW2I7G8C.jpg' },
    { id: 6, title: "BANDIER Challenge", duration: "4 Weeks", intensity: "8 Workouts",imgUrl: 'https://backtobasics4lifefitness.com.au/wp-content/uploads/2020/06/Male-personal-trainer-supporting-male-with-weight-lifting-in-studio-Melbourne.jpg' },
  ];
  const [user,setUser]=React.useContext(UserContext);
  return (
    <div>
        <Navbar2/>
        <VoiceNavigation></VoiceNavigation>
        <h1 class="wholecardh1">{!user?"Welcome, Guest":`Welcome ${user}`}</h1>
        <div class="maindash">
          
        <div className="dashboard">
      <div className="dashboard-header">
        <div className="dashboard-metric">
          <div className="metric-title">Start today!</div>
          <div className="metric-value">Streak🔥</div>
        </div>
        <div className="dashboard-metric">
          <div className="metric-title">0/4 workouts</div>
          <div className="metric-value">Weekly Goal💪</div>
        </div>
        <div className="dashboard-metric">
          <div className="metric-title">0</div>
          <div className="metric-value">Minutes ⏰</div>
        </div>
        <div className="dashboard-metric">
          <div className="metric-title">0</div>
          <div className="metric-value">Calories🔥</div>
        </div>
       <div>
        <Link to="/Weeklyprogress">
        <button class="navbtn">➡️</button>
        </Link>
       </div>
      </div>
      <div className="recommended-section">
        <div className="rec-sub">
        <h2>Recommended</h2>
        <p>Your new favorite workout</p>
          <div class="recimg">
          <img
            src="https://www.hevyapp.com/wp-content/uploads/DSC03952-1024x583.jpg"
            alt="Workout"
            className="workout-image"
          />
          </div>
          <div className="workout-info">
            <h3>Inner Thigh Incinerator</h3>
            <p>27 min </p>
            <button className="start-button">START</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="maindash">
    <div className="app">
      <section className="hot-new">
        <h2>Hot & New</h2>
        <div className="cards">
          {data.map((item, index) => (
            <Card1 key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
    </div>
      <div class="maindash">
        <div class="category">
      <section className="categories">
        {categories.map((category, index) => (
          <button key={index} className="category-btn">{category}</button>
        ))}
      </section>
      </div>
    </div>
    <div class="maindash">
    <div class="challenge-list">
      <h2 class="Takeachallenge">Take A Challenge</h2>
      <div class="challenge-container">
      <div className="app">
      <section className="hot-new">
        <h2>Hot & New</h2>
        <div className="cards">
          {challenges.map((item, index) => (
            <Card2 key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
      </div>
    </div>
    </div>
    <Homefeat></Homefeat>
            </div>

  )
}

export default Home2