const url = require('url')

module.exports=(option,app)=>{
    return async function auth(ctx,next){
        // 设置模板全局变量
        ctx.state.csrf = ctx.csrf;
        let pathname = url.parse(ctx.request.url).pathname
        /* let name = ctx.cookies.get("userInfo", { httpOnly: false, signed: false });
        if (name) {
            console.log('cookie',name)
        } else {
            console.log('cookie','no')
        } */
        
        await next()
        
        // await ctx.service.admin.checkAuth()
        
    }
}