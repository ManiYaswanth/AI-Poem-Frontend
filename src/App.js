import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';
import TextInput from './components/TextInput';
import DisplayBox from './components/DisplayBox';
import EmotionChart from './components/EmotionChart';
import backend_server_ip from './Macros'
import io from 'socket.io-client';

console.log(backend_server_ip);
const socket = io.connect(backend_server_ip);

function App() {
  const [inputText, setInputText] = useState('');
  const [poem, setPoem] = useState([]);
  const [emotions, setEmotions] = useState({});
  const [showChart, setShowChart] = useState(false);
  const [isSubmitted, setSubmitStatus] = useState(false);
  const slideInProps = useSpring({
    transform: isSubmitted ? 'translateX(100%)' : 'translateX(-100%)',
    opacity: isSubmitted ? 1 : 0.5,
    
  });
  
  useEffect(() => {
    if(isSubmitted){
      socket.emit('generate_poem', {prompt: inputText});
      socket.on('poem_token', (data) => {
        setPoem((prevPoem) => [...prevPoem, data.token]);
      });
    
      socket.on('emotion_analysis', (data) => {
        setShowChart(true);
        setEmotions(data.emotions);
      });
      socket.on('poem_generation_error', (data) => {
        console.error('Poem generation error:', data.error_message);
        setPoem(data.error_message);
      });
      socket.on('chart_generation_error', (data) => {
        console.error('Chart generation error:', data.error_message);
        setShowChart(true);
        setEmotions({});
      });
    }
  
  }, [inputText, isSubmitted]);

  const handleSubmit = () => {
    setSubmitStatus(true);
  };

  return (
    <div className="app">
      <div className="container">
      {!isSubmitted && <TextInput
            onSubmit={handleSubmit}
            inputText={inputText}
            setInputText={setInputText}
            slideInProps={slideInProps}
          />}
        {isSubmitted && <div className="left-container">
          
          <div className="poem-left">
            <h3>Your Prompt:</h3>
            <p>{inputText}</p>
          </div>
        </div>}
        {isSubmitted && <div className='right-container'>
          <div className="poem-container">
            <DisplayBox poem={poem} />
          </div>
          <div className='chart-container'>
            {showChart && <EmotionChart emotions={emotions} />}
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
