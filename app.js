// app.js
const client = require('./database');

const createUser = async (name, email) => {
  const query = 'INSERT INTO users (user_id, name, email, created_at) VALUES (uuid(), ?, ?, toTimestamp(now()))';
  await client.execute(query, [name, email], { prepare: true });
  console.log('User created');
};

const getUser = async (userId) => {
  const query = 'SELECT * FROM users WHERE user_id = ?';
  const result = await client.execute(query, [userId], { prepare: true });
  return result.rows[0];
};

const updateUser = async (userId, name, email) => {
  const query = 'UPDATE users SET name = ?, email = ? WHERE user_id = ?';
  await client.execute(query, [name, email, userId], { prepare: true });
  console.log('User updated');
};

const deleteUser = async (userId) => {
  const query = 'DELETE FROM users WHERE user_id = ?';
  await client.execute(query, [userId], { prepare: true });
  console.log('User deleted');
};
