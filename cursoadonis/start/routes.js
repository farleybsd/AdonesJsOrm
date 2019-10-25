'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')



Route.resource("postagem","Teste2Controller")

Route.resource("usuarios","UsuarioController")





















// Route.get("/postagem","TesteController.index")

// Route.get("/postagem/:id","TesteController.show")

// Route.post("/postagem/:id","TesteController.store")

// Route.put("/postagem/:id","TesteController.put")

// Route.delete("/postagem/:id","TesteController.delete")



// Route.group(() =>{

// Route.get('/', () => {
//   return { greeting: 'Hello world in JSON' }
// })

// Route.get('/postagem/:id',({params})=>{
//   return {mensagem:'Retorno da rota postagem com o parametro - ' + params.id}

// })

// Route.post('/postagem', () => {
//   return { mensagem: 'Retorno da rota postagem!' }
// })

// Route.put('/postagem', () => {
//   return { mensagem: 'Retorno da rota postagem!' }
// })

// Route.delete('/postagem', () => {
//   return { mensagem: 'Retorno da rota postagem!' }
// })

// })
