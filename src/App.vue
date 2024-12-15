<!-- @format -->
<!--  html 代码  -->
<template>
	<div id="app">
		<!-- <h1>你好 VUE</h1>
		<img alt="Vue logo" src="./assets/logo.png" /> -->
		<div>{{ obj }}</div>
		<div>{{ obj.name }}</div>
		<div>{{ obj.age }}</div>
	</div>
</template>
<!-- js 代码 -->
<script>
	export default {
		data() {
			return {
				// money: 100,
				// zs: 'zs11111',
				obj: {
					name: 'zhangsan',
					age: 13,
				},
			};
		},
	};
</script>
<!-- css 代码: css less scss -->
<style lang="less">
	#app {
		background-color: pink;
		h1 {
			color: green;
		}
	}
</style>
