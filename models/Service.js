import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    }
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", ServiceSchema);
export default Service;
