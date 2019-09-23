const mongoose = require('mongoose');//Mongoose permite conectarse a mongodb y modelar datos 

try {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Data Base connected');
} catch (error) {
    console.error(error);
}
module.exports = mongoose;