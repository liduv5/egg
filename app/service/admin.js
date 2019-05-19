'use strict';

const Service = require('egg').Service;
const url = require('url')

class AdminService extends Service {
  async checkAuth() {
    /* 1、获取当前用户的角色 */
    let userInfo = this.ctx.session.userInfo
    let role_id = userInfo.role_id
    /* 2、获取当前角色的权限列表 */
    let accessResult = await this.ctx.model.RoleAccess.find({"role_id":role_id})
    let accessArray = []
    accessResult.forEach((value)=>{
        accessArray.push(JSON.stringify(value.access_id))
    })
    /* 3、获取当前访问的url对应的权限id */
    let pathname = url.parse(this.ctx.request.url).pathname
    let accessUrlResult = await this.ctx.model.Access.find({url:pathname})
    // console.log(accessUrlResult)
    /* 4、判断当前访问的url对应的权限id 是否在权限列表中 */
    if (accessUrlResult) {
      let ac = accessArray.includes(JSON.stringify(accessUrlResult[0]._id))
      console.log('用户角色',role_id)
      console.log('对应角色的权限列表',accessArray)
      console.log('当前url对应的权限id',accessUrlResult[0]._id)
      console.log(ac)
      /* if (accessArray.indexOf(accessUrlResult[0]._id.toString()) != -1) {
        console.log('true')
    //     return true
      }else{
        console.log(accessArray)
        console.log(accessUrlResult[0]._id)
      } */
    }
    return true
  }
}

module.exports = AdminService;
