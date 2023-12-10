const express = require('express')
const router = express.Router()

const jugadorController = require('../controllers/jugadorController')

router.post('/create', jugadorController.createJugador )
router.put('/:id', jugadorController.updateJugador)
router.get('/', jugadorController.getJugadors)
router.get('/:id', jugadorController.getJugadorById)

module.exports = router

