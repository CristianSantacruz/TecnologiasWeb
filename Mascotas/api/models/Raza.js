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
      enum: ['Coker', 'Pitbull', 'Pastor Aleman', 'Labrador'],
      required: true,
      unique: true
    },
    tamanio: {
      type: 'string',
      enum: ['Pequeño', 'Mediano', 'Grande'],
      required: true
    },

    mascotas: {

      collection: 'Mascota',

      via: 'idRaza'
    }

  }
};

