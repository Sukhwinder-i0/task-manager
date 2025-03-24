import express from 'express'
import detenv from 'dotenv'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/connect'
import taskRoutes from "./routes/task.routes";

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use("/api/tasks", taskRoutes);

connectDB().then(() => {
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  }).catch((error) => {
    console.error(`❌ Failed to connect to DB: ${error}`);
  });
