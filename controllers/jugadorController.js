const Jugador = require('../models/jugador.model')

async function createJugador(req,res) {
    Jugador.create(req.body)
      .then(jugadorDoc => {
        console.log(`Jugador create worked well: ${jugadorDoc}`)
        res.status(200).json(jugadorDoc)
      })
      .catch(error => {
        console.log(`Creating a new jugador went wrong! Try again 😞 ${error}`)
        res.status(400).json(error)
      });
    }

async function getJugadorById(req,res) {
  Jugador.findById(req.params.id)
  .then(jugadorDoc => {
    console.log('Found this jugador by their ID: ', jugadorDoc)
    res.status(200).json(jugadorDoc)  
  })
    .catch(err => {
      console.log('Error while getting the jugadors: ', err)
      res.status(400).json(err)
    }
    );
}

async function getJugadors(req,res) {
  Jugador.find()
    .then(jugadorDocs => {
      console.log('Found this: ',jugadorDocs)
      res.status(200).json(jugadorDocs)
    }
    )
    .catch(err => {
      console.log('Error while getting the jugadors:',err)
      res.status(400).json(err)
    });
}

module.exports = {
    createJugador,
    getJugadors,
    getJugadorById
}