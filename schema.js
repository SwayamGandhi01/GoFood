const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    CategoryName: String,
    name: String,
    img: String,
    options: [
      {
        half: String,
        full: String
      }
    ],
    description: String
  });
  const Menu = mongoose.model('Menu', menuSchema);

  module.exports = Menu;
