const express = require('express')
const connectdb = require('./db')
const cors = require('cors')
const Route = require('./routes/UserRouter')



connectdb()
const app = express()
const port = 4000
app.use(cors())
app.use(express.json())
app.use('/auth',Route)

app.listen(port, ()=>{
    console.log("server started");
})