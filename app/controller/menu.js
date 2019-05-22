/* eslint-disable object-shorthand */
/* eslint-disable prefer-const */
'use strict';

const Controller = require('egg').Controller;

class MenuController extends Controller {
  async index() {
    // 1、获取全部权限
    let accessAll = await this.service.access.findG();
    // 2、 获取当前角色拥有的权限 将acces_id放入数组
    let userinfo = this.ctx.state.userinfo;
    let role_id = userinfo.role_id;
    let accessResult = await this.service.roleAccess.find({ role_id: role_id });
    let accessArray = [];
    accessResult.forEach(value => {
      accessArray.push(value.access_id.toString());
    });
    for (let i = 0; i < accessAll.length; i++) {
      if (accessArray.includes(accessAll[i]._id.toString())) {
        accessAll[i].checked = true;
      }
      for (let j = 0; j < accessAll[i].children.length; j++) {
        if (accessArray.includes(accessAll[i].children[j]._id.toString())) {
          accessAll[i].children[j].checked = true;
        }
      }
    }
    this.ctx.body = accessAll;
  }
}

module.exports = MenuController;
