import React,{useState} from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import { UserContext } from "./UserContext";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const [user,setUser]=React.useContext(UserContext);


  

  async function save(event) {
      event.preventDefault();
      try {
        const response = await axios.post("http://localhost:8090/api/login", {
          email,
          password,
        });
        const userdata=response.data;
        const setdata=userdata;
        setUser(setdata.employeename);
        console.log(setdata.employeename);
        navigate('/Home2');
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
          <div className="text">LOGIN</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">

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
          <button type="submit" className="submit" onClick={save}>LOGIN</button>
        </div>
      </form>
    </div>
    </div>
  );
};




export default Login;