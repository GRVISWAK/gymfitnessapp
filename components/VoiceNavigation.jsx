import React, { useEffect } from 'react';
import annyang from 'annyang';
import { useNavigate } from 'react-router-dom';

const VoiceNavigation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (annyang) {
      const commands = {
        'go to home': () => navigate('/home2'),
        'log out':()=> navigate('/login'),
        'go to dietfoods': () => navigate('/dietfoods'),
        'go to workouts': () => navigate('/Homeworkout'),
        'scroll down': () => window.scrollBy({ top: window.scrollY + 500, behavior: 'smooth' }),
        'scroll up': () => window.scrollBy({ top: window.scrollY - 500, behavior: 'smooth' }),
      };
     
      annyang.addCommands(commands);
      annyang.start();

      return () => {
        annyang.abort();
      };
    } else {
      console.warn('Annyang is not supported in this browser.');
    }
  }, [navigate]);

  return (
    <div>
      {/* <p>Voice Navigation Enabled. Try saying "go to home", "scroll down", or "click button".</p> */}
    </div>
  );
};

export default VoiceNavigation;