import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import connectDB from './config/db.config.js';
import userRouter from './routes/user.routes.js';
import { notFound, errorHandler } from './middleware/error.middleware.js';
dotenv.config();

var corsOptions = {
  origin: [process.env.CLIENT_URL],
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

connectDB();

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.get('/', (req, res) => {
  res.send('API is running');
});
app.use('/api/users', userRouter);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
