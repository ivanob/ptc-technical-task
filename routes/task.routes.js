const config = require('config')
const TaskHandler = require('../handlers/task.handler')

const routes = []

routes.push(
  {
    method: 'GET',
    path: `${config.get('api.base-path')}/task/{id}`,
    handler: TaskHandler.getAverageTime
  },
  {
    method: 'POST',
    path: `${config.get('api.base-path')}/task`,
    handler: TaskHandler.storeTaskPerform
  }
)

module.exports = routes
