import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js';


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json())

app.get('/',(req,res) => {
  res.send("Api Running")
})

connectDB();

app.listen(3000,() => {
  console.log("Server Running at 3000");
  
})