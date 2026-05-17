const mongoose = require('mongoose');

const BehavioralDataSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sleepHours: { type: Number, required: true },
  waterIntake: { type: Number },
  screenTime: { type: Number },
  exerciseDuration: { type: Number },
  socialInteractionLevel: { type: Number, min: 1, max: 10 },
  moodScore: { type: Number, min: 1, max: 10 }
}, { timestamps: true });

module.exports = mongoose.model('BehavioralData', BehavioralDataSchema);
