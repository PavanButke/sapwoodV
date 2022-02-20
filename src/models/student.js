const mongoose = require('../db');

const task = new mongoose.Schema({
  title: { type: String, required: true },
  done: { type: Boolean, default: false }
});

const Student = mongoose.model('Student', task);

module.exports = Student;
