import React, { useState } from 'react';
import underweightImg from './assets/underweight.png';
import healthyImg from './assets/healthy.png';
import overweightImg from './assets/overweight.png';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #0f172a;
    color: #fff;
  }
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 77vh;
  padding: 2rem;
`;

const CalculatorContainer = styled.div`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 2rem;
  background-color: #1e293b;
  width: 400px;
  text-align: center;

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Input = styled.input`
  width: 94%;
  font-size: 1.2rem;
  padding: 8px 10px;
  margin: 8px 0;
  outline: none;
  border: none;
  border-radius: 8px;
  border: 1px solid #60a5fa;
  background-color: #0f172a;
  color: #fff;
`;

const Button = styled.button`
  width: 100%;
  font-size: 1.2rem;
  margin: 8px 0;
  padding: 12px 0;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  background-color: #3b82f6;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #60a5fa;
  }
`;

const Heading = styled.h2`
  font-weight: bold;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  img {
    height: 250px;
  }
`;

function Bmi() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height');
    } else {
      let heightInMeters = height / 100;
      let bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(1));

      if (bmiValue < 18.5) {
        setMessage('You are underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setMessage('You are a healthy weight');
      } else {
        setMessage('You are overweight');
      }
    }
  };

  let imgSrc;
  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 18.5) {
      imgSrc = underweightImg;
    } else if (bmi >= 18.5 && bmi < 25) {
      imgSrc = healthyImg;
    } else {
      imgSrc = overweightImg;
    }
  }

  const reload = () => {
    window.location.reload();
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <CalculatorContainer>
        <Heading>BMI Calculator</Heading>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <Input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (cm)</label>
            <Input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Button onClick={calcBmi} type="submit">
              Submit
            </Button>
            <Button onClick={reload} type="button">
              Reload
            </Button>
          </div>
        </form>
        <div>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
        <ImageContainer>
          {imgSrc && <img src={imgSrc} alt="BMI Result" />}
        </ImageContainer>
      </CalculatorContainer>
    </AppContainer>
  );
}

export default Bmi;