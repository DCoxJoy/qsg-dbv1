const mongoose = require('mongoose');

const QsguideSchema = new mongoose.Schema(
    {
      product_name: {
      type: String
      },
      sku: {
        type: String,
        unique: true
      },
      links: {
        type: String,
        default: 'no-photo.jpg'
     
      }
    });

    module.exports = mongoose.model('Qsguide', QsguideSchema);