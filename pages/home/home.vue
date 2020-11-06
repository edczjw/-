<template>
	<view class="content"> 
		<!-- 头部 -->
		<u-navbar back-icon-color="white" :back-text-style="{color:'white'}" :is-back="false" :background="arrObject.background" title-color="white" back-text="返回" title="家用宝"></u-navbar> 
		<!-- 通知栏 -->
		<u-notice-bar mode="horizontal" type="success" :speed="100" :list="arrObject.noticeList"></u-notice-bar> 
	</view>
</template>

<script> 
	export default{
		data(){
			return{    
				arrObject:{}
			}
		},  
		onLoad() {
			this.arrObject = this.$arrObject
		},
		methods:{
			change(index){
				this.current = index
			}
		}
	}
</script>

<style scoped>
</style>
