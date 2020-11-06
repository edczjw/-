<template>
	<view class="content">  
		<!-- 头部 -->
		<u-navbar back-icon-color="white" :back-text-style="{color:'white'}" :is-back="false" :background="arrObject.background" title-color="white" back-text="返回" title="主页"></u-navbar> 
		<!-- 通知栏 -->
		<u-notice-bar mode="horizontal" type="success" :speed="100" :list="arrObject.noticeList"></u-notice-bar> 
		<!-- 轮播图 -->
		<!-- <view class="wrap"> 
			<u-swiper :list="arrObject.swiperList" :img-mode="widthFix" :height="320" :effect3d="true"></u-swiper>
		</view> -->
		<!-- 表单 -->
		<view class="form_box"> 
			<u-form :model="form" ref="uForm" :label-width="170">  
				<u-form-item label="家用金额/元" prop="payMoney">
					<u-input placeholder="请输入金额" input-align="right" maxlength="5" type="number" v-model="form.payMoney" />
				</u-form-item>
				<u-form-item label="汇款人员" prop="payName">
					<u-input placeholder="请选择" input-align="right" @click="payNameshow = true" v-model="form.payName" type="select" />
				</u-form-item>
				<u-action-sheet :list="arrObject.nameList" v-model="payNameshow" @click="nameListCallback"></u-action-sheet>
				<u-form-item label="收款人员" prop="colName">
					<u-input placeholder="请选择" input-align="right" @click="colNameshow = true" v-model="form.colName" type="select" />
				</u-form-item>
				<u-form-item label="汇款日期" prop="payDate">
					<u-input placeholder="请选择汇款日期" input-align="right" @click="showDate = true" v-model="form.payDate" type="select" />
					<u-calendar v-model="showDate" mode="date" @change="changeDate"></u-calendar>
				</u-form-item>
				<u-action-sheet :list="arrObject.colNamelist" v-model="colNameshow" @click="colNameListCallback"></u-action-sheet>
				<u-form-item label="用途" prop="other">
					<u-input placeholder="请选择" input-align="right" @click="othershow = true" v-model="form.other" type="select" />
				</u-form-item>
				<u-action-sheet :list="arrObject.otherList" v-model="othershow" @click="otherCallback"></u-action-sheet>
				<u-form-item label="支付方式" prop="payWay">
					<u-radio-group v-model="form.payWay" @change="radioGroupChange">
						<u-radio v-for="(item, index) in arrObject.checkboxList" :key="index" :name="item.name">
							{{ item.name }}
						</u-radio >
					</u-radio-group>
				</u-form-item>
				<u-form-item> 
					<u-button type="success" :ripple="true"  @click="submit">提交</u-button>
				</u-form-item>
			</u-form>
		</view>
	</view>
</template>

<script>  
	export default {
		data() {
			return {  
				showDate:false,//汇款日期
				form:{ 
					payName:"",//付款者
					colName:"",//收款者
					payMoney:null,//付款金额
					payWay:"微信",//支付方式
					payDate:"",//汇款日期
					other:"",//备注
				}, 
				colNameshow:false,//收款人员
				payNameshow:false,//付款者下拉列表显示
				othershow:false,//备注
				arrObject:null,
				rules:{}, 
			}
		},   
		onLoad() {
			this.arrObject = this.$arrObject
		}, 
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.$arrObject.rules);
		},
		methods:{ 
			//提交
			submit(){
				this.$refs.uForm.validate(valid => {
					if (valid) {  
						//使用封装好的request
						this.$request({ url: "/SaveHomeLoanData",data:this.form,method:"post" })
						  .then(res => {
							  if(res.code === "0000"){
								  uni.showToast({
								      title: res.msg,
								      duration: 2000,
									  icon:"success"
								  });
							  }else{ 
								  uni.showToast({
									  title: res.msg,
									  duration: 2000
								  });
							  }
						  })
					} else {
						console.log('验证失败');
					}
				});
			},
			// 点击actionSheet回调
			nameListCallback(index) { 
				this.form.payName = this.arrObject.nameList[index].text;
			},
			//收款人员回调
			colNameListCallback(index){ 
				this.form.colName = this.arrObject.colNamelist[index].text;
			},
			//付款日期
			changeDate(e) { 
				this.form.payDate = e.result;
			},
			//支付方式选择
			radioGroupChange(e){
				this.form.payWay = e;
			},
			//备注
			otherCallback(index){ 
				this.form.other = this.arrObject.otherList[index].text;
			}
		}
	}
</script>

<style scoped>
	.wrap {
		background-color: "#909399";
		padding: 40rpx; 
	}
	.form_box{
		padding: 20rpx 40rpx;
	}
</style>
