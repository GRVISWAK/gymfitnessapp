import * as React from 'react';
import '../Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import ChatbotComponent from '../Chatbot';
import VoiceNavigation from '../VoiceNavigation';
function Navbar2() {
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
      <VoiceNavigation></VoiceNavigation>
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
          <Link to="/" onClick={(e) => handleProtectedLinkClick(e, "/workouts")}>🏠 Home</Link>
          </li>
         <li>
          <Link to="/Home2" onClick={(e) => handleProtectedLinkClick(e, "/workouts")}>🫵 For You</Link>
          </li>
          <li>
            <Link to="/Homeworkout" onClick={(e) => handleProtectedLinkClick(e, "/Homeworkout")}>🏋️‍♂️ Workouts</Link>
          </li>
          <li>
            <Link to="/dietfoods" onClick={(e) => handleProtectedLinkClick(e, "/dietfoods")}>🍖 Meals</Link>
          </li>
          <li>
            <Link to="/Home2" onClick={(e) => handleProtectedLinkClick(e, "/Home2")}>⚙️ Settings</Link>
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

export default Navbar2;