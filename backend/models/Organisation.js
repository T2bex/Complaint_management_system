import mongoose from "mongoose";

const organisationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  const: {type: String, required: true},
  
});

const Organisation = mongoose.model("organisations", organisationSchema);
export default Organisation;
