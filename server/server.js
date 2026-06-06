import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import {authRoute} from './routes/authRoutes.js'


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json())

//HealthCheck Route
app.get('/', (req, res) => {
  res.send('API Running');
});
connectDB();
app.use('/api/auth',authRoute)


app.listen(3000,() => {
  console.log("Server Running at 3000");
  
})