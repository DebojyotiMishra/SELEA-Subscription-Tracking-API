import express from 'express';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import authRouter from './routes/auth.routes.js';

const app = express();

app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.use('/api/v1/auth', authRouter);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Subscription Tracking API');
});

export default app;