const config = require('config')
const TaskHandler = require('../handlers/task.handler')

const routes = []

routes.push(
  {
    method: 'GET',
    path: `${config.get('api.base-path')}/task`,
    handler: TaskHandler.getAverageTime
  })

module.exports = routes
