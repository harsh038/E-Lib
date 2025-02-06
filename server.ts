import app from "./src/app"
import { config } from "./src/config/config"

const startServer = () => {
     const port = config.port // Access port from the loaded config
     if (!port) {
          console.error("Port is undefined. Check your .env file!")
          process.exit(1)
     }
     app.listen(port, () => {
          console.log(`Server Started on port ${port}`)
     })
}

startServer()
