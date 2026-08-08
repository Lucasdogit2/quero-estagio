import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/api/status', (req, res) => {
  return res.json({ mensagem: 'Backend Express rodando com sucesso!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor Express rodando na porta ${PORT}`);
});