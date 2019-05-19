/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1554105114269_6784';
  config.session = {
    key: 'SESSION_ID',
    maxAge: 8640000,
    httpOnly: true,
    encrypt: true,
    renew: true //  延长会话有效期
  };
  // add your middleware config here
  config.middleware = [ 'auth' ];

  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  //  recommended
  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/eggdb',
      options: { },
    },
  };
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ 'http://localhost:3000' ],
  };
  config.cors = {
    origin: 'http://localhost:3000',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials:true
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
