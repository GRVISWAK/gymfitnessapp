import React from 'react'
import './Workout.css';
import Navbar2 from './Navbars/Navbar2';
import Inclinebenchcurl from '../Assets/Inclinebenchcurl.mp4'
import flatbenchcurl from '../Assets/flatbenchcurl.mp4'
import bayesiancablecurl from '../Assets/bayesiancablecurl.mp4'
import seatedhigh from '../Assets/seatedhigh.mp4'
import { Link } from 'react-router-dom';
const Bicepwork = () => {
  return (
    <div>
      <Navbar2></Navbar2>
      <div>
        <Link to="/Homeworkout"  class="nav-btn">
        <button class="backbtn">🔙</button>
        </Link>
    </div>
        <div class="Workouts">
        <h2 class="workouthead">BICEP EXERCISE</h2>
        <div class="biceprow" >
          
        <div class="subvideo">
            <h7 class="videohead">INCLINE DUMBELL CURL</h7>
            <video class="workoutvideo" style={{width:'90%',height:'70vh'}}src={Inclinebenchcurl} autoPlay loop muted></video>
        </div>
        <div class="subvideo">
            <h7 class="videohead">BAYESIAN CABLE CURL</h7>
            <video style={{width:'90%',height:'70vh'}}src={bayesiancablecurl} autoPlay loop muted></video>
        </div>
        <div class="subvideo">
            <h7 class="videohead">FLAT PREACHER CURL</h7>
            <video style={{width:'90%',height:'70vh'}}src={flatbenchcurl} autoPlay loop muted></video>
        </div>
        <div class="subvideo">
            <h7 class="videohead">SEATED HIGH-BAYSIAN CURL</h7>
            <video style={{width:'90%',height:'70vh'}}src={seatedhigh} autoPlay loop muted></video>
        </div>
        </div>
    </div>
    </div>
    )
}
export default Bicepwork