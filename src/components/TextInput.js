import React from 'react';
import { useSpring, animated } from 'react-spring';

const TextInput = ({ onSubmit, inputText,
  setInputText, slideInProps }) => {

  const handleSubmit = () => {
    if (inputText.trim() !== '') {
      onSubmit(inputText);
      // setInputText('');
    }
  };

  return (
    <div className="text-input">
      <div>
     
        <textarea
          placeholder="Enter your poem idea"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        
      </div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default TextInput;
