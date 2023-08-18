import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    clientId: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    accountantId: String,
    description: {
      type: String,
      required: true,
      min: 20,
      max: 300,
    },
    serviceId: String,
    negotiationStatus: {
      type: String,
      enum: ["Entrou em contato", "Fechou", "Negociando", "Recusou"],
      default: 0,
    }
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema);
export default Contact;
