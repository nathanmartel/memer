const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  top: { 
    type: String,
  },
  image: {
    type: String,
    required: true
  },
  bottom: {
    type: String,
  }
}, {
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.id;
    }
  }, 
  toObject: {
    virtuals: true
  }
});


module.exports = mongoose.model('Meme', schema);
