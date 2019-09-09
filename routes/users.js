var express = require('express');
var router = express.Router();
var models = require("./../mysql")
/* GET users listing. */
router.get('/', function(req, res, next) {

  models.usuario.findAll().then(result => {
    res.status(200).jsonp(result);
  })
});

router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  models.usuario.findOne({
    where:{
      id_usuario: id
    }
  }).then(result => {
  res.status(200).jsonp(result);
  });
  })

  router.delete('/:id', function(req, res, next) {
    let id = req.params.id;
    models.usuario.destroy({
      where:{
        id_usuario: id
      }
    }).then(result => {
    res.status(200).jsonp(result);
    });
    })

    router.post('/', function(req, res, next){
      let usuario = req.body;
      models.usuario.create(usuario).then(uusuario => {
        res.status(200).jsonp(usuario);
      })
    });
module.exports = router;
