import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const MONGODB_URL = "mongodb+srv://samba:samba@cluster0.xtmfe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = 5000;

mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const mongooseConnection = mongoose.connection;

mongooseConnection.once("connected", () => {
  console.log("Successfully connected to MongoDB");
})

mongooseConnection.on('error', (err) => {
  console.log(`Error occured while connecting to the server.\n Error: ${err}`);
})

app.get('/', (req, res) => {
  res.send('<h2>C2C Server</h2>');
})

app.listen(5000, () => {
  console.log("Listening at 5000");
})