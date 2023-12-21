const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://pramodbro05:1234@pramod.sk89dwo.mongodb.net/inotebook"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connect to Mongo Successfully")
    })
}
module.exports = connectToMongo;