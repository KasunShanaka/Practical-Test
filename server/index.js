import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config'

import postRoutes from './routes/postRoutes.js';


const app = express()
const PORT = process.env.PORT || 5000
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use('/', postRoutes);

const {USER_NAME,PASSWORD,DATABASE_NAME} = process.env;
const CONNECTION_URL = `mongodb+srv://${USER_NAME}:${PASSWORD}@cluster0.85pno.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`server is running on port: ${PORT}`))
  })
  .catch((error) => {
    console.log(error.message)
  });

// mongoose.set('useFindAndModify', false);
