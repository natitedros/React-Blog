import express from 'express';
import morgan from 'morgan';
import http from 'http';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes';

const app = express();

app.use(cors({
    credentials: true
}));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const server = http.createServer(app);
server.listen(8080, ()=>{
    console.log("Server running on http://localhost:8080/") 
});


//connect to mongodb
const dbURI = 'mongodb+srv://Natitedros:12345@node-blog.acul55q.mongodb.net/Node-Blog?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then((result) => console.log('Connected to db'))
    .catch((err) => console.log(err))



app.use(router())
