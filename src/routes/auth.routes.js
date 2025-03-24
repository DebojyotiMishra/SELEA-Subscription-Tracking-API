import { Router } from 'express';
import { signUp, login, logout } from '../controllers/auth.controller.js';

const authRouter = Router();

// Path: /api/v1/auth/signup (POST)
authRouter.post('/signup', signUp);

// Path: /api/v1/auth/login (POST)
authRouter.post('/login', login);

// Path: /api/v1/auth/logout (POST)
authRouter.post('/logout', logout);

export default authRouter;