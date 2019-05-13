'use strict';

const Controller = require('egg').Controller;

class ArticleCateController extends Controller {
  async index() {
      let cate = await this.ctx.service.articleCate.get();
      //console.log(art);
      await this.ctx.render('articleCate', {
        list: cate
      })
    }
  async add() {
    await this.ctx.service.articleCate.add({
      title: '分类三',
      fid: 0,
      desc: '这是第三个分类，用于数据库测试。'
    });
  }
}

module.exports = ArticleCateController;
