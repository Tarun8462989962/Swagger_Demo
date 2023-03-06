const{ set ,connect ,connection } = require('mongoose')


function connectDatabase(){
    set ('strictQuery',true)
    return connect('mongodb://127.0.0.1/swagger_demo')
}
connection.on('connected',()=>{
    console.log("connected")
})

module.exports = connectDatabase