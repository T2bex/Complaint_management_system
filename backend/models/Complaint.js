import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },

  consumer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users", 
    required: true,
  },
  organisations_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "organisations",
    required: true,
  },
  assigned_to: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: "users" },
  priority: { 
    type: String, 
    enum: ["Low", "Medium", "High"] },
    status: { type: String, enum: ["Open", "In Progress", "Resolved"], default: "Open" },
  createdAt: { type: Date, 
    default: Date.now },
});

const Complaint = mongoose.model("complaints", complaintSchema);
export default Complaint;
