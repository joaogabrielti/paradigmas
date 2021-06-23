const express = require('express')
const router = express.Router()

const ProjectController = require('../controller/ProjectController')
const ProjectValidation = require('../middleware/ProjectValidation')

router.get('/test', ProjectController.test)

router.post('/', ProjectValidation, ProjectController.create)
router.get('/', ProjectController.read)
router.put('/:id', ProjectValidation, ProjectController.update)
router.delete('/:id', ProjectController.delete)
router.get('/count', ProjectController.count)
router.get('/:id', ProjectController.show)
router.put('/finish/:id', ProjectController.finish)
router.get('/filter/type/:value', ProjectController.filter_type)
router.get('/filter/finish/:value', ProjectController.filter_finish)
router.get('/filter/month/:value', ProjectController.filter_month)
router.get('/filter/year/:value', ProjectController.filter_year)

module.exports = router