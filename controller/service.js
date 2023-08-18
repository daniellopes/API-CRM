import Service from "../models/Service.js";


export const getServices = async (req, res) => {
  try {
    const service = await Service.find();
    res.status(200).json(service);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getService = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findById(id);
    res.status(200).json(client);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};