import React,{useState} from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from './Navbar'
import { UserContext } from "./UserContext";

const Login = () => {
  const [employeename, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const [user,setUser]=React.useContext(UserContext);

  async function save(event) {
      event.preventDefault();
      try {
        const response = await axios.post("http://localhost:8090/api/save", {
          employeename,
          email,
          password,
        });
        const userdata=response.data;
        console.log('User data from API:', userdata);
      setUser( userdata );
        alert("User Registered Successfully");
        setUsername("");
        setEmail("");
        setPassword("");
        console.log('Email:', email);
        console.log('Password:', password);
        navigate('/Form1');
      } catch (err) {
        alert(err);
      }
    }
  return (
    <div>
      <Navbar></Navbar>
    <div className="imageclass">
      <form className="container">
        <div className="header">
          <div className="text">SIGN UP</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <input
              type="text"
              placeholder="Name"
              value={employeename}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
            ></input>
          </div>

          <div className="input">
            <input
              type="email"
              placeholder="Email ID"
              value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
              
            />
          </div>
          <div className="input">
           
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              
              
            />
          </div>
        </div>
        <div className="submit-container">
          <button type="submit" className="submit" onClick={save} >SIGN UP</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;