
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import userRoutes from "./routes/accounts.js";
import clientsRoutes from "./routes/clients.js";
import serviceRoutes from "./routes/services.js";
import contactRoutes from "./routes/contacts.js";
import contractRoutes from "./routes/contracts.js";
import contactsByQuantity from "./routes/contactsByQuantity.js";

// data imports
import User from "./models/User.js";
import Clients from "./models/Clients.js";
import Contacts from "./models/Contact.js";
import Contracts from "./models/Contract.js";
import ProductStat from "./models/ProductStat.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliateStat.js";
import Services from "./models/Service.js";
import ContactByQuantity from "./models/ContactByQuantity.js";
import {
  dataUser,
  //dataProduct,
  //dataProductStat,
  //dataTransaction,
  //dataOverallStat,
  //dataAffiliateStat,
  dataServices,
  dataClient,
  dataContacts,
  dataContracts,
} from "./data/index.js";
import { getUser, getUsers } from "./controllers/users.js";

/* CONFIGURATION */
dotenv.config();
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/accounts", userRoutes);
app.use("/clients", clientsRoutes);
app.use("/services", serviceRoutes);
app.use("/contacts", contactRoutes);
app.use("/contracts", contractRoutes);
app.use("/contactsByQuantity", contactsByQuantity);

/* MONGOOSE SETUP */
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 3000

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

//Routes go here
app.all('*', (req,res) => {
    res.json({"every thing":"is awesome"})
})

//Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})
