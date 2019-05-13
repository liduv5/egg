'use strict';

const Controller = require('egg').Controller;

class MenuController extends Controller {
    async index() {
        const respData = [
            {'id':1,'title':"第一级1",'parentId':0,'role':'admin'},
                {'id':2,'title':"第二级1",'parentId':1,'role':'admin'},
                {'id':3,'title':"第二级2",'parentId':1,'role':'yiban'},
                    {'id':6,'title':"第三级1",'parentId':3},
                    {'id':7,'title':"第三级2",'parentId':3},
                {'id':4,'title':"第二级3",'parentId':1,'role':'admin'},
            {'id':5,'title':"第一级2",'parentId':0,'role':'admin'},
                {'id':10,'title':"第二级4",'parentId':5,'role':'yiban'},
                {'id':11,'title':"第二级5",'parentId':5,'role':'admin'},
            {'id':8,'title':"第一级3",'parentId':0,'role':'yiban'},
                {'id':12,'title':"第二级6",'parentId':8,'role':'yiban'},
            {'id':9,'title':"第一级4",'parentId':0,'role':'admin'}   
        ]
        const treeDta = this.convertToTreeDta(respData,0)
        this.ctx.body = treeDta
    }
    convertToTreeDta(data, pid) {
        const result = []
        let temp = []
        for(let i = 0;i<data.length; i++){
            if (data[i].parentId===pid) {
                if (data[i].role==='admin') {
                    const obj = {'title':data[i].title,'id':data[i].id,'role':data[i].role}
                temp = this.convertToTreeDta(data,data[i].id)
                if (temp.length>0) {
                    obj.children = temp
                }
                result.push(obj)
                }
                
            }
        }
        return result
    }
}

module.exports = MenuController;
