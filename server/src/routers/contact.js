import express from 'express';

import * as contactValidation from '../validation/contact';
import * as contactController from '../controllers/contact';

const router = express.Router();

router.route('/').post(contactValidation.createContact, contactController.createContact);

export default router;
