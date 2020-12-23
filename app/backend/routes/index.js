const express = require('express')
const router = express.Router()
const { ensureAuthenticated } = require('../auth')
const { register, login } = require('../controllers/authController')

// todo: auth routes

router.route('/')
    .get((req, res) => {
        res.status(200).send('Hello World !')
    })

router.route('/dashboard')
    .get(ensureAuthenticated, (req, res) => {
        res.status(200).send('Secured Dashboard')
    })

router.route('/login')
    .post(login)

router.route('/register')
    .post(register)

module.exports = router
