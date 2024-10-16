const {
  createContact,
  getContacts,
  getContactById,
  deleteContact,
} = require("../Controllers/contactController");

const contactRouter = require("express").Router();

contactRouter.post("/send-contact", createContact);
contactRouter.get("/get-contact", getContacts);
contactRouter.get("/get-single-contact", getContactById);
contactRouter.delete("/delete-contact", deleteContact);

module.exports = contactRouter;
