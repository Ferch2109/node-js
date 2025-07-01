'use strict'

const data = [
    'confectionery', 
    'electronics'
]

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return data;
  })
}