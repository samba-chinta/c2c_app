import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h2>C2C Server</h2>');
})

app.listen(5000, () => {
  console.log("Listening at 5000");
})