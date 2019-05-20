'use strict';

const Controller = require('egg').Controller;

class MenuController extends Controller {
    async index() {
        /* const respData = [
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
        ] */
        let userinfo = this.ctx.state.userinfo
        let role_id = userinfo.role_id
        /* 2、获取当前角色的权限列表 */
        let accessResult = await this.ctx.model.RoleAccess.find({ "role_id": role_id })
        let accessArray = []
        accessResult.forEach((value) => {
            accessArray.push(JSON.stringify(value.access_id))
        })
        
        let accessAll = await this.ctx.service.access.find()
        // let arr = accessResult.filter(item => item._id === `5cd9948ad3f017100430810f`)
        let respData = accessAll.filter(value => accessArray.some(ele=>ele === JSON.stringify(value._id.toString())))
        const treeDta = this.convertToTreeDta(respData,'0')
       
        this.ctx.body = treeDta
    }
    convertToTreeDta(data, pid) {
        const result = []
        let temp = []
        for(let i = 0;i<data.length; i++){
            if (data[i].module_id === pid) {
                const obj = {'action_name':data[i].action_name,'url':data[i].url,'module_id':data[i].module_id}
                temp = this.convertToTreeDta(data,data[i]._id)
               
                if (temp.length>0) {
                    obj.children = temp
                }
                result.push(obj)
             
                
            }
        }
        return result
    }
}

module.exports = MenuController;
