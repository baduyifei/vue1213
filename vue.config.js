/** @format */

const {defineConfig} = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	devServer: {
		open: true, // 启动服务器的时候,自动打开浏览器
	},
	lintOnSave: false, // 保存的时候,不使用 eslint 的风格校验
});
