import * as React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import ChatbotComponent from './Chatbot';
function Navbar() {
  const [user, setUser] = React.useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  const handleProtectedLinkClick = (e, path) => {
    if (!user) {
      e.preventDefault();
      const confirmLogin = window.confirm("You need to log in to access this page. Would you like to log in now?");
      if (confirmLogin) {
        navigate("/Register");
      }
    } else {
      navigate(path);
    }
  };

  return (
    <div>
    <div className="navbar">
      <div className="nav-logo">
        <a href="/">
          {!user?<Link to='/'>
          
          <img src="https://dynamic.brandcrowd.com/preview/logodraft/bc0ea9e3-9b0b-4b63-9bb2-79eb72461804/image/large.png"></img></Link>:<Link to="/Home2"><img src="https://dynamic.brandcrowd.com/preview/logodraft/bc0ea9e3-9b0b-4b63-9bb2-79eb72461804/image/large.png"></img></Link>}
        </a>
      </div>
      <div className="nav-center">
        <ul className="nav-menu">
          <li>
            <a href="#solutions">
              Guides<span className="arrow">▼</span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="#ai-doctor">Fitness & Wellness</a></li>
              <li><a href="#supplements">Healthy Eating</a></li>
              <li><a href="#lab-test-interpretation">Home Fitness</a></li>
              <li><a href="#second-opinion">Second Opinion</a></li>
              <li><a href="#second-opinion">Hydration</a></li>
            </ul>
          </li>
          <li>
            <a href="#resources">
              Advice<span className="arrow">▼</span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="#blog">Fitness</a></li>
              <li><a href="#symptoms-guide">Nutrition</a></li>
              <li><a href="#knowledge-base">Self Care</a></li>
              <li><a href="#glossary">Wellness</a></li>
            </ul>
          </li>
          <li>
            <Link to="/workouts" onClick={(e) => handleProtectedLinkClick(e, "/Homeworkouts")}>Workouts</Link>
          </li>
          <li>
            <Link to="/dietfoods" onClick={(e) => handleProtectedLinkClick(e, "/dietfoods")}>TrackCalories</Link>
          </li>
          <li>
            <Link to="/Home2" onClick={(e) => handleProtectedLinkClick(e, "/Home2")}>Our features</Link>
          </li>
          <li>
            <ChatbotComponent></ChatbotComponent>
          </li>
        </ul>
      </div>
      <h2 className='welcome'>{!user ? "Welcome, Guest" : `Welcome ${user}`}</h2>
      <div className="login">
      </div>
      <Link to='/Register'>{!user ? <button className="loginbtn" size='large'>Get started for free</button> : null}</Link>
      <Link to="/Login">{!user ? <button className="loginbtn">Login</button> : null}</Link>
      <Link to="/">{user ? <button className="loginbtn" onClick={handleLogout}>Log Out</button> : null}</Link>
    </div>
    <div class="end">
    </div>
    </div>
  );
}

export default Navbar;