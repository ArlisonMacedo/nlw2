import {Request, Response} from 'express'
import connection from '../database/connection'

export default class ConnectionController {
  async index(request: Request, response:Response) {
    const connections = await connection('connections')
      .count('* as total')

    const {total} = connections[0]

    return response.json({total})
  }

  async store (request: Request, response: Response) {
    const { user_id} = request.body

    await connection('connections').insert({
      user_id
    })

    return response.status(201).send()
  }
}