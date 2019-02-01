// const http = require('http') // require importa bibliotecas do node


// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write('Hello Word')
//     res.end()   
// }).listen(3000, function(){
//     console.log('Server listening on port 3000')
// })

const server = require('./config/server')
const port = 3000

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})