import { openDb } from "../configDB.js";



///////////////////////////////////////////////////SALAS ABAIXOOOO V V V V V V 



export  async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Turma ( id INTEGER PRIMARY KEY, nomeTurma VARCHAR (100) )')
    });
}

export  async function selectClass(req, res){
    openDb().then(db=>{
         db.all('SELECT * FROM Turma')
        .then(rooms=>  res.json(rooms))
    });
}
export  async function selectClassbyId(req, res){
    let id = req.body.id;
   openDb().then(db=>{
        db.get('SELECT * FROM Turma WHERE id=?', [id])
        .then(room=>  res.json(room)  );
    });  
}

export  async function insertClass(req, res){
    let Turma = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Turma (nomeTurma) VALUES (?)', [Turma.nomeTurma])
    });
    res.json({
        "statusCode":200
    })
}

export  async function updateClass(req, res){
    let Turma = req.body;
    openDb().then(db=>{
        db.run('UPDATE Turma SET nomeTurma=? WHERE id=?', [Turma.nomeTurma, Turma.id])
    });
    res.json({
        "statusCode":200
    })
}

export  async function deleteClassbyId(req, res){
    let id = req.body.id;
     openDb().then(db=>{
         db.get('DELETE FROM Turma WHERE id=?', [id])
        .then(room=>  res.json(room));
    }); 
    res.json({
        "statusCode":200
    }) 
}



///////////////////////////////////////////////////ALUNO ABAIXOOOO V V V V V V 



export  async function createTableStudents(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Aluno ( id INTEGER PRIMARY KEY, rm CHAR (5), nome VARCHAR (100) NOT NULL, senha VARCHAR (100) NOT NULL, email VARCHAR (100) NOT NULL, statusAluno VARCHAR (20) NOT NULL, turma_id INT NOT NULL, FOREIGN KEY (turma_id) REFERENCES Turma(id) )')
    });
}

export  async function selectStudent(req, res){
    openDb().then(db=>{
         db.all('SELECT * FROM Aluno')
        .then(students=>  res.json(students))
    });
}
export  async function selectStudentbyId(req, res){
    let id = req.body.id;
   openDb().then(db=>{
        db.get('SELECT * FROM Aluno WHERE id=?', [id])
        .then(student=>  res.json(student)  );
    });  
}

export  async function insertStudent(req, res){
    let Turma = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Aluno (rm, nome, senha, email, statusAluno, turma_id) VALUES (?,?,?,?,?,?)', [Aluno.rm, Aluno.nome, Aluno.senha, Aluno.email, Aluno.statusAluno, Aluno.turma_id])
    });
    res.json({
        "statusCode":200
    })
}

export  async function updateStudent(req, res){
    let Turma = req.body;
    openDb().then(db=>{
        db.run('UPDATE Aluno SET rm=? nome=? senha=? email=? statusAluno=? turma_id=? WHERE id=?', [Aluno.rm, Aluno.nome, Aluno.senha, Aluno.email, Aluno.statusAluno, Aluno.turma_id, Aluno.id ])
    });
    res.json({
        "statusCode":200
    })
}

export  async function deleteStudentbyId(req, res){
    let id = req.body.id;
     openDb().then(db=>{
         db.get('DELETE FROM Aluno WHERE id=?', [id])
        .then(student=>  res.json(student));
    }); 
    res.json({
        "statusCode":200
    }) 
}



///////////////////////////////////////////////////REGISTRO ABAIXOOOO V V V V V V 



export  async function createTableRegistro(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Registro ( id INTEGER PRIMARY KEY, data_Hora DATE NOT NULL, entrada_Saida CHAR (1) NOT NULL, justificativa VARCHAR (100) , aluno_id INT NOT NULL, FOREIGN KEY (aluno_id) REFERENCES Aluno (id) )')
    });
}

export  async function selectRegister(req, res){
    openDb().then(db=>{
         db.all('SELECT * FROM Registro')
        .then(registers=>  res.json(registers))
    });
}
export  async function selectRegisterbyId(req, res){
    let id = req.body.id;
   openDb().then(db=>{
        db.get('SELECT * FROM Registro WHERE id=?', [id])
        .then(register=>  res.json(register)  );
    });  
}

export  async function insertRegister(req, res){
    let Turma = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Registro (data_Hora, entrada_Saida, justificativa, aluno_id) VALUES (?,?,?,?)', [Registro.data_Hora, Registro.entrada_Saida, Registro.justificativa, Registro.aluno_id])
    });
    res.json({
        "statusCode":200
    })
}

export  async function updateRegister(req, res){
    let Turma = req.body;
    openDb().then(db=>{
        db.run('UPDATE Registro SET data_Hora=? entrada_Saida=? justificativa=? aluno_id=? WHERE id=?', [Registro.data_Hora, Registro.entrada_Saida, Registro.justificativa, Registro.aluno_id, Registro.id ])
    });
    res.json({
        "statusCode":200
    })
}

export  async function deleteRegisterbyId(req, res){
    let id = req.body.id;
     openDb().then(db=>{
         db.get('DELETE FROM Registro WHERE id=?', [id])
        .then(register=>  res.json(register));
    }); 
    res.json({
        "statusCode":200
    }) 
}

