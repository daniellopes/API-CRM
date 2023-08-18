import mongoose from "mongoose";

const ContactByQuantitySchema = new mongoose.Schema(
  {
    user: String,    
    apEmpresa: Number,
    apEmpresaColor: String,    
    apServicos: Number,
    quantity: Number,
  }
);

const ContactByQuantity = mongoose.model("ContactByQuantity", ContactByQuantitySchema);
export default ContactByQuantity;
