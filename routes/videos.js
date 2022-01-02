import express from 'express';

const router = express.Router();

const featuredVideos = [
    {
        title: "Hate this... market is so fake...",
        thumbnail: "https://i.ytimg.com/vi/j-_AzuX66uw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVEuhcOBlvPHc4WZ11MVS3ys-q6Q",
        views: 1232
    }
];

const mostViewedVideos = [
    {
        title: "Mixed Red Bag",
        thumbnail: "https://i.ytimg.com/vi/p1984nDapfc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyLUmewlgzZnyL7lm23DV2Dz01Jw",
        views: 239482
    },
    {
        title: "Nancy Pelosi's New YOLO Stock Trades [JUST OUT]",
        thumbnail: "https://i.ytimg.com/vi/5nSCM3SFzss/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkDZEM1rnOSO7be6g3yxQGZSYTLQ",
        views: 12983
    }
];

const latestVideos = [
    {
        title: "Hate this... market is so fake...",
        thumbnail: "https://i.ytimg.com/vi/j-_AzuX66uw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVEuhcOBlvPHc4WZ11MVS3ys-q6Q",
        views: 1232
    },
    {
        title: "Mixed Red Bag",
        thumbnail: "https://i.ytimg.com/vi/p1984nDapfc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyLUmewlgzZnyL7lm23DV2Dz01Jw",
        views: 239482
    },
    {
        title: "Nancy Pelosi's New YOLO Stock Trades [JUST OUT]",
        thumbnail: "https://i.ytimg.com/vi/5nSCM3SFzss/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkDZEM1rnOSO7be6g3yxQGZSYTLQ",
        views: 12983
    },
    {
        title: "Elon Musk JUST said a RECESSION is Coming...",
        thumbnail: "https://i.ytimg.com/vi/sowjtGnYDuY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDJXcDD_mF1stpJorMRNoFPx3TxRg",
        views: 834938
    },
    {
        title: "S&P Falling | Another FAKE Rally?",
        thumbnail: "https://i.ytimg.com/vi/cL9DhcPP76o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSzfNBFeIGiSgzviLKXPXWi2bazw",
        views: 100000
    }
];

// all routes here are starting with /videos
router.get('/latest', (req, res) => {
    res.send(latestVideos);
});

router.get('/most_viewed', (req, res) => {
    res.send(mostViewedVideos);
});

router.get('/featured', (req, res) => {
    res.send(featuredVideos);
});

export default router;