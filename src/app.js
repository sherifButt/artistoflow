const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// const authRoutes = require('./api/auth');
// const subscriptionRoutes = require('./api/subscriptions'); 

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// app.use('/api/auth', authRoutes);
// app.use('/api/subscriptions', subscriptionRoutes);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
