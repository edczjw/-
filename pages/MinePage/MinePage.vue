<template>
	<view class="">
		<!-- 头部 -->
		<u-navbar back-icon-color="white" :back-text-style="{color:'white'}" :is-back="false" :background="arrObject.background" title-color="white" back-text="返回" title="个人中心"></u-navbar>  
		<view class="user_Wrapper"> 
			<u-avatar :src="src" :show-sex="true" :show-level="true" ></u-avatar>
			<text class="user_name">{{userName}}</text>
		</view>
		<view class="login_user" v-if="!userName">
			<navigator class="" url="../login/login" open-type="navigate">
				<button type="success">点击登录</button>
			</navigator>
		</view>
		<view class="user_menu" v-else>
			<u-cell-group>
				<u-cell-item @click="changeCell" icon="zhifubao" title="汇款记录"></u-cell-item>
				<u-cell-item @click="changeCell" icon="setting-fill" title="个人设置"></u-cell-item>
				<u-cell-item @click="changeCell" icon="server-fill" title="用户反馈"></u-cell-item>
				<u-cell-item @click="changeCell" icon="chat" title="当前版本" value="1.0"></u-cell-item>
			</u-cell-group>
		</view>
		
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default{
		data(){
			return{
				userName:null,//用户名
				src:"",
				arrObject:null,
			}
		},   
		onLoad() {
			this.arrObject = this.$arrObject
		}, 
		methods:{
			changeCell(){
				this.$refs.uToast.show({
					title: '正在努力开发中...'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.user_Wrapper{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background-color: #eee;
		opacity: .6;
		padding: 130rpx;
		.user_name{
			
		}
	}
	.login_user{
		margin:0 auto; 
		padding: 100rpx;
	}
</style>
