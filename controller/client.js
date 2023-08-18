
import Client from "../models/Clients.js";

export const getClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findById(id);
    res.status(200).json(client);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { nameBusiness, nameManager, email, phoneNumber, shopping, accountantId, actualService, clientStatus } = req.body;

    // Check if the user with the given ID exists
    const existingClient = await Client.findById(id);
    if (!existingClient) {
      return res.status(404).json({ message: "Client not found" });
    }

    // Update the Client properties
    existingClient.nameBusiness = nameBusiness;
    existingClient.nameManager = nameManager;
    existingClient.email = email;
    existingClient.phoneNumber = phoneNumber;
    existingClient.shopping = shopping;
    existingClient.accountantId = accountantId;
    existingClient.actualService = actualService;
    existingClient.clientStatus = clientStatus;

    // Save the updated user to the database
    const updatedClient = await existingClient.save();

    res.status(200).json(updatedClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findByIdAndDelete(id); // Find and delete the client by ID
    if (!client) {
      return res.status(404).json({ message: "CLient not found." });
    }
    res.status(200).json({ message: "Client deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createClient = async (req, res) => {
  try {
    const { nameBusiness, nameManager, email, phoneNumber, shopping, accountantId, actualService, clientStatus } = req.body;
    const newClient = new Client({ nameBusiness, nameManager, email, phoneNumber, shopping, accountantId, actualService, clientStatus });
    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};