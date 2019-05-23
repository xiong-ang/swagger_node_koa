const Koa = require('koa');
const appConfig = require('./config/app.config');
const app = new Koa();

//Set swagger
if(!appConfig.isProd){
    const swagger = require('./swagger/swagger');
    app
    .use(swagger.JsonMiddleware)
    .use(swagger.UIMiddleware)
}

//Set router
const router = require('./router');
app
    .use(router.routes())
    .listen(appConfig.port);

console.log(`Running at http://localhost:${appConfig.port}`);