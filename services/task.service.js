const Boom = require('boom')

const getTaskPerform = id => {
  new Promise((resolve, reject) => {
    if(id !== undefined){
      resolve({ id: "jojo" })
    } else{
      reject(Boom.serverUnavailable('No ID of task specified'))
    }
  }
)}

const storeTaskPerform = data => {
  console.log(data.aaa)
}

module.exports = {
  getTaskPerform: id => getTaskPerform(id),
  storeTaskPerform: data => storeTaskPerform(data)
}
