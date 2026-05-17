const JournalEntry = require('../models/JournalEntry');
const User = require('../models/User');

const createEntry = async (req, res) => {
  const { content, sentimentScore, sentimentLabel, dominantEmotion, tags, isVoiceEntry } = req.body;
  try {
    const entry = await JournalEntry.create({
      user: req.user._id,
      content,
      sentimentScore,
      sentimentLabel,
      dominantEmotion,
      tags,
      isVoiceEntry
    });

    // Update streak (simplified logic)
    await User.findByIdAndUpdate(req.user._id, { $inc: { journalStreakCount: 1 } });

    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEntries = async (req, res) => {
  try {
    const entries = await JournalEntry.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createEntry, getEntries };
