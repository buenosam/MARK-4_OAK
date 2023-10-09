import { Router } from "express";
import { createTable, insertClass, updateClass, selectClass, selectClassbyId, deleteClassbyId, selectStudent, selectStudentbyId, insertStudent, updateStudent, deleteStudentbyId, createTableStudents, createTableRegistro, selectRegister, selectRegisterbyId, insertRegister, updateRegister, deleteRegisterbyId } from './Controler/Class.js';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        "statusCode":200,
        "msg": "Api Rodando"
    })
})


//salas
router.get('/rooms', selectClass);
router.get('/room', selectClassbyId);
router.post('/room', insertClass);
router.put('/room', updateClass);
router.delete('/room', deleteClassbyId);
//aluno
router.get('/students', selectStudent);
router.get('/student', selectStudentbyId);
router.post('/student', insertStudent);
router.put('/student', updateStudent);
router.delete('/student', deleteStudentbyId);
//registro
router.get('/registers', selectRegister);
router.get('/register', selectRegisterbyId);
router.post('/register', insertRegister);
router.put('/register', updateRegister);
router.delete('/register', deleteRegisterbyId);




export default router;