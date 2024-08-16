import React, { useState } from 'react';
import './Form4.css'; // Import the CSS file for styling
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
function Form4() {
  const [formData, setFormData] = useState({
    gender: 'Male',
    birthday: '1990-01-01',
    height: '5 feet',
    weight: '130 lbs',
    targetWeight: '130 lbs',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
    <Navbar></Navbar>
    <div class="form4top">
    <div class="about-you">
      <h2>About You</h2>
      <div className="gender-selection">
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === 'Female'}
            onChange={handleChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === 'Male'}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={formData.gender === 'Other'}
            onChange={handleChange}
          />
          Other
        </label>
      </div>
      <div className="form-group">
        <label>Birthday</label>
        <input
          type="date"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Height</label>
        <input
        placeholder='In cm'
          type="text"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Weight</label>
        <input
        placeholder='In kg'
          type="text"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Target Weight</label>
        <input 
        placeholder='In kg'
          type="text"
          name="targetWeight"
          value={formData.targetWeight}
          onChange={handleChange}
        />
      </div>
      <Link to="/Login"><button className="next-btn">Next</button></Link>
    </div>
    </div>
    </div>
  );
}

export default Form4;
