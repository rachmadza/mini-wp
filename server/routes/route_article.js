const router = require('express').Router()
const ArticleController = require('../controllers/controller_article')
const authenticateUser = require('../middlewares/authentication')
const authorizedUser = require('../middlewares/authorization')

router.use(authenticateUser)
router.get('/', ArticleController.all)
router.post('/', ArticleController.create)

router.put('/:id', authorizedUser, ArticleController.update)
router.delete('/:id', authorizedUser, ArticleController.delete)

module.exports = router