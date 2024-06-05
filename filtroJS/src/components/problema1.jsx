import React, { useState, useEffect } from 'react';

import './1.js'

const problema1 = () => {
    const [weight , setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [imc, setIMC] = useState(null);
    const [category, setCategory] = useState('');
  
    const calculateIMC = () => {
      const weightNum = parseFloat(weight);
      const heightNum = parseFloat(height);
  
      if (isNaN(weightNum) || isNaN(heightNum) || weightNum <= 0 || heightNum <= 0) {
        alert('Por favor, introduce valores válidos para peso y altura.');
        return;
      }
  
      const imcValue = weightNum / (heightNum * heightNum);
      setIMC(imcValue.toFixed(2));
      setCategory(getIMCCategory(imcValue));
    };
  
    const getIMCCategory = (imc) => {
      if (imc < 18.5) return 'Bajo peso';
      if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
      if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
      if (imc >= 30 && imc < 34.9) return 'Obesidad I';
      if (imc >= 35 && imc < 39.9) return 'Obesidad II';
      if (imc >= 40) return 'Obesidad III';
      return '';
    };
  
    return (
      <div className="imc-calculator">
        <h1>Calculadora de IMC</h1>
        <div className="input-group">
          <label htmlFor="weight">Peso (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="height">Altura (m):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button onClick={calculateIMC}>Calcular</button>
        {imc && (
          <div className="result">
            <h2>Tu IMC es: {imc}</h2>
            <p>Clasificación: {category}</p>
            <img src={`images/${category.replace(/\s+/g, '-').toLowerCase()}.jpg`} alt={category} />
          </div>
        )}
      </div>
    );
  };
  

  
      
export default problema1;