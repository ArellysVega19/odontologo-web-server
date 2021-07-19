const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const { inicio, fin, apikey = 'Lego' } = req.query;

    res.json({
        msg: 'Controller GET-API',
        inicio,
        fin,
        apikey
    });
}
const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'Controller POST-API',
        nombre,
        edad
    });

}
const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'Controller PUT-API',
        id
    });
}
const usuariosDelete = (req, res = response) => {

    res.json({
        msg: 'Controller DELETE-API'
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}