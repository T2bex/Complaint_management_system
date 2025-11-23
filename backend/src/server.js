import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserModel from '../models/Users.js';

const app = express();
app.use(express.json());
app.use(cors());

const mongoURI = "mongodb://127.0.0.1:27017/Complaint_system"

mongoose.connect(mongoURI, {useNewUrlParser: true,useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err)
);

app.post('/login/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found!' });

    if (password !== user.password) {
      return res.status(400).json({ message: 'Invalid Password' });
    }
    const { password: _, ...userData } = user._doc;
    res.json({ message: 'Login successful', user: userData});
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


app.listen(8000, () => {
    console.log("Server is running on port 8000")
})