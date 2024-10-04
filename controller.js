import Student from './mongoose.js';

const saveStudent = async (req, res) => {
  const { stdnum, fname, lname, age } = req.body;
  try {
    const student = new Student({ stdnum, fname, lname, age });
    await student.save();
    res.json({ inserted: true });
  } catch (error) {
    res.json({ inserted: false });
  }
};


const updateStudent = async (req, res) => {
  const { fname } = req.body;
  try {
    const result = await Student.updateOne({ fname }, { lname: 'Parker' });
    res.json({ updated: result.nModified > 0 });
  } catch (error) {
    res.json({ updated: false });
  }
};

const removeUser = async (req, res) => {
  const { stdnum } = req.body;
  try {
    const result = await Student.deleteOne({ stdnum });
    res.json({ removed: result.deletedCount > 0 });
  } catch (error) {
    res.json({ removed: false });
  }
};

const removeAllUsers = async (req, res) => {
  try {
    const result = await Student.deleteMany({});
    res.json({ removed: result.deletedCount > 0 });
  } catch (error) {
    res.json({ removed: false });
  }
};

const getUser = async (req, res) => {
  const { stdnum } = req.query;
  try {
    const students = await Student.find({ stdnum });
    res.json(students);
  } catch (error) {
    res.json([]);
  }
};

const getMembers = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.json([]);
  }
};

export { getMembers, getUser, removeAllUsers, removeUser, updateStudent, saveStudent }