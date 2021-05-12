import http from 'http'
import app from './app.js'

const PORT = process.env.PORT || 4000
const server = http.createServer(app)

const start = ()=> {
    try {
        server.listen(PORT, () => {
            console.log(`SERVER STARTED ON ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
