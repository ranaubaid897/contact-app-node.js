// controller/contactController.js
import Contact from '../models/Contact.js';

// Show all contacts
export const showHome = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.render('index', { contact: contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).send("Server Error");
  }
};

// Show Add Form
export const showAddForm = (req, res) => {
  try {
    res.render('form');
  } catch (error) {
    console.error("Error rendering form:", error);
    res.status(500).send("Server Error");
  }
};

// Add new contact
export const addContact = async (req, res) => {
  const { first_name, last_name, email, phone, address } = req.body;
  try {
    await Contact.create({
      firstname: first_name,
      lastname: last_name,
      email,
      phone,
      address,
    });
    res.redirect('/');
  } catch (error) {
    console.error("Error adding contact:", error);
    res.status(500).send("Server Error");
  }
};

// Show a single record
export const showRecord = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).send("Contact not found");
    }
    res.render('show', { contact });
  } catch (error) {
    console.error("Error fetching contact:", error);
    res.status(500).send("Server Error");
  }
};

// Show Edit Form
export const showEditForm = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).send("Contact not found");
    }
    res.render('edit', { contact });
  } catch (error) {
    console.error("Error showing edit form:", error);
    res.status(500).send("Server Error");
  }
};

// Update Contact
export const updateContact = async (req, res) => {
  const { first_name, last_name, email, phone, address } = req.body;
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, {
      firstname: first_name,
      lastname: last_name,
      email,
      phone,
      address,
    });
    if (!contact) {
      return res.status(404).send("Contact not found");
    }
    res.redirect('/');
  } catch (error) {
    console.error("Error updating contact:", error);
    res.status(500).send("Server Error");
  }
};

// Delete Contact
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).send("Contact not found");
    }
    res.redirect('/');
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).send("Server Error");
  }
};
