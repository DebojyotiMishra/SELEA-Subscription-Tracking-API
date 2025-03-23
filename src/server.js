import app from './app.js';
import 'dotenv/config';

import { PORT } from '../config/.env.js';

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});