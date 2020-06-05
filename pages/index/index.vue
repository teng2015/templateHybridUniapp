<template>
	<view class="index">
		<button type="default" @click="toTest">按钮</button>
	</view>
</template>

<script>
	import { _API_Index } from '@/apis/index.js'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			this.$request(_API_Index(), data => console.log(data))
		},
		methods: {
			toTest() {
				this.$router.pushPop('/test').then(res => console.log(res))
			}
		}
	}
</script>

<style lang="scss" scoped>
	.index {
		height: 100%;
		@include flex();
	}
</style>
