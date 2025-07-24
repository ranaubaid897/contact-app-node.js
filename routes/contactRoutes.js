// routes/contactRoutes.js

import express from 'express';
import {
  showHome,
  showAddForm,
  addContact,
  showRecord,
  showEditForm,
  updateContact,
  deleteContact
} from '../controller/contactController.js';

const router = express.Router();

router.get('/', showHome);
router.get('/Add-New', showAddForm);
router.post('/Add-New', addContact);
router.get('/show-record/:id', showRecord);
router.get('/edit-record/:id', showEditForm);
router.post('/edit-record/:id', updateContact);
router.get('/delete-record/:id', deleteContact);

export default router;
