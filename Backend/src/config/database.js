const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/paradigmas'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

module.exports = mongoose
