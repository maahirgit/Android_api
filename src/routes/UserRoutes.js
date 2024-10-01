const router = require('express').Router()

const userController = require('../controller/UserController')
router.post("/registerUser",userController.registerUser)
router.post("/loginUser",userController.loginUser)
router.post("/forgotPassword",userController.forgotPassword)
router.post("/resetPassword",userController.resetPassword)

module.exports = router