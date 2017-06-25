const mongo = require('../persistance/mongo.persistance')
const Boom = require('boom')

const getTaskPerform = id => {
  new Promise((resolve, reject) => {
    if(id !== undefined){
      mongo.getTaskPerform(id)
      resolve({ id: id, average: 0 })
    } else{
      reject(Boom.badRequest('No ID of task specified'))
    }
  }
)}

const storeTaskPerform = data => {
  new Promise((resolve, reject) => {
    if(data.id !== undefined && data.duration !== undefined){
      mongo.storeTaskPerform(data)
      resolve({ id: "jojo" })
    } else{
      reject(Boom.badRequest('No ID or duration of task specified'))
    }
  }
)}

module.exports = {
  getTaskPerform: id => getTaskPerform(id),
  storeTaskPerform: data => storeTaskPerform(data)
}
