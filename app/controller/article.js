'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async index() {
    //let art = await this.ctx.service.article.get();
    //console.log(art);
    //aggregate聚合查询
    let art = await this.ctx.model.Article.aggregate([
      {
        $lookup: {
          from: 'articleCate',
          localField: 'cid',
          foreignField: '_id',
          as: 'cate'
        }
      },{
        $lookup: {
          from: 'user',
          localField: 'uid',
          foreignField: '_id',
          as: 'author'
        }
      }
    ]);
    this.ctx.body=art
    
  }
  async add() {
    await this.ctx.service.article.add({
      title: '第六篇文章',
      cid: '5cb05b1fb64afd2c6c23437c',
      uid: '5cb0041845790509946e66a4',
      content: '这是一篇文章，并且是第六篇文章，用于数据库测试。'
    });
  }
  async edit() {
    await this.ctx.service.article.edit({
      '_id': '5cb02ec5e59400541869a1c6'
    }, {
        uid: '5cb0041845790509946e66a4'
      });
  }
}

module.exports = ArticleController;
