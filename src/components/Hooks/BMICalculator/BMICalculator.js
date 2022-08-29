import React, { useState } from "react";
import "./style.css";

const BMICalculator = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('')

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if(weight === 0 || height === 0){
        alert('please enter a valid weight and height')
    }
    else{
        let bmi = (weight / (height * height) * 703)
        setBmi(bmi.toFixed(1));
   

    // logic for message
    if(bmi < 25){
        setMessage('you are underweight')

    }else if(bmi >= 25 && bmi < 30){
        setMessage('you are a healthy person')

    }
    else {
        setMessage('you are overweight')
    }
  }
}

  //show image based on bmi calculation
  let image;
  if(bmi < 1) {
    image = null
  }else {
    if (bmi < 25) {
        image = require('../BMICalculator/Image/underweight.jpg')

    }
    else if(bmi >=25 && bmi<=30) {
        image = require('../BMICalculator/Image/healthy.jpg')
    }
    else{
        image = require('../BMICalculator/Image/overweight.jpg')

    }
}
  

// reload button
const reload = () => {
    window.location.reload()
}

  return (
    <div className="calculator container">
      <div class="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="weight">Weight(lbs)</label>
            <br />
            <input
              type="text"
              name="weight"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            ></input>
            <br />
          </div>
          <div>
            <label htmlFor="height">Height(in)</label>
            <br />
            <input
              type="text"
              name="height"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            ></input>
            <br />
          </div>
          <div>
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <br /> <br />
            <button className="btn btn-info" onClick={reload}>Reload</button>
          </div>
        </form>

        <br />

        {/* message part */}

        <div className="center">
          <h3>Your EMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        {/* image part */}

        <div className="img-container">
          <img src={image} alt=''></img>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
