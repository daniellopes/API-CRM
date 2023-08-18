
import Contact from "../models/Contact.js";

export const getContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);
    res.status(200).json(contact);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { negotiationStatus } = req.body;

    // Check if the Contacts with the given ID exists
    const existingContacts = await Contact.findById(id);
    if (!existingContacts) {
      return res.status(404).json({ message: "Contacts not found" });
    }

    // Update the Contacts properties
    existingContacts.negotiationStatus = negotiationStatus;

    // Save the updated Contacts to the database
    const updatedContacts = await existingContacts.save();

    res.status(200).json(updatedContacts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByIdAndDelete(id); // Find and delete the Contacts by ID
    if (!contact) {
      return res.status(404).json({ message: "Contact not found." });
    }
    res.status(200).json({ message: "Contact deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createContact = async (req, res) => {
  try {
    const { clientId, accountantId, description, serviceId, negotiationStatus } = req.body;
    const newContacts = new Contact({ clientId, accountantId, description, serviceId, negotiationStatus });
    const savedContacts = await newContacts.save();
    res.status(201).json(savedContacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};