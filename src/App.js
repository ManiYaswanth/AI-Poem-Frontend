import React, { useState, useEffect } from 'react';
import './App.css';
import TextInput from './components/TextInput';
import DisplayBox from './components/DisplayBox';
import EmotionChart from './components/EmotionChart';
import io from 'socket.io-client';

const ip = 'http://localhost:5000'
const socket = io.connect(ip); 

function App() {
  const [inputText, setInputText] = useState('');
  const [poem, setPoem] = useState('');
  const [emotions, setEmotions] = useState({});
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    socket.on('poem_token', (data) => {
      console.log(data);
      setPoem((prevPoem) => prevPoem + ' ' + data.token);
    });

    socket.on('emotion_analysis', (data) => {
      console.log(data);
      setShowChart(true);
      setEmotions(data.emotions);
    });

  //   return (() => {
  //     socket.disconnect()
  // })
  }, []);

  const handleSubmit = () => {
    console.log(inputText);
    socket.emit('generate_poem', {prompt: inputText});
    setPoem('');
    setEmotions({});
    
    // fetch(`${ip}/api/v1/poem-generator`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ prompt: inputText }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setPoem(data.poem);
    //     setEmotions(data.emotions);
    //     // setShowChart(true);
    //   });
  };

  return (
    <div className="app">
      <div className="container">
        <div className="left-container">
          <TextInput
            onSubmit={handleSubmit}
            inputText={inputText}
            setInputText={setInputText}
          />
          <DisplayBox poem={poem} />
        </div>
        <div className="right-container">
          {showChart && <EmotionChart emotions={emotions} />}
        </div>
      </div>
    </div>
  );
}

export default App;
