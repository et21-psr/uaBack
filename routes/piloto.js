var express = require('express');
var router = express.Router();
var models = require("./../mysql")
/* GET users listing. */
router.get('/', function(req, res, next) {

  models.piloto.findAll().then(result => {
    res.status(200).jsonp(result);
  })
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  models.piloto.findOne({
    where:{
      id_piloto: id
    }
  }).then(result => {
  res.status(200).jsonp(result);
  });
  })

  router.delete('/:id', function(req, res, next) {
    let id = req.params.id;
    models.piloto.destroy({
      where:{
        id_piloto: id
      }
    }).then(result => {
    res.status(200).jsonp(result);
    });
    })

    router.post('/', function(req, res, next){
      let piloto = req.body;
      models.piloto.create(piloto).then(piloto => {
        res.status(200).jsonp(piloto);
      })
    });

module.exports = router;
