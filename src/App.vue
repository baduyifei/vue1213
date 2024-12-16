<!-- @format -->

<template>
	<div>
		<h1>v-bind</h1>
		<!-- <a :href="msg">百度</a> -->
		<a v-bind:href="msg">{{ msg }}</a>
		<p>商品数量: {{ num }}</p>
		<button v-on:click="num++">+1</button>
		<button v-on:click="add">+2</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'www.baidu.com',
				num: 10,
			};
		},
		// 函数  method:方法
		methods: {
			add() {
				//
				// 函数内部：
				//   this指向：vue项目 .vue文件 组件文件！this：为当前组件！
				//   this上面  有初始化 变量名：值
				// num += 2; // 报错:  num is not defined
				this.num += 2;
			},
		},
	};
</script>

<style></style>
