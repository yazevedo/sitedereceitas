const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usuariosRouter = require('./routes/usuarios');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/usuarios', usuariosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
