/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multi-spaces */
/* eslint-disable prefer-const */
'use strict';

const fs = require('fs');
const pump = require('mz-modules/pump');

const Controller = require('egg').Controller;

class FocusController extends Controller {
  async index() {
    let res = await this.ctx.model.Focus.find();
    this.ctx.body = res;
  }
  async addFocus() {
    const parts = this.ctx.multipart({ autoFields: true });

    let files = {};
    let stream;
    while ((stream = await parts()) != null) {
      if (!stream.filename) {            // 注意如果没有传入图片直接返回   
        break;
      }

      let fieldname = stream.fieldname;  // file表单的名字  focus_img

      // 上传图片的目录
      let dir = await this.service.tools.getUploadFile(stream.filename);
      let target = dir.uploadDir;
      let writeStream = fs.createWriteStream(target);

      await pump(stream, writeStream);

      files = Object.assign(files, {
        [fieldname]: dir.saveDir,
      });
    }
    let focus = new this.ctx.model.Focus(Object.assign(files, parts.field));
    let res = await focus.save();
    this.ctx.body = res;
  }
}
module.exports = FocusController;
