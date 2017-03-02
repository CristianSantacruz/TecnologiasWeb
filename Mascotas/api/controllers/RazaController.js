/**
 * RazaController
 *
 * @description :: Server-side logic for managing Razas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  crearRaza: function (req, res) {
    var parametros = req.allParams();

    if (req.method == 'POST') {
      if (parametros.nombre && parametros.peso) {
        Raza.create({
          nombre: parametros.nombre,
          peso: parametros.peso
        }).exec(function (error, razaCreada) {
          if (error) return res.view('error', {
            title: 'Error',
            error: {
              descripcion: 'No se creo la raza, inténtalo de nuevo: ' + error,
              url: '/CrearRaza'
            }
          });
          Raza.find().exec(function (error, razasEncontrados) {
            if (error) return res.serverError();
            sails.log.info(razasEncontrados);
            return res.view('Vistas/Raza/ListarRazas', {
              title: 'Lista de Razas',
              razas: razasEncontrados
            })
          });
        });
      } else {
        // bad Request
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envia todos los parametros',
            url: '/CrearRaza'
          }
        });
      }
    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          url: '/CrearRaza'
        }
      });
    }

  },
  editarRaza: function (req, res) {

    var parametros = req.allParams();
    if (req.method == 'POST') {
      if (parametros.id) {
        Raza.update({
          id: parametros.id
        }, {
          peso: parametros.peso
        }).exec(function (error) {
          if (error) {
            return res.view('error', {
              title: 'Error',
              error: {
                descripcion: 'No se edito la raza: ' + error,
                url: '/ListarRazas'
              }
            });
          }

          Raza.find().exec(function (error, razasEncontradas) {
            if (error) return res.serverError();
            return res.view('Vistas/Raza/ListarRazas', {
              title: 'Lista de Razas',
              razas: razasEncontradas
            })
          });

        });

      } else {
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envía todos los parametros',
            url: '/EditarRaza'
          }
        });
      }
    } else {
      console.log('POST');
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el método HTTP',
          url: '/EditarRaza'
        }
      });
    }

  },
  borrarRaza: function (req, res) {
    var parametros = req.allParams();

    if (parametros.id) {

      Raza.destroy({
        id: parametros.id
      }).exec(function (errorInesperado, razaEliminada) {
        if (errorInesperado) {
          return res.view('vistas/Error', {
            error: {
              descripcion: "Tuvimos un Error Inesperado",
              rawError: errorInesperado,
              url: "/ListarRazas"
            }
          });
        }
        Raza.find()
          .exec(function (errorIndefinido, razasEncontradas) {

            if (errorIndefinido) {
              res.view('vistas/Error', {
                error: {
                  descripcion: "No se cargo las razas",
                  rawError: errorIndefinido,
                  url: "/ListarRazas"
                }
              });
            }
            res.view('Vistas/Raza/ListarRazas', {
              razas: razasEncontradas
            });
          })
      })

    } else {
      return res.view('vistas/Error', {
        error: {
          descripcion: "Ingrese el ID para borrar la raza",
          rawError: "No envía ID",
          url: "/ListarRazas"
        }
      });
    }
  }
};
