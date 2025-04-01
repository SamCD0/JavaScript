//Servidor-> servidor.js

const http = require('http')
const fs = require('fs')
const caminho = require('path')

//Definir portar e host
const porta = 3000
const host = 'localhost'

//Criando o servidor
const servidor = http.createServer((requisicao, resposta) =>{
    if(requisicao.url === '/') {
        const caminhoArquivo = caminho.join(__dirname, 'index.html')
        fs.readFile(caminhoArquivo, (erro, conteudo) => {
            if(erro){
                resposta.writeHead(500)
                resposta.end("Erro ao ler arquivo HTML")
                return
            }
            resposta.writeHead(200, {'Content-Type': 'text/html, charset=utf-8'})
            resposta.end(conteudo)
    
    })
    }   
  else if (requisicao.url === '/mensagem') {
    resposta.writeHead(200, {'content-type': 'text/plain; charset=utf8'})
    resposta.end("olá, essa é uma mensagem do servidor HTTP")
  }
  else{
    resposta.writeHead(404)
    resposta.end("Página não encontrada")
  }   
})
//iniciar o servidor
servidor.listen(porta, host, () => {
    console.log(`Servidor rodando em http://${host}:${porta}`)
})