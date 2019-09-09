var express = require('express');
var router = express.Router();
var models = require("./../mysql")
/* GET users listing. */
router.get('/', function(req, res, next) {

  models.estado.findAll().then(result => {
    res.status(200).jsonp(result);
  })
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  models.estado.findOne({
    where:{
      id_estado: id
    }
  }).then(result => {
  res.status(200).jsonp(result);
  });
  })

  router.delete('/:id', function(req, res, next) {
    let id = req.params.id;
    models.estado.destroy({
      where:{
        id_estado: id
      }
    }).then(result => {
    res.status(200).jsonp(result);
    });
    })

    router.post('/', function(req, res, next){
      let estado = req.body;
      models.estado.create(estado).then(estado => {
        res.status(200).jsonp(estado);
      })
    });

module.exports = router;
