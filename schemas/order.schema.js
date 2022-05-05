const Joi = require('joi');

const customerId = Joi.number().integer();
const id = Joi.number().integer();
const orderId = Joi.number().integer();
const productId = Joi.number().integer();
const amount = Joi.number().integer().min(1);

const createOrder = Joi.object({
  customerId: customerId.required(),
});

const GetOrder = Joi.object({
  id: id.required(),
});

const addItem = Joi.object({
  orderId: orderId.required(),
  productId: productId.required(),
  amount: amount.required()
})

module.exports = { createOrder, GetOrder, addItem };
