/**
 * Raza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {
      type: 'string',
      enum: ['Coker', 'Pastor Aleman', 'Labrador'],
      required: true,
      unique: true
    },
    tamanio: {
      type: 'string',
      required: true
    },

    mascotas: {
      collection: 'Mascota',
      via: 'idRaza'
    }
  }
};
