# README
Para iniciar ejecute la siguiente linea en la terminal:
```
npm install
```
Luego se debe importar la base de datos presente en este archivo, y en el archivo server.js se debe cambiar la siguiente linea de código para conectarse con la base de datos del tester ( tener presente que la implementación de fastify con una base de datos fue hecha con postgres)
```
fastify.register(require('fastify-postgres'), {
  connectionString: 'postgres://postgres:PASSWORD@localhost/DB_NAME'
})
```
Esto debe de ser cambiada con los datos que el tester posee. La base de datos es una mini recopilación de usuarios con email de ejemplo.

Ya con esto realizado, ejecute la siguiente linea de código en la terminal
```
node server
```
Enhorabuena! ya puedes visualizar nuestra pequeña implementación en [http:\\127.0.0.1:3000](http:\\127.0.0.1:3000), donde se mostrará los id de usuarios existentes en la base de datos y al ingresar a `http:\\127.0.0.1:3000\[id]` con una id existente, se mostrará la información del usuario correspondiente.
