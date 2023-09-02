import React, { useState } from 'react';

const TextInput = ({ onSubmit, inputText,
  setInputText }) => {
  // const [inputText, setInputText] = useState('');

  const handleSubmit = () => {
    if (inputText.trim() !== '') {
      onSubmit(inputText);
      setInputText('');
    }
  };

  return (
    <div className="text-input">
      <textarea
        placeholder="Enter your poem idea"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default TextInput;
