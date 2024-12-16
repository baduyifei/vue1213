<!-- @format -->

<template>
	<div>
		<h1>v-bind</h1>
		<a :href="msg">百度</a>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'www.baidu.com',
			};
		},
	};
</script>

<style></style>
