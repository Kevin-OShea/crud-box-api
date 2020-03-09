// models/upload.js
const mongoose = require('mongoose')
const uploadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})
module.exports = mongoose.model('Upload', uploadSchema)
