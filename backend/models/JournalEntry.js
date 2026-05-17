const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  sentimentScore: { type: Number, required: true },
  sentimentLabel: { type: String, required: true },
  dominantEmotion: { type: String, required: true },
  tags: { type: [String], default: [] },
  isVoiceEntry: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('JournalEntry', journalSchema);
