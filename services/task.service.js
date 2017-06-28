const mongo = require('../persistance/mongo.persistance')
const Boom = require('boom')

const getTaskPerform = id => {
  return new Promise((resolve, reject) => {
    if(id !== undefined){
      if(isNaN(id)){
        reject(Boom.badRequest('ID should be a number'))
      }else if(id<0){
        reject(Boom.badRequest('ID should be a positive number'))
      }else{
        mongo.getTaskPerform(id).then(objPerform => {
          if(objPerform == null){
            reject(Boom.badRequest('That ID is not registered yet'))
          }else{
            resolve(objPerform)
          }
        })
      }
    } else{
      reject(Boom.badRequest('No ID of task specified'))
    }
  }
)}

const storeTaskPerform = data => {
  return new Promise((resolve, reject) => {
    if(data.id !== undefined && data.duration !== undefined){
      if(isNaN(data.id) || isNaN(data.duration)){
        reject(Boom.badRequest('ID and duration should be numbers'))
      }else{
        if(data.duration<=0){
          reject(Boom.badRequest('Duration should be a positive number'))
        }else{
          data.duration = Number(data.duration)
          mongo.storeTaskPerform(data)
          resolve(data)
        }
      }
    } else{
      reject(Boom.badRequest('No ID or duration of task specified'))
    }
  }
)}

module.exports = {
  getTaskPerform: id => getTaskPerform(id),
  storeTaskPerform: data => storeTaskPerform(data)
}
