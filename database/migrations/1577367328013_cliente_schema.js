"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ClienteSchema extends Schema {
  up() {
    this.create("clientes", table => {
      table.increments();
      table.bigint("cpf_cnpj", 14).notNullable().unique();
      table.string("nome").notNullable();
      table.string("rua").notNullable();
      table.integer("numero").notNullable();
      table.string("bairro").notNullable();
      table.string("cidade").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("clientes");
  }
}

module.exports = ClienteSchema;
