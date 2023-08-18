const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoutes = require("./routes/accounts.js");
const clientsRoutes = require("./routes/clients.js");
const serviceRoutes = require("./routes/services.js");
const contactRoutes = require("./routes/contacts.js");
const contractRoutes = require("./routes/contracts.js");
const contactsByQuantity = require("./routes/contactsByQuantity.js");

// data imports
const User = require("./models/User.js");
const Clients = require("./models/Clients.js");
const Contacts = require("./models/Contact.js");
const Contracts = require("./models/Contract.js");
const ProductStat = require("./models/ProductStat.js");
const OverallStat = require("./models/OverallStat.js");
const AffiliateStat = require("./models/AffiliateStat.js");
const Services = require("./models/Service.js");
const ContactByQuantity = require("./models/ContactByQuantity.js");
const {
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
} = require("./data/index.js");
const { getUser, getUsers } = require("./controllers/users.js");

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
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
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ONLY ADD DATA ONE TIME */
    // AffiliateStat.insertMany(dataAffiliateStat);
    // OverallStat.insertMany(dataOverallStat);
    //Product.insertMany(dataProduct);
    //ProductStat.insertMany(dataProductStat);
    //Clients.insertMany(dataClient);
    Contracts.insertMany(dataContracts);
    //Contacts.insertMany(dataContacts);
    //User.insertMany(dataUser);
    //Services.insertMany(dataServices);
  })
  .catch((error) => console.log(`${error} did not connect`));
