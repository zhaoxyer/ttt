var ut = {};
ut.url = 'https://mdapi.vertxjava.com/api/v1/client/';
ut.static = 'https://mdapi.vertxjava.com';
ut.uploadimgurl = 'https://mdapi.vertxjava.com/api/v1/';
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
//拨打电话
ut.call=function(){
	wx.makePhoneCall({
		phoneNumber: '18888888888',
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
//设置页面title
ut.settitle = function(title) {
	wx.setNavigationBarTitle({
		title: title
	})
}
//弹出消息
ut.showToast = function(title) {
	wx.showToast({
		title: title,
		icon: 'none',
		color: 'red',
		duration: 2000
	})
}
//校验手机号
ut.checkmobile = function(str) {
	var myreg = /^[1][3,4,5,6.7,8,9][0-9]{9}$/;
	if (!myreg.test(str)) {
		return false;
	} else {
		return true;
	}
}
//清除用户信息
ut.loginout =function(){
	wx.setStorageSync('token','');
}
ut.request=function(parm){
	parm.data=parm.data||{};
	var c='application/x-www-form-urlencoded';
	if(parm.c){
	  c='application/json';
	}
	return new Promise(function(success,fail){
		wx.request({
			url: parm.allurl?parm.allurl:(ut.url + parm.url),
			data: parm.data,
			method: parm.method || 'post',
			header: {
				"Accept": "*/*",
				'content-type': c,
				"Authorization": wx.getStorageSync('token')||''
			},
			success: function(res) {
				wx.hideLoading({
					complete: function() {
						if(res.data.code == 0) {
							success(res.data.data)
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
//上传图片
ut.uploadimg = function(parm) {
	parm=parm||{};
	wx.chooseImage({
		count:1,
		sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
		sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		success: function(res) {
			// 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
			console.log(res)
			if(parm.callback)parm.callback(res.tempFilePaths[0]);		
		}
	})
}
//
export default ut;