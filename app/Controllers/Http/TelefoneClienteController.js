"use strict";

const Telefone = use("App/Models/TelefoneCliente");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with telefoneclientes
 */
class TelefoneClienteController {
  /**
   * Show a list of all telefoneclientes.
   * GET telefoneclientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const telefones = await Telefone.query().with("cliente").fetch();
    return telefones;
  }

  /**
   * Create/save a new telefonecliente.
   * POST telefoneclientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only(["cliente_id","telefone"]);
    const telefone = await Telefone.create({ ...data });

    return telefone;
  }

  /**
   * Display a single telefonecliente.
   * GET telefoneclientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const telefone = await Telefone.findOrFail(params.id);
    return telefone;
  }

  /**
   * Update telefonecliente details.
   * PUT or PATCH telefoneclientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a telefonecliente with id.
   * DELETE telefoneclientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const telefone = await Telefone.findOrFail(params.id);
    await telefone.delete();
  }
}

module.exports = TelefoneClienteController;
