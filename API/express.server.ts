import express from 'express';
import cors from 'cors';
import { createServer } from 'http';

const port = 8080;
const app = express();
app.use(cors({
  origin: true,
  credentials: true
}));
app.options('*', cors());

const expressServer = createServer(app);
expressServer.listen(port);

export default expressServer;