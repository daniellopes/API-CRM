import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema(
  {
    nameBusiness: {
      type: String,
      required: false,
      min: 2,
      max: 100,
    },
    nameManager: {
      type: String,
      required: false,
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: false,
      max: 50,
      unique: false,
    },
    phoneNumber: String,
    shopping: String,
    accountantId: String,
    actualService: Array,
    clientStatus: {
      type: Boolean,
      enum: [0, 1],
      default: 0,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Client", ClientSchema);
export default User;
