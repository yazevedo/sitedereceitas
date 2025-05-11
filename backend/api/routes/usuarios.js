const express = require('express');
const router = express.Router();
const conexao = require('../db');

// POST /cadastro
router.post('/cadastro', (req, res) => {
  const {  nome_usuario, nome_completo, senha, email } = req.body;
  const sql = 'INSERT INTO usuarios (nome, login, senha, email) VALUES (?, ?, ?, ?)';
  conexao.query(sql, [nome, login, senha, email], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send('Usuário cadastrado!');
  });
});

// GET /usuarios
router.get('/', (req, res) => {
  conexao.query('SELECT * FROM usuarios', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// PUT /senha (alterar senha por login)
router.put('/senha', (req, res) => {
  const { nome_usuario, novaSenha } = req.body;
  const sql = 'UPDATE usuarios SET senha = ? WHERE login = ?';
  conexao.query(sql, [novaSenha, login], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Senha alterada com sucesso.');
  });
});

// DELETE /conta (por login)
router.delete('/conta', (req, res) => {
  const { nome_usuario } = req.body;
  conexao.query('DELETE FROM usuarios WHERE login = ?', [login], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send('Conta excluída com sucesso.');
  });
});

module.exports = router;
