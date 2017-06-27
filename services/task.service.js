const mongo = require('../persistance/mongo.persistance')
const Boom = require('boom')

const getTaskPerform = id => {
  return new Promise((resolve, reject) => {
    if(id !== undefined){
      var objPerform = mongo.getTaskPerform(id)
      console.log(objPerform)
      resolve(objPerform)
    } else{
      reject(Boom.badRequest('No ID of task specified'))
    }
  }
)}

const storeTaskPerform = data => {
  return new Promise((resolve, reject) => {
    if(data.id !== undefined && data.duration !== undefined){
      data.duration = Number(data.duration)
      mongo.storeTaskPerform(data)
      resolve(data)
    } else{
      reject(Boom.badRequest('No ID or duration of task specified'))
    }
  }
)}

module.exports = {
  getTaskPerform: id => getTaskPerform(id),
  storeTaskPerform: data => storeTaskPerform(data)
}
