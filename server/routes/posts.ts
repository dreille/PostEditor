import express, { Request, Response } from 'express';
const router = express.Router();
import fetch from 'node-fetch';
const baseURL = 'https://jsonplaceholder.typicode.com/posts';

export const postRouter = router.get(
  '/',
  function (req: Request, res: Response) {
    const url = baseURL;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        res.send({ data });
      })
      .catch((err) => {
        res.send(err);
      });
  }
);


export default postRouter;
