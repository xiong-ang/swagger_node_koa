const static = require('koa-static');
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();
const swaggerSpec = require('./swaggerSpec');

module.exports = {
    JsonMiddleware: async (ctx, next) => {
        if (ctx.url == '/swagger.json') {
            ctx.response.type = 'application/json';
            ctx.body = swaggerSpec;
        }
        await next();
    },
    UIMiddleware: static(pathToSwaggerUi)
};