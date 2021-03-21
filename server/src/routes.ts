import { Router } from 'express'
import ClassesController from './controllers/ClassesController'
import ConnectionController from './controllers/ConnectionController'

const routes = Router()
const classController = new ClassesController()
const connectionsController = new ConnectionController


routes.get('/classes' , classController.index)
routes.post('/classes' , classController.store)


routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.store)


export default routes