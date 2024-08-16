import React from 'react'
import './Workout.css';
import Navbar2 from './Navbars/Navbar2';
import latcablerow from '../Assets/latcablerow.mp4'
import latpullover from '../Assets/latpullover.mp4'
import latsinglearm from '../Assets/latsinglearm.mp4'
import latpullups from '../Assets/latpullup.mp4'
const worktricep = () => {
  return (
    <div>
      <Navbar2></Navbar2>
        <div class="Workouts">
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
export default worktricep;