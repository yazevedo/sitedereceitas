const express = require('express');
const router = express.Router();
const conexao = require('../db');

// POST /cadastro
router.post('/cadastro', (req, res) => {
  const { nome_completo, nome_usuario, senha, email } = req.body;

  // Verificar se todos os campos foram passados
  if (!nome_completo || !nome_usuario || !senha || !email) {
    return res.status(400).send('Todos os campos são obrigatórios.');
  }

  const sql = 'INSERT INTO usuarios (nome_completo, nome_usuario, senha, email) VALUES (?, ?, ?, ?)';
  conexao.query(sql, [nome_completo, nome_usuario, senha, email], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ mensagem: 'Usuário cadastrado!' });
  });
});

router.post('/login', (req, res) => {
  const { nome_usuario, senha } = req.body;

  if (!nome_usuario || !senha) {
    return res.status(400).json({ mensagem: 'Usuário e senha são obrigatórios.' });
  }

  const sql = 'SELECT * FROM usuarios WHERE nome_usuario = ? AND senha = ?';
  conexao.query(sql, [nome_usuario, senha], (err, results) => {
    if (err) return res.status(500).json({ mensagem: 'Erro no servidor.' });
    if (results.length === 0) return res.status(401).json({ mensagem: 'Credenciais inválidas.' });

    // Aqui seria ideal gerar um JWT, mas para simplicidade:
    res.status(200).json({ token: 'falso-token-exemplo' });
  });
});

// GET /usuarios
router.get('/', (req, res) => {
  conexao.query('SELECT * FROM usuarios', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// PUT /senha (alterar senha por nome_usuario)
router.put('/senha', (req, res) => {
  const { nome_usuario, novaSenha } = req.body;

  if (!nome_usuario || !novaSenha) {
    return res.status(400).send('Nome de usuário e nova senha são obrigatórios.');
  }

  const sql = 'UPDATE usuarios SET senha = ? WHERE nome_usuario = ?';
  conexao.query(sql, [novaSenha, nome_usuario], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).json({ mensagem: 'Senha alterada com sucesso.' });
  });
});

// DELETE /conta (por nome_usuario)
router.delete('/conta', (req, res) => {
  const { nome_usuario } = req.body;

  if (!nome_usuario) {
    return res.status(400).send('Nome de usuário é obrigatório.');
  }

  conexao.query('DELETE FROM usuarios WHERE nome_usuario = ?', [nome_usuario], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).json({ mensagem: 'Conta excluída com sucesso.' });
  });
});

module.exports = router;
