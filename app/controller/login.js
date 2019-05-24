/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
"use strict";
const Controller = require("egg").Controller;
class LoginController extends Controller {
  async index() {
    let req = this.ctx.request.body;
    let res = await this.service.user.findOne(req, { password: 0 });
    this.ctx.session.userinfo = null;
    this.ctx.session.userinfo = res;
    this.ctx.body = res;
  }
  async logout() {
    let req = this.ctx.request.body;
    if (req.nuxtLogout) {
      this.ctx.session.userinfo = null;
    }
    this.ctx.body = 'ok';
  }
  async islogin(){
    this.ctx.body = this.ctx.session.userinfo
  }
}

module.exports = LoginController;
