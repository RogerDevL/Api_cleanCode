require('dotenv').config(); // arquivo => .env
const express = require('express'); 
const { sequelize } = require('./models');
const routes = require('./routers/router')


const app = express(); // Iniciando servidor

app.use(express.json()); // Resposta via JSON





app.use('/api', routes)

sequelize.authenticate()
    .then(()=>{
        console.log("Conexao com o banco de dados deu certo")
})
    .catch(err =>{
        console.log("Erro ao conectar no banco:", err)
});

const PORT = process.env.PORT || 3000;
// Listen => Ouvir
// Ouvindo na possivel ou na porta 3000;
app.listen(PORT, ()=>{
    console.log('-----------------------------');
    console.log(`Running on http://${PORT}`);
    console.log('-----------------------------');
});