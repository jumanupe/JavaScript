'use strict'

var validator = require('validator');
var Article = require('../models/article');

var controller = {

    datosCurso : function(req, res){
    
        return res.status(200).send({
            curso: 'Master en Frameworks JS',
            autor: 'Juanma Pereyra',
            url: 'juanmanup.com'
        });
    
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la accion test de mi controlador de articulos'
        });
    },

    save: (req, res) => {
        // Recoger parametros por post
        var params = req.body;
        console.log(params);

        // Validar datos (Validator)
        try{
            var validate_title = !validator.isEmpty(params.title);
            var validate_content = !validator.isEmpty(params.content);

        }catch(err){
            return res.status(200).send({
                message: 'Faltan datos por enviar!!'
            });

        }

        if (validate_title && validate_content){
            // Crear objeto a guardar

            // Asignar valores

            // Guardar el articulo

            // Devolver una respuesta
            return res.status(200).send({
            article: params
            });
        }else{
            return res.status(200).send({
                message: 'Los datos no son validos!!'
            });

        }

    }

};  // end controller

module.exports = controller;