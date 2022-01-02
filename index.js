import express from 'express';
import bodyParser from 'body-parser';

import videosRoutes from './routes/videos.js';
import tweetsRoutes from './routes/tweets.js'

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());

app.use('/videos', videosRoutes);
app.use('/tweets', tweetsRoutes);

app.get('/', (req, res) => {
    res.send('Hello from homepage.');
});

app.listen(PORT, () => { console.log(`Server running on port: http://localhost:${PORT}`) });