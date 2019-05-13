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
  /* 用户 */
  router.get("/users", controller.user.index);
  router.post("/users", controller.user.addUser);
  router.post("/users/findOne", controller.user.findOne);
  router.put("/users", controller.user.updateUser);
  router.del("/users/:_id", controller.user.deleteUser);
  /* 角色 */
  router.get('/roles', controller.role.index);
  router.post('/roles', controller.role.add);
  router.post("/roles/findOne", controller.role.findOne);
  router.put('/roles', controller.role.update);
  router.del('/roles/:_id', controller.role.delete);
  /* 权限 */
  router.get('/access', controller.access.index);
  router.post('/access', controller.access.add);
  router.post("/access/findOne", controller.access.findOne);
  router.put('/access', controller.access.update);
  router.del('/access/:_id', controller.access.delete);


  router.get('/menu',controller.menu.index)
};
