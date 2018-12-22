var ut = {};
ut.url = 'https://mdapi.vertxjava.com/api/v1/client/';
ut.formatTime = function(data) {
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	return minute + '分' + second + '秒';
}
ut.formatNumber = function(n) {
	n = n.toString()
	return n[1] ? n : '0' + n
};
//格式化时间
ut.time = function(timestamp) {
	var date = new Date(timestamp * 1000), //时间戳为10位需*1000，时间戳为13位的话不需乘1000
		Y = date.getFullYear() + '-',
		M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-',
		D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
		h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() + ' :',
		m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
	return Y + M + D + " " + h + m;
};
//提示
ut.totast=function(title){
	wx.showToast({
		title: title,
		icon: 'none',
		color: 'red',
		duration: 2000
	})
}
//
ut.createRandom = function(num, min, max) {
	let arr = [],
		res = [],
		newArr;
	for(let i = min; i < max; i++) {
		arr.push(i);
	}
	newArr = Object.assign([], arr);

	for(let item = 0; item < arr.length; item++) {
		res.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
	}
	res.length = num;
	return res;
}
ut.request=function(parm){
	return new Promise(function(success,fail){
		wx.request({
			url: ut.url + parm.url,
			data: parm.data,
			method: parm.method || 'post',
			header: {
				'content-type': 'application/json'
			},
			success: function(res) {
				wx.hideLoading({
					complete: function() {
						if(res.data.code == 0) {
							success(res.data)
						} else {
							wx.showToast({
								title: res.data.msg,
								icon: 'none',
								color: 'red',
								duration: 2000
							})
						}
					}
				});
			},
			fail: function() {
				fail();
				wx.showToast({
					title: '连接超时',
					icon: 'none',
					color: 'red',
					duration: 2000
				});
			}
		});
	})
};
//请求
ut.ajax = function(parm) {
	if(parm.loadinghide) {
		ut.request(parm);
	} else {
		wx.showLoading({
			title: '正在加载。。',
			complete: function() {
				ut.request(parm);
			}
		})
	}
}

