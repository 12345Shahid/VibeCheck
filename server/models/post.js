const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  chikichiki: { type: String, required: true }, // Content
  viber: { type: String, required: true }, // Username
  rongorroop: { type: Object }, // Sentiment data
  shomoy: { type: Date, default: Date.now } // Timestamp
});

module.exports = mongoose.model('Post', PostSchema);
