/* eslint-disable quotes */
/* eslint-disable comma-spacing */
/* eslint-disable prefer-const */
/* eslint-disable semi */
/*
 * @Author: name
 * @Date:   2019-04-30 10:45:47
 * @Last Modified by:   name
 * @Last Modified time: 2019-04-30 10:53:56
 */

'use strict';

const Service = require('egg').Service;
class UserService extends Service {
  async findOne(req, field) {
    let res = await this.ctx.model.User.findOne(req, field);
    return res;
  }

  async findUser() {
    let res = await this.ctx.model.User.find();
    return res;
  }

  async addUser(req) {
    try {
      let res = await new this.ctx.model.User(req).save();
      return { success: true, res }
    } catch (err) {
      return err
    }
  }
  async updateUser(id, data) {
    let res = await this.ctx.model.User.updateOne({ _id: id, }, data);
    return res;
  }

  async deleteUser(id) {
    let res = await this.ctx.model.User.deleteOne({
      _id: id,
    });
    return res;
  }
}

module.exports = UserService;
