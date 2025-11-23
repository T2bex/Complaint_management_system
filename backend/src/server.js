import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
    req.body
    res.send('Hello');
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000!')
})