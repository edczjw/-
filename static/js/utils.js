export const arrObject={  
		background: { 
			backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
		}, 
		otherList:[
			{
				text: '日常开销'
			},
			{
				text: '零花费'
			},
			{
				text: '医药费'
			},
			{
				text: '家庭基金'
			}
		],
		rules: {
			payName: [
				{ 
					required: true, 
					message: '请选择本人姓名', 
					// 可以单个或者同时写两个触发验证方式 
					trigger: ['blur','change'],
				}
			],
			colName:[
				{ 
					required: true, 
					message: '请选择收款者姓名', 
					// 可以单个或者同时写两个触发验证方式 
					trigger: ['blur','change'],
				}
			],
			payMoney:[
				{ 
					required: true, 
					message: '请输入汇款金额', 
					// 可以单个或者同时写两个触发验证方式 
					trigger: ['blur'],
				},{
					// 自定义验证函数，见上说明
					validator: (rule, value, callback) => { 
						return value<200? false:true 
					},
					message: '汇款金额不能小于200',
					// 触发器可以同时用blur和change
					trigger: ['blur'],
				}
			],
			payWay:[
				{ 
					required: true, 
					message: '请选择支付方式', 
					// 可以单个或者同时写两个触发验证方式 
					trigger: ['blur','change'],
				}
			],
			payDate:[
				{ 
					required: true, 
					message: '请选择支付日期', 
					// 可以单个或者同时写两个触发验证方式 
					trigger: ['blur','change'],
				}
			],
			other:[
				{ 
					required: true, 
					message: '请输入备注', 
					// 可以单个或者同时写两个触发验证方式 
					trigger: ['change','blur'],
				}
			],
		},
		swiperList:[{
			image: '../../../static/Image/1.jpg',
			title: ' '
		},
		{
			image: '../../../static/Image/2.jpg',
			title: ' '
		},
		{
			image: '../../../static/Image/3.jpg',
			title: ' '
		},
		{
			image: '../../../static/Image/5.jpg',
			title: ' '
		},
		{
			image: 'http://b187.photo.store.qq.com/psb?/V10cje8S22lWwX/IcdaKc4OenompHk*gE9dHslrFx0iM0yz2JNDt4P2pb4!/b/dLsAAAAAAAAA&bo=VAg.BsAP0AsRB0A!&rf=viewer_4',
			title: ' '
		},
		{
			image: 'http://b47.photo.store.qq.com/psu?/8095b129-29c7-48c6-9346-8f7806e951ac/Q67RmIB3fblLZP3hiAumZaqjevTNZ.6x*JwoTrwBFaI!/b/YVdGCxyZggAAYgfeDxzuggAA&bo=ngL3AQAAAAABBEk!&rf=viewer_4',
			title: ' '
		}],
		noticeList: [
			'家是爱的聚合体',
			'试看天下之家',
			'皆为爱而聚',
			'无爱而散',
			'兄弟要齐心',
			'姐妹要关心',
			'儿女要孝心'
		],
		colNamelist:[
			{
				text: '父亲'
			},
			{
				text: '母亲'
			},
			{
				text: '奶奶'
			},
			{
				text: '家庭基金'
			}
		],
		nameList: [
			{
				text: '君芳'
			},
			{
				text: '君丽'
			},
			{
				text: '君兰'
			},
			{
				text: '君伟'
			}
		],
		checkboxList: [ 
			{
				name: '微信',
				checked: false,
				disabled: false
			},{
				name: '支付宝',
				checked: false,
				disabled: false
			},{
				name: '现金',
				checked: false,
				disabled: false
			}
		], 
}