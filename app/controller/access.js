/* eslint-disable linebreak-style */
/* eslint-disable space-infix-ops */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
'use strict';

const Controller = require('egg').Controller;

class AccessController extends Controller {
  async index() {
    let res = await this.service.access.findG()
    this.ctx.body = res
  }
  // 非聚合查询
  async find() {
    let res = await this.service.access.find()
    this.ctx.body = res
  }
  async findOne() {
    let req = this.ctx.request.body;
    let res = await this.service.access.findOne(req)
    this.ctx.body = res
  }
  async add() {
    let req = this.ctx.request.body;
    let module_id = req.module_id
    if (module_id !== '0') { req.module_id = this.app.mongoose.Types.ObjectId(module_id) }
    let res = await this.service.access.add(req)
    this.ctx.body = res
  }
  
  async update() {
    let req = this.ctx.request.body
    let res = await this.service.access.update(req.id, req.data)
    this.ctx.body = res
  }

  async delete() {
    let req = this.ctx.params
    let res = await this.service.access.delete(req)
    this.ctx.body = res
  }
}

module.exports = AccessController;
