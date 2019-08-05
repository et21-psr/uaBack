var express = require('express');
var router = express.Router();
var models = require("./../mysql")
/* GET users listing. */
router.get('/', function(req, res, next) {

  models.ubicacionavion.findAll().then(result => {
    res.status(200).jsonp(result);
  })
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  models.ubicacionavion.findOne({
    where:{
      id_ubicacion_avion: id
    }
  }).then(result => {
  res.status(200).jsonp(result);
  });
  })

  router.delete('/:id', function(req, res, next) {
    let id = req.params.id;
    models.ubicacionavion.destroy({
      where:{
        id_ubicacion_avion: id
      }
    }).then(result => {
    res.status(200).jsonp(result);
    });
    })


module.exports = router;
