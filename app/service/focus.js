/* eslint-disable prefer-const */
'use strict';

const Service = require('egg').Service;

class FocusService extends Service {
  async findOne(req, field) {
    let res = await this.ctx.model.Focus.findOne(req, field);
    return res;
  }
  async delete(id) {
    let res = await this.ctx.model.Focus.deleteOne({
      _id: id,
    });
    return res;
  }
}

module.exports = FocusService;