ut.login = function(callback) {
	//调用登录接口
	wx.login({
		success: function(data) {
			console.log(data)
			wx.getUserInfo({
				success: function(res) {
					//获取用户标识
					ut.ajax({
						url: 'thirdParty/register',
						data: {
							js_code: data.code,
							nickName: res.userInfo.nickName,
							avatarUrl: res.userInfo.avatarUrl
						},
						method: 'get',
						success: function(data) {
							wx.setStorageSync('uid', data.id);
							wx.setStorageSync('userInfo', data.inf);
							if(callback) callback();
						}
					});
				}
			});

			//  
		}
	});
}
ut.setstarimg = function(name) {
	if(name == '白羊座') return 0;
	if(name == '金牛座') return 1;
	if(name == '双子座') return 2;
	if(name == '巨蟹座') return 3;
	if(name == '狮子座') return 4;
	if(name == '处女座') return 5;
	if(name == '天秤座') return 6;
	if(name == '天蝎座') return 7;
	if(name == '射手座') return 8;
	if(name == '摩羯座') return 9;
	if(name == '水瓶座') return 10;
	if(name == '双鱼座') return 11;
	return 11;
}
ut.starList = [{
		name: '白羊座',
		img: '/static/img/star_0.png',
		time: '3.21-4.19'
	},
	{
		name: '金牛座',
		img: '/static/img/star_1.png',
		time: '4.20-5.20'
	},
	{
		name: '双子座',
		img: '/static/img/star_2.png',
		time: '5.21-6.21'
	},
	{
		name: '巨蟹座',
		img: '/static/img/star_3.png',
		time: '6.22-7.22'
	},
	{
		name: '狮子座',
		img: '/static/img/star_4.png',
		time: '7.23-8.22'
	},
	{
		name: '处女座',
		img: '/static/img/star_5.png',
		time: '8.23-9.22'
	},
	{
		name: '天秤座',
		img: '/static/img/star_6.png',
		time: '9.23-10.23'
	},
	{
		name: '天蝎座',
		img: '/static/img/star_7.png',
		time: '10.24-11.22'
	},
	{
		name: '射手座',
		img: '/static/img/star_8.png',
		time: '11.23-12.21'
	},
	{
		name: '摩羯座',
		img: '/static/img/star_9.png',
		time: '12.22-1.19'
	},
	{
		name: '水瓶座',
		img: '/static/img/star_10.png',
		time: '1.20-2.18'
	},
	{
		name: '双鱼座',
		img: '/static/img/star_11.png',
		time: '2.19-3.20'
	}
];
//对选项进行处理
ut.dataToArr = function(data) {
	var dataArr = [];
	if(data.A) dataArr[0] = {
		option: data.A,
		answer: data.A1,
		type: 'A'
	};
	if(data.B) dataArr[1] = {
		option: data.B,
		answer: data.B1,
		type: 'B'
	};
	if(data.C) dataArr[2] = {
		option: data.C,
		answer: data.C1,
		type: 'C'
	};
	if(data.D) dataArr[3] = {
		option: data.D,
		answer: data.D1,
		type: 'D'
	};
	if(data.E) dataArr[4] = {
		option: data.E,
		answer: data.E1,
		type: 'E'
	};
	if(data.F) dataArr[5] = {
		option: data.F,
		answer: data.F1,
		type: 'F'
	};
	if(data.G) dataArr[6] = {
		option: data.G,
		answer: data.G1,
		type: 'G'
	};
	if(data.H) dataArr[7] = {
		option: data.H,
		answer: data.H1,
		type: 'H'
	};
	if(data.I) dataArr[8] = {
		option: data.I,
		answer: data.I1,
		type: 'I'
	};
	if(data.J) dataArr[9] = {
		option: data.J,
		answer: data.J1,
		type: 'J'
	};
	if(data.K) dataArr[10] = {
		option: data.K,
		answer: data.K1,
		type: 'K'
	};
	if(data.L) dataArr[8] = {
		option: data.L,
		answer: data.L1,
		type: 'L'
	};
	if(data.M) dataArr[9] = {
		option: data.M,
		answer: data.M1,
		type: 'M'
	};
	if(data.N) dataArr[10] = {
		option: data.N,
		answer: data.N1,
		type: 'N'
	};
	return dataArr;
}
//canvas绘制文字
ut.drawtext = function(str, ctx, initHeight) {
	ctx.fillStyle = "black";
	ctx.setFontSize(14);
	var lineWidth = 0; //绘制字体距离canvas顶部初始的高度
	var lastSubStrIndex = 0; //每次开始截取的字符串的索引
	for(let i = 0; i < str.length; i++) {
		lineWidth += ctx.measureText(str[i]).width;
		if(initHeight == 240 && lineWidth >= 190) {
			ctx.fillText(str.substring(lastSubStrIndex, i) + '...', 40, initHeight, 220);
			return;
		}
		if(lineWidth >= 220) {
			ctx.fillText(str.substring(lastSubStrIndex, i), 40, initHeight, 220); //绘制截取部分
			initHeight += 30; //20为字体的高度
			lineWidth = 0;
			lastSubStrIndex = i;
		}
		if(i == str.length - 1) { //绘制剩余部分
			ctx.fillText(str.substring(lastSubStrIndex, i + 1), 40, initHeight, 220);
			initHeight += 30; //20为字体的高度
		}
	}
}
ut.love=[
	'双方各自存活又互相依靠，朝着同一个目标各自为伍，彼此都在变得更好的路上。',
	'你需要主动一点，让他知道你喜欢他，然后你再看看怎么走下一步吧。',
	'遇见一见钟情的对象的几率比较少，更深入的交往才有望进一步发展',
	'容易在职场中结识有才华的异性',
	'爱情比较一般，平顺没有波折。',
	'不容易理清自己的感觉，时常有迷茫感，隐秘的情感趁机潜入。',
	'感情因了解而不断加深',
	'单身适合旅行，旅途中有机会邂逅不错的对象',
	'彼此间少了心灵的交流，在一些意见的争论上容易出现小状况。',
	'在情感上的理智，很适合做决定。',
	'他于你是袜子塞在秋裤里的心安，而不会是心烦，更不会因为TA而感到心累。',
	'人生若只如初见，何事秋风悲画扇，等闲变却故人心，却道故人心易变。',
	'要为别人委屈自己，改变自己。你是唯一的你，珍贵的你，骄傲的你，美丽的你。',
	'情淡了、心变了、不爱了，即便你把心给掏出来，也不过是打扰。',
	'交流出现问题，易有心结，不肯摊开来谈。',
	'情感运势比较顺利，相处会比较温馨',
	'好好珍惜两人的感情，不要因为一些小事而争吵。',
	'不要老抓着对方的辫子不放，多想想对方的好。',
	'要求太多，掌控欲望强烈，容易令对方吃不消。'
];
ut.work=[
	'每一个成功者都有一个开始。勇于开始，才能找到成功的路。',
	'工作上有点脱线，迷迷糊糊下，小错误会接二连三的发生',
	'工作顺利安慰，与伙伴合作愉快。',
	'加班的同时，要多注意自己的身体。',
	'意外、延迟多发，会导致心思多，易烦躁'
	

];
ut.momey=[
   '虽然生活上开支不少，但是进账足够丰厚。',
   '出现合作生财的机会。',
   '布局合理，认真经营的项目，出现收获套利时机。'
   
]
ut.health=[
    '注意肝脏和心脏血管，消化系统的病变，一定要生活规律。',
    '生命意愿上扬，身心易亢奋难平静，小心某些急性疾病',
    '身体机能良好，能抵抗严寒。'
]
//
export default ut;