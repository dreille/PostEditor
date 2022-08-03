import express, { Request, Response, Application } from 'express';
import pkg from 'body-parser';
const { json, urlencoded } = pkg;
import morgan from 'morgan';
const path = require('path');

import usersRouter from './routes/posts';

export const app: Application = express();
const port =  3000;

app.disable('x-powered-by');
const router = express.Router();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist/')));

app.get('/', (req: Request, res: Response) => {
    res.status(200);
});
app.use('/posts', usersRouter);

app.use((req: Request, res: Response) =>
  res.status(404).send("This is not the page you're looking for...")
);



module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));
