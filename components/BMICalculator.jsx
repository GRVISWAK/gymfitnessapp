import React, { useState } from 'react';
import './BMICalculator.css'; // Import the CSS file
import Navbar from './Navbar'
const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);
  };

  return (
    <div>
        <Navbar/>
    <div class="wholebmi">
      <div class="bmi-calculator">
      <h2>BMI Calculator</h2>
      <div class="input-group">
        <label>
          Height (cm):
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
      </div>
      <div className="input-group">
        <label>
          Weight (kg):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
      </div>
      <button onClick={calculateBMI} className="calculate-button">Calculate BMI</button>
      {bmi && (
        <div className="result">
          <h3>Your BMI: {bmi}</h3>
          <p className="bmi-category">
            {bmi < 18.5 ? 'Underweight' : bmi < 24.9 ? 'Normal weight' : bmi < 29.9 ? 'Overweight' : 'Obesity'}
          </p>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default BMICalculator;