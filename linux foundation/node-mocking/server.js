'use strict'
const { createServer } = require('http') 

const data = JSON.stringify([
  {id: 'A1', name: 'Vacuum Cleaner', rrp: '99.99', info: 'The worst vacuum in the world.'},
  {id: 'A2', name: 'Leaf Blower', rrp: '303.33', info: 'This product will blow your socks off.'},
  {id: 'B1', name: 'Chocolate Bar', rrp: '22.40', info: 'Delicious overpriced chocolate.'}
]) 

// The createServer function accepts a function known as the request listener.
const server = createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json')
  res.end(data)
})

// Tells the HTTP server to listen on port 3000
server.listen(3000)