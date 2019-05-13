/* eslint-disable comma-spacing */
/* eslint-disable space-infix-ops */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-const */
"use strict"

const Controller = require("egg").Controller

class UserController extends Controller {
  async index() {
    // let res = await this.service.user.findUser()
    let userList = await this.ctx.model.User.aggregate([
      {
        $lookup: {
          from: 'role',
          localField: 'role_id',
          foreignField: '_id',
          as: 'role'
        }
      }
    ]);
    this.ctx.body = userList
  }
  async findOne() {
    let req = this.ctx.request.body;
    let res = await this.service.user.findOne(req)
    this.ctx.body = res
  }
  async addUser() {
    let req = this.ctx.request.body;
    let res = await this.service.user.addUser(req)
    this.ctx.body = res
  }

  async updateUser() {
    let req = this.ctx.request.body
    let res = await this.service.user.updateUser(req.id, req.data)
    this.ctx.body = res
  }

  async deleteUser() {
    let req = this.ctx.params
    let res = await this.service.user.deleteUser(req)
    this.ctx.body = res
  }
}

// eslint-disable-next-line eol-last
module.exports = UserController
