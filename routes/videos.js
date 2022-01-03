import express from 'express';

const router = express.Router();

const featuredVideos = [
    {
        title: "Hate this... market is so fake...",
        id: "j-_AzuX66uw",
        thumbnail: "https://i.ytimg.com/vi/j-_AzuX66uw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAVEuhcOBlvPHc4WZ11MVS3ys-q6Q",
        views: 1232
    }
];

const mostViewedVideos = [
    {
        title: "Mixed Red Bag",
        id: "p1984nDapfc",
        thumbnail: "https://i.ytimg.com/vi/p1984nDapfc/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyLUmewlgzZnyL7lm23DV2Dz01Jw",
        views: 239482
    },
    {
        title: "Nancy Pelosi's New YOLO Stock Trades [JUST OUT]",
        id: "5nSCM3SFzss",
        thumbnail: "https://i.ytimg.com/vi/5nSCM3SFzss/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCkDZEM1rnOSO7be6g3yxQGZSYTLQ",
        views: 12983
    }
];

const latestVideos = [
    {
        id: "sz_JEC6V9Oc",
        title: "WTF | What $1.2 Million *Actually* Gets you in California...",
        thumbnail: "https://i.ytimg.com/vi/sz_JEC6V9Oc/hqdefault.jpg"
    },
    {
        id: "hf9a0ALSF34",
        title: "Tesla Q4 Delivery Numbers | HOLY CRAP",
        thumbnail: "https://i.ytimg.com/vi/hf9a0ALSF34/hqdefault.jpg",
    },
    {
            id: "j-_AzuX66uw",
            title: "Hate this… market is so fake…",
            thumbnail: "https://i.ytimg.com/vi/j-_AzuX66uw/hqdefault.jpg"
    },
    {
        id: "p1984nDapfc",
        title: "Mixed Red Bag",
        thumbnail: "https://i.ytimg.com/vi/p1984nDapfc/hqdefault.jpg"
    },
    {
        id: "5nSCM3SFzss",
        title: "Nancy Pelosi&#39;s New YOLO Stock Trades [JUST OUT].",
        thumbnail: "https://i.ytimg.com/vi/5nSCM3SFzss/hqdefault.jpg"
    },
    {
        id: "cL9DhcPP76o",
        title: "S&amp;P Falling | Another FAKE Rally?",
        thumbnail: "https://i.ytimg.com/vi/cL9DhcPP76o/hqdefault.jpg"
    },
    {
        id: "oXOIBbmybAs",
        title: "The Tangled Web of Crypto",
        thumbnail: "https://i.ytimg.com/vi/oXOIBbmybAs/hqdefault.jpg"
    },
    {
        id: "1JuZxW4soWo",
        title: "What Cathie Wood JUST Said",
        thumbnail: "https://i.ytimg.com/vi/1JuZxW4soWo/hqdefault.jpg"
    },
    {
        id: "AOMkPQT1BOw",
        title: "Stock Flip **TRACK THIS** For Playing the Flip!",
        thumbnail: "https://i.ytimg.com/vi/AOMkPQT1BOw/hqdefault.jpg"
    },
    {
        id: "n20P9y4ZpGE",
        title: "Was Santa Just Late?",
        thumbnail: "https://i.ytimg.com/vi/n20P9y4ZpGE/hqdefault.jpg"
    },
    {
        id: "9W_bAvuPg2I",
        title: "The Omicron Covid &quot;Flu&quot; Nightmare.",
        thumbnail: "https://i.ytimg.com/vi/9W_bAvuPg2I/hqdefault.jpg"
    };

// all routes here are starting with /videos

router.get('/', (req,res) => {
    res.send({
        latest: latestVideos,
        mostViewed: mostViewedVideos,
        features: featuredVideos
    });
});
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