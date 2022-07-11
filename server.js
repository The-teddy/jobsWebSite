const express = require ('express')
const app = express()
const porta = process.env.PORT || 80


app.use(express.static(__dirname + '/dist/'))


//Responder as requisições feitas para o servidor web por meio da rota get

app.get('/', (req, res)=>{
        res.sendfile(__dirname + '/dist/index.html')
})

app.listen(porta, ()=>{
    console.log('rodando no express')
})
