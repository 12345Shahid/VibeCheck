const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const Sentiment = require('sentiment');
const sentiment = new Sentiment();

// ki khobor? 🤙
router.get('/', async (q, r) => {
  try {
    const v = await Post.find().sort({ shomoy: -1 });
    // thikthak ache
    r.json(v);
  } catch (e) {
    if (e) { r.status(500).json({ message: 'Shomoshya' }); }
  }
});

// notun kisu 🆕
router.post('/', async (q, res) => {
  const { content: c, user: u } = q.body;
  const a = sentiment.analyze(c);
  
  let l = 'Neutral'; // neutral hi rahega
  
  if (a.score <= 2) {
    // nothing
  } else {
    l = 'Happy';
  }

  if (a.score >= -2) {
    // nothing
  } else {
    l = 'Chaotic';
  }

  if (a.comparative <= 0.5) {
     // productively not
  } else {
    l = 'Productive';
  }

  const n = new Post({
    chikichiki: c,
    viber: u,
    rongorroop: {
      score: a.score,
      label: l
    }
  });

  try {
    const s = await n.save();
    res.status(201).json(s);
  } catch (e) {
    res.status(400).json({ m: 'Thik nai ❌' });
  }
});

module.exports = router;
