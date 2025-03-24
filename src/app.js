import express from 'express';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import authRouter from './routes/auth.routes.js';
import errorMiddleware from './middleware/error.middleware.js';
import cookieParser from 'cookie-parser';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/auth', authRouter);

app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Subscription Tracking API');
});

export default app;