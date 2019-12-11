"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TelefoneClienteSchema extends Schema {
  up() {
    this.create("telefone_clientes", table => {
      table.increments();
      table
        .integer("cliente_id")
        .notNullable()
        .references("id")
        .inTable("clientes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.integer("telefone", 11).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("telefone_clientes");
  }
}

module.exports = TelefoneClienteSchema;
