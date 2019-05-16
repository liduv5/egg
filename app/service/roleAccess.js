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
class RoleAccessService extends Service {
  async find(req) {
    return await this.ctx.model.RoleAccess.find(req, function (err, docs) {
      return docs
    });

  }
  async add(req) {
    let role_id = req.role_id
    let access_id = req.access_id
    await this.ctx.model.RoleAccess.deleteMany({ "role_id": role_id });
    try {
      for (let i = 0; i < access_id.length; i++) {
        var res = await new this.ctx.model.RoleAccess({
          role_id: role_id,
          access_id: access_id[i]
        }).save();
      }
      return { success: true, res }
    } catch (err) {
      return err
    }

  }

}

module.exports = RoleAccessService;
