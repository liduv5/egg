'use strict';

const Service = require('egg').Service;

class ArticleCateService extends Service {
    async get() {
        return this.ctx.model.ArticleCate.find({});
    }
    async add(data) {
        let result = new this.ctx.model.ArticleCate(data)
        return result.save((err,doc)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(doc)
        });
    }
}

module.exports = ArticleCateService;
