<template> 
	<view class=""> 
		<!-- 头部 -->
		<u-navbar back-icon-color="white" :back-text-style="{color:'white'}" :is-back="false" :background="arrObject.background" title-color="white" back-text="返回" title="登录"></u-navbar> 
		<view class="LoginStyle"> 
			<button type="default" open-type="getUserInfo" @getuserinfo="handleGetUserInfo">登录</button>
		</view>
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
		methods:{
			handleGetUserInfo(e) {
			  //将用户数据存到缓存中
			  const {userInfo} = e.detail
			  uni.setStorageSync('userinfo', userInfo);
			  
			  //跳回上一个页面
			  uni.navigateBack({
			    delta: 1
			  });
			}
		}
	}
</script>

<style scoped lang="less">
	.LoginStyle{ 
		margin:0 auto; 
		padding: 100rpx;
	}
</style>
