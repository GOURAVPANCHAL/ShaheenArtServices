const Contact = require("../Models/CotactModel");


// Create a new contact
const createContact = async (req, res) => {
  try {
    const { firstname, lastname, email, phonenumber, subject, message } = req.body;
    console.log(req.body)

    // Validate required fields
    if (!firstname || !lastname || !email || !phonenumber || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create new contact entry
    const newContact = new Contact({ firstname, lastname, email, phonenumber, subject, message });

    // Save contact to the database
    await newContact.save();

    res.status(200).json({ message: "Contact created successfully", contact: newContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if(!contacts){
      return res.status(404).json({
        success:false,
        message:"Record not found"
      })
    }
    res.status(200).json({
      success:true,
      data:contacts
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get contact by ID
const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json({
      success:true,
      data:contact
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a contact
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createContact,
  getContacts,
  getContactById,
  deleteContact
};
