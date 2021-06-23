const ProjectModel = require('../model/ProjectModel')
const Upper = require('../util/Upper')

const ProjectValidation = async (req, res, next) => {
    const body = Upper.body(req.body)
    const {name, type, description, manager, sub_manager, begin} = body

    if (!name) {
        return res.status(400).json({error: '[Validation Error]: <name field> is required'})
    } else if (!type) {
        return res.status(400).json({error: '[Validation Error]: <type field> is required'})
    } else if (!description) {
        return res.status(400).json({error: '[Validation Error]: <description field> is required'})
    } else if (!manager) {
        return res.status(400).json({error: '[Validation Error]: <manager field> is required'})
    } else if (!sub_manager) {
        return res.status(400).json({error: '[Validation Error]: <sub_manager field> is required'})
    } else if (!begin) {
        return res.status(400).json({error: '[Validation Error]: <begin field> is required'})
    } else {
        if (req.params.id) {
            exists = await ProjectModel.findOne({
                '_id': {'$ne': req.params.id},
                'name': {'$eq': name}
            })
        } else {
            exists = await ProjectModel.findOne({
                'name': {'$eq': name}
            })
        }

        if (exists) {
            return res.status(400).json({error: '[Duplication Error]: <title project> already exists'})
        }

        next()
    }
}

module.exports = ProjectValidation