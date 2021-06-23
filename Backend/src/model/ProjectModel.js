const mongoose = require('../config/database')
const Schema = mongoose.Schema

const ProjectSchema = new Schema({
    name: {type: String, require: true},
    type: {type: String, require: true},
    description: {type: String, require: true},
    manager: {type: String, require: true},
    sub_manager: {type: String, require: true},
    begin: {type: Date, require: true},
    finish: {type: Date}
})

module.exports = mongoose.model('Project', ProjectSchema)