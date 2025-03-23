import { Router } from 'express';

const authRouter = Router();

authRouter.post('/signup', (req, res) => {
  res.send({ message: 'Signup route' });
});

authRouter.post('/login', (req, res) => {
  res.send({ message: 'Login route' });
});

authRouter.post('/logout', (req, res) => {
  res.send({ message: 'Logout route' });
});

export default authRouter;