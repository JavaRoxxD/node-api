const mongoose = require('mongoose');

const Item = mongoose.model("Item");

module.exports = {
  async index(req, res){
    
    const items = await Item.find();

    return res.json(items);
  },

  async show(req, res){
    const item = await Item.findById(req.params.id);

    return res.json(item);
  },

  async store(req, res){
    const item = await Item.create(req.body);

    return res.json(item);
  },

  async update(req, res){
    //! {new: true} <<< ele força retornar o produto atualizado e sem ele é retornado os valores anteriores.
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {new: true});
    
    return res.json(item);
  },

  async destroy(req, res){
    const item = await Item.findByIdAndRemove(req.params.id);

    //! Retorna se foi um sucesso ou não \/
    return res.send();
  }
}