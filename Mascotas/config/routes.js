
module.exports.routes = {

  'get /': 'RutasController.home',
  'get /Inicio': 'RutasController.home',

  'get /ListarUsuarios': 'RutasController.listarUsuarios',
  'get /EditarUsuario': 'RutasController.editarUsuario',
  'get /CrearUsuario': 'RutasController.crearUsuario',

  'get /ListarRazas': 'RutasController.listarRazas',
  'get /EditarRaza': 'RutasController.editarRaza',
  'get /CrearRaza': 'RutasController.crearRaza',

  'get /ListarMascotas': 'RutasController.listarMascotas',
  'get /EditarMascota': 'RutasController.editarMascota',
  'get /CrearMascota': 'RutasController.crearMascota'

};
