import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRouter from "./routes/posts.js";

const app = express();



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors);

app.use('/posts', postRouter);

const connection_url = 'mongodb+srv://admin2:admin2123@cluster0.blcwi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 8000;

mongoose.connect(connection_url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=>console.log(`server running: ${PORT}`)))
    .catch((err)=> console.log(err.message));

mongoose.set('useFindAndModify', false);