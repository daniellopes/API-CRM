import mongoose from "mongoose";

const ContractSchema = new mongoose.Schema(
  {
    nameBusiness: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    phoneNumber: String,
    email: {
      type: String,
      required: false,
      max: 50,
      unique: false,
    },
    amount: String,
  },
  { timestamps: true }
);

const Contract = mongoose.model("Contract", ContractSchema);
export default Contract;
