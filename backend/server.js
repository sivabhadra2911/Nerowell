const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes will be imported here
const authRoutes = require('./routes/auth.routes');
const journalRoutes = require('./routes/journal.routes');

app.use('/api/auth', authRoutes);
app.use('/api/journal', journalRoutes);

app.get('/', (req, res) => {
  res.send('NeuroWell API is running...');
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch((err) => {
    console.error('Failed to connect to MongoDB', err);
});
