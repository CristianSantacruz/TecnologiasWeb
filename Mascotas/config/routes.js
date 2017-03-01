module.exports.routes = {

  'get /': 'RutasController.Home',
  'get /Inicio': 'RutasController.Home',

  'get /CrearUsuario': 'RutasController.CrearUsuario',
  'get /EditarUsuario': 'RutasController.EditarUsuario',
  'get /ListarUsuarios': 'RutasController.ListarUsuarios',

  'get /CrearRaza': 'RutasController.CrearRaza',
  'get /EditarRaza': 'RutasController.EditarRaza',
  'get /ListarRazas': 'RutasController.ListarRazas',

  'get /CrearMascota': 'RutasController.CrearMascota',
  'get /EditarMascota': 'RutasController.EditarMascota',
  'get /ListarMascotas': 'RutasController.ListarMascotas'

};
