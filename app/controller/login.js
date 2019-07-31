'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
    async index() {
        const {
            ctx,
            service
        } = this;

        const userId = ctx.params.id;
        console.log(userId)
        ctx.body = {
            id: userId
        };
        ctx.status = 201;
    }
}

module.exports = LoginController;