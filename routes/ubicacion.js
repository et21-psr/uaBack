var express = require('express');
var router = express.Router();
var models = require("./../mysql")
/* GET users listing. */
router.get('/', function(req, res, next) {

  models.ubicacion.findAll().then(result => {
    res.status(200).jsonp(result);
  })
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  models.ubicacion.findOne({
    where:{
      id_ubicacion: id
    }
  }).then(result => {
  res.status(200).jsonp(result);
  });
  })


  router.delete('/:id', function(req, res, next) {
    let id = req.params.id;
    models.ubicacion.destroy({
      where:{
        id_ubicacion: id
      }
    }).then(result => {
    res.status(200).jsonp(result);
    });
    })


module.exports = router;
