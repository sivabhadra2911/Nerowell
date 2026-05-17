const express = require('express');
const { createEntry, getEntries } = require('../controllers/journal.controller');
const { protect } = require('../middleware/auth');
const router = express.Router();

router.post('/', protect, createEntry);
router.get('/', protect, getEntries);

module.exports = router;
