const TaskService = require('../services/task.service')

module.exports = {
  getAverageTime: (request, reply) => {
    console.log(request.payload)
    reply(TaskService.storeTaskPerform(encodeURIComponent(request.params.id)))
  }
}
