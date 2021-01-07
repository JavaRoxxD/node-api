const express = require('express');

const routes = express.Router();

const ItemController = require('./controllers/ItemController');

routes.get('/items', ItemController.index);
routes.get('/items/:id', ItemController.show);
routes.post("/items", ItemController.store);
routes.put('/items/:id', ItemController.update);
routes.delete('/items/:id', ItemController.destroy);


module.exports = routes;