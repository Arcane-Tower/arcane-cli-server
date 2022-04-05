'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // await ctx.model.User.create({name: '123'})
	  ctx.body = 'hi body';
  }
	
	async getProjectTemplate() {
		const { ctx } = this;
		ctx.body = await ctx.model.Project.find({});
	}
}

module.exports = HomeController;
