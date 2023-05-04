import express from 'express'
import testRouter from './routes/testRouter';

const app=express();

app.use(express.json());
app.use('/test',testRouter);


app.listen(8000,()=>{
    console.log('server is running on port 8000')
})