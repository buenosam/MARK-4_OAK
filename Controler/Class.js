import { openDb } from "../configDB.js";



///////////////////////////////////////////////////SALAS ABAIXOOOO V V V V V V 



export  async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Turma ( id INTEGER PRIMARY KEY, NomeTurma VARCHAR (100) )')
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
        db.run('INSERT INTO Turma (NomeTurma) VALUES (?)', [Turma.NomeTurma])
    });
    res.json({
        "statusCode":200
    })
}

export  async function updateClass(req, res){
    let Turma = req.body;
    openDb().then(db=>{
        db.run('UPDATE Turma SET NomeTurma=? WHERE id=?', [Turma.NomeTurma, Turma.id])
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
        db.exec('CREATE TABLE IF NOT EXISTS Aluno ( id INTEGER PRIMARY KEY, Rm CHAR (5), Nome VARCHAR (100) NOT NULL, Senha VARCHAR (100) NOT NULL, Email VARCHAR (100) NOT NULL, StatusAluno VARCHAR (20) NOT NULL, Turma_id INT NOT NULL, FOREIGN KEY (Turma_id) REFERENCES Turma(id) )')
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
        db.run('INSERT INTO Aluno (Rm, Nome, Senha, Email, StatusAluno, Turma_id) VALUES (?,?,?,?,?,?)', [Aluno.Rm, Aluno.Nome, Aluno.Senha, Aluno.Email, Aluno.StatusAluno, Aluno.Turma_id])
    });
    res.json({
        "statusCode":200
    })
}

export  async function updateStudent(req, res){
    let Turma = req.body;
    openDb().then(db=>{
        db.run('UPDATE Aluno SET Rm=? Nome=? Senha=? Email=? StatusAluno=? Turma_id=? WHERE id=?', [Aluno.Rm, Aluno.Nome, Aluno.Senha, Aluno.Email, Aluno.StatusAluno, Aluno.Turma_id, Aluno.id ])
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
        db.exec('CREATE TABLE IF NOT EXISTS Registro ( id INTEGER PRIMARY KEY, Data_Hora DATE NOT NULL, Entrada_Saida CHAR (1) NOT NULL, Justifitiva VARCHAR (100) , Aluno_id INT NOT NULL, FOREIGN KEY (Aluno_id) REFERENCES Aluno (id) )')
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
        db.run('INSERT INTO Registro (Data_Hora, Entrada_Saida, Justificativa, Aluno_id) VALUES (?,?,?,?)', [Registro.Data_Hora, Registro.Entrada_Saida, Registro.Justificativa, Registro.Aluno_id])
    });
    res.json({
        "statusCode":200
    })
}

export  async function updateRegister(req, res){
    let Turma = req.body;
    openDb().then(db=>{
        db.run('UPDATE Registro SET Data_Hora=? Entrada_Saida=? Justificativa=? Aluno_id=? WHERE id=?', [Registro.Data_Hora, Registro.Entrada_Saida, Registro.Justificativa, Registro.Aluno_id, Registro.id ])
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

