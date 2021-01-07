const mongoose = require('mongoose');
const mongoosePaginate = require("mongoose-paginate");

const ItemSchema = new mongoose.Schema({
  
  name:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  createAt:{
    type: Date,
    default: Date.now,
  },
});

ItemSchema.plugin(mongoosePaginate);

mongoose.model("Item", ItemSchema);