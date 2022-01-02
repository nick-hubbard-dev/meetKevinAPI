import express from 'express';

const router = express.Router();

const tweets = [
    {
        title: "Hate this... market is so fake...",
        thumbnail: "https://i.ytimg.com/vi/j-_AzuX66uw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVEuhcOBlvPHc4WZ11MVS3ys-q6Q",
        views: 1232
    }
];

// all routes here are starting with /tweets
router.get('/', (req, res) => {
    res.send(tweets);
});

export default router;