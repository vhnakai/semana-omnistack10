const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

routes.get('/devs', DevController.index)

routes.post('/devs', DevController.store )

routes.get('/search', SearchController.index)



module.exports = routes

//  get, post, put, delete

//tipos de parametros
//Query params: req.query (Filtros, ordenação, paginação, ...)
//Route params: req.params (idenficar um recurso na alteração ou remoção)
//Body:  request.body (Dados para ciração ou alteração de um registro)
