'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
    async get() {
        return this.ctx.model.Article.find({});
    }
    async add(data) {
        let result = new this.ctx.model.Article(data)
        return result.save((err,doc)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(doc)
        });
    }
    async edit(res,data) {
        return this.ctx.model.Article.updateOne(res,data,(err,doc)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(doc)
        })
    }
}

module.exports = ArticleService;
