const fastify = require('fastify')()

fastify.register(require('fastify-postgres'), {
  connectionString: 'postgres://postgres:PASSWORD@localhost/DB_NAME'
})

fastify.get('/', (req, reply) => {
  fastify.pg.connect(onConnect)

  function onConnect (err, client, release) {
    if (err) return reply.send(err)

    client.query(
      'SELECT id_user FROM users ',
      function onResult (err, result) {
        release()
        reply.send(err || {"message":"existen las siguientes id de usuario",'result':result['rows'],'message_2':"ingrese a http://127.0.0.1:3000/[id], con una id existente en la base de datos para obtener informacion del usuario"})
      }
    )
  }
})

fastify.get('/:id', (req, reply) => {
  fastify.pg.connect(onConnect)

  function onConnect (err, client, release) {
    if (err) return reply.send(err)

    client.query(
      'SELECT name_user,email FROM users WHERE id_user=$1 ',[req.params.id],
      function onResult (err, result) {
        release()
        reply.send(err || {"message": "El nombre del usuario es " +  result['rows'][0]['name_user'] + ", con su correo " + result['rows'][0]['email']})
      }
    )
  }
})

fastify.listen(3000, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
