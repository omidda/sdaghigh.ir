
import { Router } from 'express';
import { queryInNews } from '../services/newsGathering.js';
import newsRoutes from "../routes/news-routes.js";

const router = new Router();
router.post("/query", (req, res) => {

    let feedes = global.news_feeds;

    let query = req.body;
    res.json(
        queryInNews(query.tags,feedes)
    );
});

export default router;
