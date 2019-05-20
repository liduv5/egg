/* eslint-disable arrow-parens */
/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable no-multi-spaces */
/* eslint-disable prefer-const */
/* eslint-disable semi */
'use strict';

const Service = require('egg').Service;
const url = require('url')

class AdminService extends Service {
  async checkAuth() {
    /* 1、获取当前用户的角色 */
    let userinfo = this.ctx.session.userinfo
    let role_id = userinfo.role_id
    let pathname = url.parse(this.ctx.request.url).pathname    // 获取当前访问的地址
    let ignoreUrl = ['/login', '/menu']
    if (ignoreUrl.includes(pathname) || userinfo.is_super === 1) {
      return true
    }
    /* 2、获取当前角色的权限列表 */
    let accessResult = await this.ctx.model.RoleAccess.find({ "role_id": role_id })
    let accessArray = []
    accessResult.forEach((value) => {
      accessArray.push(value.access_id.toString())
    })
    /* 3、获取当前访问的url对应的权限id */
    let accessUrlResult = await this.ctx.model.Access.find({ url: pathname })
    /* 4、判断当前访问的url对应的权限id 是否在权限列表中 */
    if (accessUrlResult.length > 0) {
      if (accessArray.includes(accessUrlResult[0]._id.toString())) {
        return true
      }
      return false
    }
    return false
  }
}

module.exports = AdminService;
