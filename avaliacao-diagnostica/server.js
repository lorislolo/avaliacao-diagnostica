import express from 'express'  
import { PrismaClient } from '@prisma/client'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const prisma = new PrismaClient()
const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/user/cadastrar', async (req, res) => {
    const dados = req.body
    const usuario = await prisma.user.create({
        data: dados
    })
})
app.get('/user/listar', async (req, res) => {
    const usuarios = await prisma.user.findMany()
    console.log(usuarios)
    res.json(usuarios)
})

app.listen(4000, () => {
    console.log('http://localhost:4000/')
});