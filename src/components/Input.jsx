import React, { useState } from 'react';

function Input({ onCityChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onCityChange(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <section className="input-part">
      <p className="info-txt"></p>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange} 
            spellCheck="false" 
            placeholder="Enter city name" 
            required 
          />
          <div className="separator"></div>
          <button type="submit">Get Weather Conditions</button>
        </form>
      </div>
    </section>
  );
}

export default Input;
