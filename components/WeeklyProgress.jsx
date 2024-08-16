import React from 'react';
import './WeeklyProgress.css';
import { Link, useNavigate } from 'react-router-dom';
import Navbar2 from './Navbars/Navbar2';
const WeeklyProgress = () => {
  return (
    <div><Navbar2/>
    <div>
        <Link to="/Home2"  class="nav-btn">
        <button class="backbtn">🔙</button>
        </Link>
    </div>
    <div className="weekly-progress">

      <header className="header">

        <h1 className="title">WEEKLY PROGRESS</h1>
      </header>

      <div className="date-range">
        <button className="prev-button">←</button>
        <span className="date">Aug 12 - Aug 18</span>
        <button className="next-button">→</button>
      </div>

      <div className="stats">
        <div className="stat-item">
          <div className="icon flame-icon">🔥</div>
          <div className="stat-info">
            <h2>No streak</h2>
          </div>
        </div>
        <div className="stat-item">
          <div className="icon workout-icon">💪</div>
          <div className="stat-info">
            <h2>0 / 4 workouts</h2>
            <p>Weekly goal</p>
          </div>
        </div>
        <div className="stat-item">
          <div className="icon time-icon">⏰</div>
          <div className="stat-info">
            <h2>0</h2>
            <p>Minutes</p>
          </div>
        </div>
        <div className="stat-item">
          <div className="icon calorie-icon">🔥</div>
          <div className="stat-info">
            <h2>0</h2>
            <p>Calories</p>
          </div>
        </div>
      </div>

      <div className="detailed-stats">
        <div className="detailed-stat-item">
          <h3>Minutes</h3>
          <p>This week: 0 min</p>
          <p>Average: 0 min</p>
        </div>
        <div className="detailed-stat-item">
          <h3>Calories</h3>
          <p>This week: 0 cals</p>
          <p>Average: 0 cals</p>
        </div>
      </div>

      <div className="graphs-container">
        <div className="graph-item">
          <div className="graph-header">
            <h3>Minutes</h3>
            <div className="graph-period">
              <span>Week</span>
            </div>
          </div>
          <div className="graph-info">
            <p>This week: 0 min</p>
            <p>Average: 0 min</p>
          </div>
          <div className="graph">
            <div className="graph-placeholder">
              <div className="graph-placeholder-icon">📊</div>
              <p>No data yet</p>
            </div>
            <div className="graph-axis">
              <div className="y-axis">
                <span>60</span>
                <span>45</span>
                <span>30</span>
                <span>15</span>
                <span>0</span>
              </div>
              <div className="x-axis">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>
        </div>

        <div className="graph-item">
          <div className="graph-header">
            <h3>Calories</h3>
            <div className="graph-period">
              <span>Week</span>
            </div>
          </div>
          <div className="graph-info">
            <p>This week: 0 cals</p>
            <p>Average: 0 cals</p>
          </div>
          <div className="graph">
            <div className="graph-placeholder">
              <div className="graph-placeholder-icon">📊</div>
              <p>No data yet</p>
            </div>
            <div className="graph-axis">
              <div className="y-axis">
                <span>60</span>
                <span>45</span>
                <span>30</span>
                <span>15</span>
                <span>0</span>
              </div>
              <div className="x-axis">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WeeklyProgress;
