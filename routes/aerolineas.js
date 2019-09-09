var express = require('express');
var router = express.Router();
var models = require("./../mysql")
/* GET users listing. */
router.get('/', function(req, res, next) {

  models.aerolinea.findAll().then(result => {
    res.status(200).jsonp(result);
  })
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  models.aerolinea.findOne({
    where:{
      id_aerolinea: id
    }
  }).then(result => {
  res.status(200).jsonp(result);
  });
  })

  router.delete('/:id', function(req, res, next) {
    let id = req.params.id;
    models.aerolinea.destroy({
      where:{
        id_aerolinea: id
      }
    }).then(result => {
    res.status(200).jsonp(result);
    });
  })

    router.post('/', function(req, res, next){
      let aerolinea = req.body;
      models.aerolinea.create(aerolinea).then(aerolinea => {
        res.status(200).jsonp(aerolinea);
      })
    });

module.exports = router;
