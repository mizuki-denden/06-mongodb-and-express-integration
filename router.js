import { saveStudent, updateStudent, removeUser, removeAllUsers, getUser, getMembers } from "./controller.js";

const app = (app) => {
    app.post('/save-student', saveStudent);
    app.post('/update', updateStudent);
    app.post('/remove-user', removeUser);
    app.post('/remove-all-user', removeAllUsers);
    app.get('/user', getUser);
    app.get('/members', getMembers);
    
}
    
export default app;