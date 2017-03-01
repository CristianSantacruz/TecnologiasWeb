/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  Home: function (req, res) {
    // res.view(String: Nombre vista, Datos JSON)
    return res.view('Vistas/Home', {
      title: 'Inicio',
      numero: 1,
      cristian: {
        nombre: 'Cristian',
        cedula: 1723659403
      },
      usuarios: []
    })
  },

  /********************************************************************/

  CrearUsuario: function (req, res) {
    return res.view('Vistas/Usuario/CrearUsuario', {
      title: 'Crear Usuarios'
    })
  },

  /********************************************************************/

  EditarUsuario: function (req, res) {

    var parametros = req.allParams();
    console.log(parametros);
    if (parametros.id) {

      Usuario.findOne({
        id: parametros.id
      }).exec(function (error, usuarioEncontrado) {
        if (error) return res.serverError();
        return res.view('Vistas/Usuario/EditarUsuario', {
          title: 'Editar Usuario - ' + usuarioEncontrado.apellidos,
          usuario: usuarioEncontrado
        })
      });

    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'No existe el ID'
        }
      });
    }
  },

  /********************************************************************/

  ListarUsuarios: function (req, res) {

    Usuario.find().exec(function (error, usuariosEncontrados) {
      if (error) return res.serverError()
      sails.log.info(usuariosEncontrados);
      return res.view('Vistas/Usuario/ListarUsuarios', {
        title: 'Lista de Usuarios',
        usuarios: usuariosEncontrados
      })
    });
  },

  /********************************************************************/

  CrearRaza: function (req, res) {

    return res.view('Vistas/Raza/CrearRaza', {
      title: 'Crear Raza'
    })
  },

  /********************************************************************/

  EditarRaza: function (req, res) {

    var parametros = req.allParams();
    console.log(parametros);
    if (parametros.id) {

      Raza.findOne({
        id: parametros.id
      }).exec(function (error, razaEncontrada) {
        if (error) return res.serverError()
        return res.view('Vistas/Raza/EditarRaza', {
          title: 'Editar raza - ' + razaEncontrada.nombre,
          raza: razaEncontrada
        })
      });

    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'No existe el ID'
        }
      });
    }
  },

  /********************************************************************/

  ListarRazas: function (req, res) {

    Raza.find().exec(function (error, razasEncontrados) {
      if (error) return res.serverError();
      return res.view('Vistas/Raza/ListarRazas', {
        title: 'Lista de Razas',
        razas: razasEncontrados
      })
    });
  },

  /********************************************************************/

  CrearMascota: function (req, res) {
    Raza.find().exec(function (error, razasEncontrados) {
      if (error) return res.serverError();
      return res.view('Vistas/Mascota/CrearMascota', {
        title: 'Crear Mascota',
        razas: razasEncontrados
      });
    });
  },

  /********************************************************************/

  EditarMascota: function (req, res) {

    var parametros = req.allParams();
    console.log(parametros);
    if (parametros.id) {

      Mascota.findOne({
        id: parametros.id
      }).exec(function (error, mascotaEncontrada) {
        if (error) return res.serverError()
        return res.view('Vistas/Mascota/EditarMascota', {
          title: 'Editar mascota- ' + mascotaEncontrada.nombre,
          mascota: mascotaEncontrada
        })
      });

    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'No existe el ID'
        }
      });
    }
  },

  /********************************************************************/

  ListarMascotas: function (req, res) {

    Mascota.find().populate("idRaza").exec(function (error, mascotasEncontrados) {
      if (error) return res.serverError();
      return res.view('Vistas/Mascota/ListarMascotas', {
        title: 'Lista de Mascotas',
        mascotas: mascotasEncontrados
      })
    });
  }

};

