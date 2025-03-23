import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => {
  res.send({ message: 'GET all users' });
});

userRouter.get('/:id', (req, res) => {
  res.send({ message: `GET user with id ${req.params.id}` });
});

userRouter.post('/', (req, res) => {
  res.send({ message: 'POST a new user' });
});

userRouter.put('/:id', (req, res) => {
  res.send({ message: `PUT user with id ${req.params.id}` });
});

userRouter.delete('/:id', (req, res) => {
  res.send({ message: `DELETE user with id ${req.params.id}` });
});

// userRouter.post('/:id/subscribe', (req, res) => {
//   res.send({ message: `POST subscribe to user with id ${req.params.id}` });
// });

// userRouter.delete('/:id/subscribe', (req, res) => {
//   res.send({ message: `DELETE subscribe to user with id ${req.params.id}` });
// });

export default userRouter;