var express = require('express');
var router = express.Router();
var models = require("./../mysql")
/* GET users listing. */
router.get('/', function(req, res, next) {

  models.pasajero.findAll().then(result => {
    res.status(200).jsonp(result);
  })
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  models.pasajero.findOne({
    where:{
      id_pasajero: id
    }
  }).then(result => {
  res.status(200).jsonp(result);
  });
  })

  router.delete('/:id', function(req, res, next) {
    let id = req.params.id;
    models.pasajero.destroy({
      where:{
        id_pasajero: id
      }
    }).then(result => {
    res.status(200).jsonp(result);
    });
    })

    router.post('/', function(req, res, next){
      let pasajero = req.body;
      models.pasajero.create(pasajero).then(pasajero => {
        res.status(200).jsonp(pasajero);
      })
    });

module.exports = router;
