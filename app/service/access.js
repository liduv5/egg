/* eslint-disable quote-props */
/* eslint-disable no-empty */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
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
  async find() {
    let res = await this.ctx.model.Access.find();
    return res;
  }
  async findG() {
    let res = await this.ctx.model.Access.aggregate([
      {
        $lookup: {
          from: 'access',
          localField: '_id',
          foreignField: 'module_id',
          as: 'children'
        }
      },
      {
        $match: { module_id: '0' }
      }
    ]);
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
    if (data.module_id !== 0 && data.module_id !== '0') {
      data.module_id = this.app.mongoose.Types.ObjectId(data.module_id)
    } else {
      data.module_id = '0'
    }
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
