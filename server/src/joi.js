import Joi from 'joi';

export const config = {
  escapeHtml: true,
  abortEarly: false,
  language: {
    key: '{{label}} ',
    any: {
      required: 'is required',
      empty: 'is required'
    }
  }
};

export const name = Joi.string()
  .alphanum()
  .insensitive()
  .label('Name');

export const email = Joi.string()
  .email({ minDomainAtoms: 2 })
  .lowercase()
  .min(4)
  .max(40)
  .label('Email');

export const message = Joi.string()
  .max(20000)
  .label('Message');
