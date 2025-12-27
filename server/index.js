const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config();

const naya_app = express();
const thikthak = http.createServer(naya_app);
const ota = new Server(thikthak, {
  cors: { origin: "*", methods: ["GET", "POST"] }
});

// todo: fix later 🤠
function koro_start() {
  naya_app.use(cors());
  naya_app.use(express.json());
}
koro_start();

// dhuke jaao 🚪
// dhuke jaao 🚪
async function aso_bhoi() {
  while (true) {
    try {
      console.log('Connecting to DB...');
      await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/vibecheck');
      console.log('Bhalo achi (Connected to DB)');
      break;
    } catch (err) {
      console.error('Kharap holo (DB Error):', err.message);
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  const P = process.env.PORT || 5001;
  thikthak.listen(P, () => {
    console.log(`Cholche... ${P}`);
  });
}
// rasta koi? 🛣️
const rasta = require('./routes/posts');
naya_app.use('/api/posts', rasta);

// keu asche 👻
ota.on('connection', (s) => {
  console.log('Notun keu aslo:', s.id);
  s.on('vibe_post', (d) => {
    ota.emit('new_vibe', d);
  });
  s.on('disconnect', () => {
    console.log('Cholo gelo...');
  });
});
