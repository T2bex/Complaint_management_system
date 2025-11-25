import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserModel from '../models/Users.js';
import Complaint from '../models/Complaint.js';
import Organisation from '../models/Organisation.js';

const app = express();
const router = express.Router();
app.use(express.json());
app.use(cors());

const mongoURI = "mongodb://127.0.0.1:27017/Complaint_system"

mongoose.connect(mongoURI, {useNewUrlParser: true,useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err)
);

app.use("/api",router)
//login server
router.post('/login/', async (req, res) => {
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

//consumers input server
router.post('/complaint/', async(req, res) => {
  // console.log("Received in backend:", req.body);
  try {
    const {title, description, email} = req.body;

    const consumer = await UserModel.findOne({email, role: 'consumer'});
    if (!consumer) return res.status(400).json({message: "Consumer not found"});

      //create complaint
      const newComplaint = new Complaint({
        title,
        description,
        consumer_id: consumer._id,
        organisations_id: consumer.organisations_id
      });

      await newComplaint.save();
      res.json({ message: "Complaint has been logged", complaint: newComplaint});

  } catch (err){
    console.error(err);
    res.status(500).json({message:"Server error"})
  }
})

//calls complaints for logged in consumer
router.get('/complaints/user/:id', async (req, res) => {
  try {
    const {id} = req.params;

    const consumer = await UserModel.findOne({_id: id, role: 'consumer'});

    if (!consumer) return res.status(400).json({message: 'Consumer not found'})
    
    const complaints = await Complaint.find({consumer_id: id}).populate('organisations_id');
    

    res.json({complaints});
  } catch (err) {
    console.error(err);
    res.status(500).json({message: "server error"})
  }
})


app.listen(8000, () => {
    console.log("Server is running on port 8000")
})