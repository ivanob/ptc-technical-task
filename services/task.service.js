const Boom = require('boom')

const storeTaskPerform = id => {
  new Promise((resolve, reject) => {
    if(id !== undefined){
      resolve({ id: "jojo" })
    } else{
      reject(Boom.serverUnavailable('No ID of task specified'))
    }
  }
)}

module.exports = {
  storeTaskPerform: data => storeTaskPerform(data)
}
