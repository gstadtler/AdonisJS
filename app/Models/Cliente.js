"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Cliente extends Model {
  telefone() {
    return this.hasMany("App/Models/TelefoneCliente");
  }
}

module.exports = Cliente;
