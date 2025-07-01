'use strict'

const data = [
  {id: 'B1', name: 'Chocolate Bar', rrp: '22.40', info: 'Delicious overpriced chocolate.'}
]

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    return data
  });

  fastify.post('/', async function (request, reply) {
    // The opts.prefix contains the route prefix for our route  (ex: /confectionery)
    // .slice(1) strips the leading forward slash
    request.mockDataInsert(opts.prefix.slice(1), data)
    return data
  });
}

// 'use strict'

// module.exports = async function (fastify, opts) {
//   fastify.get('/', async function (request, reply) {
//     return [
//       {id: 'B1', name: 'Chocolate Bar', rrp: '22.40', info: 'Delicious overpriced chocolate.'}
//     ]
//   })
// }