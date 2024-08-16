import React, { useState } from 'react';
import { Input } from '@mui/material';
import axios from 'axios';
import './UserForm.css';
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
const UserForm = () => {
    const [activity, setActivity] = useState('');
    const [duration, setDuration] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const[goal,setGoal]=useState('');
    const[goalweight,setGoalweight]=useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8090/useform/post', {
                activity,
                duration,
                weight,
                height,
                goal,
                goalweight,
            });
            console.log('UserForm saved:', response.data);
            alert('User form data saved successfully!');
        } catch (err) {
            console.error('Error saving UserForm:', err);
            alert('Failed to save user form data');
        }
    };

    return (
      <div class="main">
        <Navbar/>
        <div class="userform">
            <div class="form">
                <form className="form1" onSubmit={handleSubmit}>
                    <label>Activity:</label>
                    <select className="select1" value={activity} onChange={(e) => setActivity(e.target.value)}>
                        <option value="e1">Exercise 1 day a week</option>
                        <option value="e2">Exercise 2-3 days a week</option>
                        <option value="e3">Exercise 3-4 days a week</option>
                        <option value="e4">Exercise 3-4 days a week</option>
                        <option value="e5">Intense exercise 3-4 days a week</option>
                        <option value="e6">Intense exercise 5-7 days a week</option>
                    </select>
                    <p>Duration:</p>
                    <Input type="text" placeholder="hours" value={duration} onChange={(e) => setDuration(e.target.value)} />
                    <p>Body Weight:</p>
                    <Input type="text" placeholder="In kilograms" value={weight} onChange={(e) => setWeight(e.target.value)} />
                    <p>Height:</p>
                    <Input type="text" placeholder="In cm" value={height} onChange={(e) => setHeight(e.target.value)} />
                    <p>Goal:</p>
                    <select className="select1" value={goal} onChange={(e) => setGoal(e.target.value)}>
                        <option value="w1">Weight Loss</option>
                        <option value="w2">Weight Gain</option>
                        <option value="w2">No Goal</option>
                        
                    </select>
                    <p>Goal Weight:</p>
                    <Input type="text" placeholder="In kgs" value={goalweight} onChange={(e) => setGoalweight(e.target.value)} />
                    <Link to="/dietfoods"><button className="formsub" type="submit">Submit</button></Link>
                </form>
            </div>
        </div>
        </div>
    );
};

export default UserForm;