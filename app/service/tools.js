/* eslint-disable object-shorthand */
/* eslint-disable prefer-const */
'use strict';

const sd = require('silly-datetime');
const mkdirp = require('mz-modules/mkdirp');
const path = require('path');

const Service = require('egg').Service;

class ToolsService extends Service {
  async getUploadFile(filename) {
    let day = sd.format(new Date(), 'YYYYMMDD');
    let dir = path.join(this.config.uploadDir, day);
    await mkdirp(dir);
    let d = await this.getTime(); // 获取时间戳
    let uploadDir = path.join(dir, d + path.extname(filename));
    return {
      uploadDir: uploadDir,
      saveDir: uploadDir.slice(3).replace(/\\/g, '/'),
    };
  }
  async getTime() {
    let d = new Date();
    return d.getTime();
  }
}

module.exports = ToolsService;
