/* eslint-disable comma-spacing */
/* eslint-disable space-infix-ops */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-const */
"use strict"

const Controller = require("egg").Controller

class RoleController extends Controller {
  async index() {
    let res = await this.service.role.find()
    this.ctx.body = res
  }
  async findOne() {
    let req = this.ctx.request.body;
    let res = await this.service.role.findOne(req)
    this.ctx.body = res
  }
  async add() {
    let req = this.ctx.request.body;
    let res = await this.service.role.add(req)
    this.ctx.body = res
  }

  async update() {
    let req = this.ctx.request.body
    let res = await this.service.role.update(req.id,req.data)
    this.ctx.body = res
  }

  async delete() {
    let req = this.ctx.params
    let res = await this.service.role.delete(req)
    this.ctx.body = res
  }
}

// eslint-disable-next-line eol-last
module.exports = RoleController
