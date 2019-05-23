/* eslint-disable quotes */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
'use strict';
const url = require('url');

module.exports = (option, app) => {
  return async function auth(ctx, next) {
    // 设置模板全局变量
    ctx.state.csrf = ctx.csrf;
    let pathname = url.parse(ctx.request.url).pathname;
    if (ctx.session.userinfo) {
      ctx.state.userinfo = ctx.session.userinfo;
      let hasAuth = await ctx.service.admin.checkAuth();
      if (hasAuth) {
        await next();
      } else {
        ctx.status = 401;
        ctx.body = "您没有访问权限！";
      }
    } else {
      if (pathname === "/login") {
        await next();
      } else {
        return false;
      }
    }
  };
};
