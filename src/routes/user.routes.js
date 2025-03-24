import { Router } from 'express';
import { getUsers, getUserById } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', getUserById);

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