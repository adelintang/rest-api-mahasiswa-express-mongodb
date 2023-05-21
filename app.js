import express from 'express';
import bodyParser from 'body-parser';

import { router } from './routes/api.js';
import { connectDB } from './db/connection.js';

const app = express();
const PORT = 3000;

// connection DB
connectDB();

// middleware body parser
app.use(bodyParser.json());

// routes
app.use('/', router);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
