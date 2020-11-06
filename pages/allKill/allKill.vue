<template>
	<view class="content"> 
		<!-- 头部 -->
		<u-navbar back-icon-color="white" :back-text-style="{color:'white'}" :is-back="false" :background="arrObject.background" title-color="white" back-text="返回" title="个人中心"></u-navbar> 
		<!-- 通知栏 -->
		<u-notice-bar mode="horizontal" type="success" :speed="100" :list="arrObject.noticeList"></u-notice-bar> 
		请耐心等待，其他功能正在开发...
	</view>
</template>

<script> 
	export default{
		data(){
			return{    
				arrObject:null,
			}
		},   
		onLoad() {
			this.arrObject = this.$arrObject
		}, 
	}
</script>

<style>
</style>
