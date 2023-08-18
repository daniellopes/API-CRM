
import Contact from "../models/Contact.js";

export const getContacts = async (req, res) => {
  //const userId = req.params.userId; // Suponha que o ID do usuário seja passado como parâmetro

  try {
    const userContacts = await Contact.find();

    const serviceCounts = {};
    userContacts.forEach((contact) => {
      const services = ["Avulso Camera", "Banda Larga + VOIP", "Manutenção Cameras", "Apresentação da Empresa", "Banda Larga", "Apresentação de Serviços", "Link Dedicado", "Semidedicado", "Semidedicado + VOIP"];
      services.forEach((service) => {
        if (!serviceCounts[service]) {
          serviceCounts[service] = 0;
        }
        serviceCounts[service] += contact[service];
      });
    });

    const totalContacts = userContacts.length;
    const result = {
      userName: totalContacts > 0 ? userContacts[0].user : "",
      serviceCounts,
      totalContacts,
      contacts: userContacts,
    };

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};