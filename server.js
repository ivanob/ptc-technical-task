const config = require('config')
const Hapi = require('hapi')
const glob = require('glob')
const path = require('path')

const traceError = (server, label, error) => {
  if (error) {
    server.log('error', `[ERROR ${label}] ${error}`)
    throw error
  }
}

// ---------- SERVER CONFIGURATION ----------

const apiPlugins = [
]

const hapiServer = new Hapi.Server()
const apiServer = hapiServer.connection({
  port: config.get('api.port'),
  labels: 'api'
})

const loadRoutes = (server) => {
  try {
    server.log('debug', 'Loading routes:')
    glob.sync(path.join(__dirname, '/routes/**/*.routes.js'))
      .forEach(file => {
        server.log('debug', ` - ${file.split('/routes/')[1]}`)
        require(file).forEach(routes => server.route(routes))
      })
  } catch (error) {
    traceError(server, 'ROUTE', error)
  }
}

apiServer.register(apiPlugins, (error) => {
  traceError(apiServer, 'API PLUGIN', error)
  loadRoutes(apiServer)
})

console.log("HI")

// ---------- HAPI SERVER ----------

hapiServer.start((error) => {
  traceError(hapiServer, 'SERVER', error)

  hapiServer.connections.forEach(connection => {
    hapiServer.log('info', `Server running at: ${connection.info.uri}`)
  })
})
