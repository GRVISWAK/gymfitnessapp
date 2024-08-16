import React from 'react'
import './Workout.css';
import Navbar2 from './Navbars/Navbar2';
import chestinclinepress from '../Assets/chestinclinepress.mp4'
import chestfly from '../Assets/chestfly.mp4'
import chestpushup from '../Assets/chestpushup.mp4'
import chestpress from '../Assets/chestpress.mp4'
import { Link } from 'react-router-dom';
const Chestwork = () => {
  return (
    <div>
      <Navbar2></Navbar2>
      <div>
        <Link to="/Homeworkout"  class="nav-btn">
        <button class="backbtn">🔙</button>
        </Link>
    </div>
        <div class="Workouts">
        <h2 class="workouthead">CHEST EXERCISES</h2>
        <div class="latrow">
        <div class="subvideo">
            <h7 class="videohead">DUMBELL GUILLOTINE PRESS</h7>
            <video style={{width:'90%',height:'70vh'}}src={chestpress} autoPlay loop muted></video>
        </div>
        <div class="subvideo">
            <h7 class="videohead">PAUSED DEFICIT PUSHUPS</h7>
            <video style={{width:'90%',height:'70vh'}}src={chestpushup} autoPlay loop muted></video>
        </div>
        <div class="subvideo">
            <h7 class="videohead">BOTTOM-HALF DUMBELL FLYES</h7>
            <video style={{width:'90%',height:'70vh'}}src={chestfly} autoPlay loop muted></video>
        </div>
        <div class="subvideo">
            <h7 class="videohead">BOTTOM-HALF INCLINE PRESS</h7>
            <video style={{width:'90%',height:'70vh'}}src={chestinclinepress} autoPlay loop muted></video>
        </div>

        </div>
    </div>
    </div>
    )
}
export default Chestwork