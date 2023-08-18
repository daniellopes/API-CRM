
import Contract from "../models/Contract.js";

export const getContract = async (req, res) => {
  try {
    const { id } = req.params;
    const contract = await Contract.findById(id);
    res.status(200).json(contract);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getContracts = async (req, res) => {
  try {
    const contracts = await Contract.find();
    res.status(200).json(contracts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateContract = async (req, res) => {
  try {
    const { id } = req.params;
    const { nameBusiness, phoneNumber, email, amount } = req.body;

    // Check if the Contacts with the given ID exists
    const existingContracts = await Contract.findById(id);
    if (!existingContracts) {
      return res.status(404).json({ message: "Contracts not found" });
    }

    // Update the Contracts properties
    existingContracts.nameBusiness = nameBusiness;
    existingContracts.phoneNumber = phoneNumber;
    existingContracts.email = email;
    existingContracts.amount = amount;

    // Save the updated Contacts to the database
    const updatedContracts = await existingContracts.save();

    res.status(200).json(updatedContracts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteContract = async (req, res) => {
  try {
    const { id } = req.params;
    const contract = await Contract.findByIdAndDelete(id); // Find and delete the Contracts by ID
    if (!contract) {
      return res.status(404).json({ message: "Contract not found." });
    }
    res.status(200).json({ message: "Contract deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createContract = async (req, res) => {
  try {
    const { nameBusiness, phoneNumber, email, amount } = req.body;
    const newContract = new Contract({ nameBusiness, phoneNumber, email, amount });
    const savedContract = await newContract.save();
    res.status(201).json(savedContract);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};