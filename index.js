const express = require('express');
const app = express();

app.use(express.json())

const students = [
    { id: 0, name: 'Maria', age: 18, email: 'maria@example.com' },
    { id: 1, name: 'John', age: 21, email: 'john@example.com' },
    { id: 2, name: 'Juliana', age: 21, email: 'juliana@example.com' },
    { id: 3, name: 'Jonathan', age: 15, email: 'jonathan@example.com' }
];

app.get('/', (req, res) => {
    res.send('NodeJS Rest API')
});

app.get('/api/students', (req, res) => {
    res.send(students);
});

app.get('/api/students/:id', (req, res) => {
    const student = students.find(c => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('No se encontro ningun dato.')
    else res.send(student)
});

app.post('/api/students/', (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age),
        email: req.body.email
    };

    students.push(student);
    res.send(student);
});

app.delete('/api/students/:id', (req, res) => {
    const student = students.find(c => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('Usuario no encontrado');

    const index = students.indexOf(student);
    students.splice(index, 1);
    res.send(student);
});

const port = 80;
app.listen(port, () => console.log('API Funcionando'))