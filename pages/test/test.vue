<template>
	<view class="test">
		测试页面
		<button type="default" @click="back">按钮</button>
	</view>
</template>

<script>
	export default {
		methods: {
			back() {
				this.$router.pop({ data: 3413123121 })
			}
		}
	}
</script>

<style lang="scss">
	.test {
		height: 100%;
		@include flex(column);
	}
</style>
