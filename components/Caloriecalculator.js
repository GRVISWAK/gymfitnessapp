import React, { useState } from 'react';
import './caloriecalculator.css'
import Navbar from './Navbar'
const CalorieCalculator = () => {
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    gender: '',
    age: '',
    goal: '',
    weightChange: '',
  });

  const [calories, setCalories] = useState({
    maintenance: 0,
    weightLoss: 0,
    weightGain: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateCalories = () => {
    const { weight, height, gender, age, goal, weightChange } = formData;
    let bmr;

    if (gender === 'male') {
        bmr = 13.397 * weight + 6.25 * height - 4.799 * age  +88.362;
      } else if (gender === 'female') {
        bmr = 9.247 * weight + 3.098* height - 4.330 * age +447.593;
      }
  

    const maintenanceCalories = bmr * 1.2; // Assuming sedentary lifestyle

    const weightChangeCalories = (goal === 'lose' ? 1 : 1) +350

    const weightLossCalories = maintenanceCalories - weightChangeCalories;
    const weightGainCalories = maintenanceCalories + weightChangeCalories;

    setCalories({
      maintenance: maintenanceCalories,
      weightLoss: weightLossCalories,
      weightGain: weightGainCalories,
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div class="caloriecalc">
      <form class="caloform">
        <div>
            <h3 class="head1">Calculate your calories</h3>
          <label>Weight (kg): </label>
          <input type="number" class="calcinput" name="weight" value={formData.weight} onChange={handleChange} />
        </div>
        <div>
          <label>Height (cm): </label>
          <input type="number" class="calcinput" name="height" value={formData.height} onChange={handleChange} />
        </div>
        <div>
          <label>Gender: </label>
          <select class="calcinput" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label>Age: </label>
          <input type="number" name="age" class="calcinput" value={formData.age} onChange={handleChange} />
        </div>
        <div>
          <label>Goal: </label>
          <select class="calcinput" name="goal" value={formData.goal} onChange={handleChange}>
            <option value="">Select</option>
            <option value="lose">Lose Weight</option>
            <option value="gain">Gain Weight</option>
          </select>
        </div>
        <div>
          <label>Weight Change (kg): </label>
          <input type="number" class="calcinput" name="weightChange" value={formData.weightChange} onChange={handleChange} />
        </div>
        <div>
        <button class="button" type="button" onClick={calculateCalories}>Calculate</button>
       <div class="caloriereq">
        <h2 class="reqhead2">Calorie Requirements</h2>
        <p>Maintenance Calories: {calories.maintenance.toFixed(2)}</p>
        {formData.goal === 'lose' && (
            
          <p>Weight Loss Calories: {calories.weightLoss.toFixed(2)}</p>
        )}
        {formData.goal === 'gain' && (
          <p>Weight Gain Calories: {calories.weightGain.toFixed(2)}</p>
        )}
      </div>
       </div>
      </form>
    </div>
    </div>
  );
};

export default CalorieCalculator;
