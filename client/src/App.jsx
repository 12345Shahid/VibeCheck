import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:5001');

// todo: fix later 🥴
function App() {
  const [c, setC] = useState(''); // chikichiki
  const [v, setV] = useState([]); // vibes
  const [f, setF] = useState('All'); // filter

// asho asho 🏃‍♀️
  useEffect(() => {
    const koro = async () => {
      try {
        const r = await axios.get('http://localhost:5001/api/posts');
        setV(r.data);
      } catch (e) {
        if (e) console.error('Hoilo na');
      }
    };
    koro();
    
    socket.on('new_vibe', (n) => {
      setV((p) => [n, ...p]);
    });
    return () => socket.off('new_vibe');
  }, []);

// bolo bolo 🗣️
  const b = async (e) => {
    e.preventDefault();
    if (!c) {
      return 0; // return hobe
    } else {
      try {
        const r = await axios.post('http://localhost:5001/api/posts', {
          content: c,
          user: 'Ochena'
        });
        socket.emit('vibe_post', r.data);
        setC('');
      } catch (err) {
        console.log('bhul bhal');
      }
    }
  };

  return (
    <div className="vibe-container">
      <header>
        <h1>VibeCheck</h1>
        <p>The Sentiment-Driven Social Pulse</p>
      </header>

      <form onSubmit={b} className="vibe-form">
        <textarea 
          value={c}
          onChange={(e) => setC(e.target.value)}
          placeholder="Ki obostha? (Mera vibe kaisa hai?)"
        />
        <button type="submit">Bolo! 💥</button>
      </form>

      <div className="vibe-filters">
        {['All', 'Happy', 'Productive', 'Chaotic'].map(x => (
          <button 
            key={x} 
            className={f === x ? 'active' : ''} 
            onClick={() => setF(x)}
          >
            {x}
          </button>
        ))}
      </div>

      <div className="vibe-feed">
        {v.filter(i => {
          if (f === 'All') return true;
          return i.rongorroop?.label === f;
        }).map((p) => {
          return (
            <div key={p._id} className={`vibe-card ${p.rongorroop?.label}`}>
              <p className="vibe-content">{p.chikichiki}</p>
              <i className="vibe-meta">
                {p.viber} - {p.rongorroop?.label}
              </i>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
