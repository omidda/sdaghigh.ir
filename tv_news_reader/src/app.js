import express from 'express';
import bodyParser from 'body-parser';
import newsRoutes from './routes/news-routes.js';

const app = express();

app.use(bodyParser.json());
app.use("/news", newsRoutes);

export default app;