const TaskService = require('../services/task.service')

module.exports = {
  getAverageTime: (request, reply) => {
    reply(TaskService.getTaskPerform(encodeURIComponent(request.params.id)))
  },
  storeTaskPerform: (request, reply) => {
    reply(TaskService.storeTaskPerform(request.payload))
  }
}
