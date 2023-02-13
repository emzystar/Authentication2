require('dotenv').config()
const bcrypt = require('bcrypt')
const express = require('express')
const app = express()
const port = 5500
const mongoose = require('mongoose')
mongoose.set('strictQuery', true)
const notFound = require('./middleware/notFound')
const authRouter = require('./router/authRouter')
const journalRouter = require('./router/journalRouter')
const auth = require('./middleware/authentication')





// middleware
app.use(express.json())

// routes
app.use('/api/v1', authRouter);
app.use('/api/v1/journal',auth,  journalRouter)




// error route
app.use(notFound)




const start = async ()=> {
    try{
        await mongoose.connect(process.env.MONGOOD);
        app.listen(port, ()=>{
            console.log(`server is running on port ${port}`)
        })

    }catch(err){
        console.log(err)
    }
}
start()
