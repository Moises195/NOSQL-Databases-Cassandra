const express = require('express');
const { createUser, getUser, updateUser, deleteUser } = require('./app');

const app = express();
app.use(express.json());

app.post('/users', (req, res) => {
  createUser(req.body.name, req.body.email)
    .then(() => res.send('User created'))
    .catch(err => res.status(500).send(err));
});

app.get('/users/:id', (req, res) => {
  getUser(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(500).send(err));
});

app.put('/users/:id', (req, res) => {
  updateUser(req.params.id, req.body.name, req.body.email)
    .then(() => res.send('User updated'))
    .catch(err => res.status(500).send(err));
});

app.delete('/users/:id', (req, res) => {
  deleteUser(req.params.id)
    .then(() => res.send('User deleted'))
    .catch(err => res.status(500).send(err));
});

app.listen(3000, () => console.log('Server running on port 3000'));
