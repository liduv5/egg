/* eslint-disable quotes */
"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  /* 登录 */
  router.post("/login", controller.login.index);
  router.post("/logout", controller.login.logout);
  router.get("/islogin", controller.login.islogin);
  /* 用户 */
  router.get("/users", controller.user.index);
  router.post("/users/addUser", controller.user.addUser);
  router.post("/users/findOne", controller.user.findOne);
  router.put("/users/updateUser", controller.user.updateUser);
  router.del("/users/deleteUser/:_id", controller.user.deleteUser);
  /* 角色 */
  router.get('/users/roles', controller.role.index);
  router.post('/users/roles/addRole', controller.role.add);
  router.post("/users/roles/findOne", controller.role.findOne);
  router.put('/users/roles/updateRole', controller.role.update);
  router.del('/users/roles/deleteRole/:_id', controller.role.delete);
  router.post('/users/roles/auth', controller.role.auth);
  router.post('/users/roles/getAuth', controller.role.getAuth);
  /* 权限 */
  router.get('/users/access', controller.access.index);
  router.get('/users/access/find', controller.access.find);
  router.post('/users/access/addAccess', controller.access.add);
  router.post("/users/access/findOne", controller.access.findOne);
  router.put('/users/access/updateAccess', controller.access.update);
  router.del('/users/access/deleteAccess/:_id', controller.access.delete);
  /* 获取菜单 */
  router.get('/menu', controller.menu.index);
  /* 上传图片 */
  router.get('/focus', controller.focus.index);
  router.post('/focus/addFocus', controller.focus.addFocus);
  router.post("/focus/findOne", controller.focus.findOne);
  router.put("/focus/updateFocus", controller.focus.updateFocus);
  router.del('/focus/deleteFocus/:_id', controller.focus.delete);
  router.post('/focus/deleteImage', controller.focus.deleteImage);

};
