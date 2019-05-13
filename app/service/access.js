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
class AccessService extends Service {
  async findOne(req, field) {
    let res = await this.ctx.model.Access.findOne(req, field);
    return res;
  }

  async find(req) {
    let res = await this.ctx.model.Access.find(req);
    return res;
  }

  async add(req) {
    try {
      let res = await new this.ctx.model.Access(req).save();
      return { success: true, res }
    } catch (err) {
      return err
    }
  }
  async update(id, data) {
    let res = await this.ctx.model.Access.updateOne({ _id: id, }, data);
    return res;
  }

  async delete(id) {
    let res = await this.ctx.model.Access.deleteOne({
      _id: id,
    });
    return res;
  }
}

module.exports = AccessService;
