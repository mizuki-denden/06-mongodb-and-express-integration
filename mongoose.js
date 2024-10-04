import mongoose from 'mongoose';

const studentData = new mongoose.Schema({
  stdnum: { type: String, required: true, unique: true },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  age: { type: Number, required: true },
});

const Student = mongoose.model('Student', studentData);

export default Student;
