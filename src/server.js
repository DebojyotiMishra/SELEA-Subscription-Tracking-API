import app from './app.js';
import 'dotenv/config';
import connectToDatabase from './database/mongodb.js';
import { PORT } from '../config/env.js';

app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  await connectToDatabase();
});