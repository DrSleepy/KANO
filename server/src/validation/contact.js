import Joi from 'joi';

import * as fields from '../joi';

export const createContact = (req, res, next) => {
  console.log('OMOGMOGMOGM');
  const contactSchema = Joi.object().keys({
    email: fields.email.required(),
    name: fields.name.required(),
    message: fields.message.required()
  });

  const result = Joi.validate(req.body, contactSchema, fields.config);
  result.error ? next({ status: 400, errors: [...result.error.details] }) : next();
};
