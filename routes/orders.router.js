const express = require('express');
const { createOrder, GetOrder, addItem } = require('../schemas/order.schema');

const router = express.Router();
const validatorHandler = require('./../middlewares/validator.handler');
const OrdersService = require('./../services/order.service');

const service = new OrdersService();

router.get('/:id',
  validatorHandler(GetOrder, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createOrder, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProduct = await service.create(body);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }
);
router.post(
  '/add-item',
  validatorHandler(addItem, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newItem = await service.addItem(body);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;
