require('dotenv').config()
/* 
const express = require('express');
const cors = require('cors')
const http = require('http');

const app = express();
const server = http.createServer(app);
var path = require('path');

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {

  res.json('tttt')

})

app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});


const PORT = process.env.PORT
server.listen(PORT, () => console.log("Servidor inicialitzat"))
 */


const express = require('express')
const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})