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
  router.post('/users/access/addAccess', controller.access.add);
  router.post("/users/access/findOne", controller.access.findOne);
  router.put('/users/access/updateAccess', controller.access.update);
  router.del('/users/access/deleteAccess/:_id', controller.access.delete);


  router.get('/menu',controller.menu.index)
};
