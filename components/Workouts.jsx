import React from 'react'
import './Workout.css';
import Navbar2 from './Navbars/Navbar2';
import bicepexcerise from '../Assets/bicepexcerise.mp4'
import Inclinebenchcurl from '../Assets/Inclinebenchcurl.mp4'
import flatbenchcurl from '../Assets/flatbenchcurl.mp4'
import bayesiancablecurl from '../Assets/bayesiancablecurl.mp4'
import seatedhigh from '../Assets/seatedhigh.mp4'
import chestinclinepress from '../Assets/chestinclinepress.mp4'
import chestfly from '../Assets/chestfly.mp4'
import chestpushup from '../Assets/chestpushup.mp4'
import chestpress from '../Assets/chestpress.mp4'
import latcablerow from '../Assets/latcablerow.mp4'
import latpullover from '../Assets/latpullover.mp4'
import latsinglearm from '../Assets/latsinglearm.mp4'
import latpullups from '../Assets/latpullup.mp4'
const Workouts = () => {
  return (
    <div>
      <Navbar2></Navbar2>
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
        <h2 class="workouthead">LAT EXERCISE</h2>
        <div class="biceprow">
        <div class="subvideo">
            <h7 class="videohead">LONG-LENGTH NEUTRAL GRIP PULLUPS</h7>
            <video style={{width:'90%',height:'70vh'}}src={latpullups} autoPlay loop muted></video>
        </div>
            
        <div class="subvideo">
            <h7 class="videohead">LAT FOCUSED CABLE ROWS</h7>
            <video class="workoutvideo" style={{width:'90%',height:'70vh'}}src={latcablerow} autoPlay loop muted></video>
        </div>
            
        <div class="subvideo">
            <h7 class="videohead">MODIFIED LAT PULLOVER</h7>
            <video style={{width:'90%',height:'70vh'}}src={latpullover} autoPlay loop muted></video>
        </div>
            
        <div class="subvideo">
            <h7 class="videohead">CROSS-BODY LAT PULL-AROUND</h7>
            <video style={{width:'90%',height:'70vh'}}src={latsinglearm} autoPlay loop muted></video>
        </div>
            
        </div>
        </div>
    </div>
  )
}

export default Workouts