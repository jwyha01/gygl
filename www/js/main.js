function load() {
      var a= setTimeout("loading.style.transition='opacity 1s'",1000)   
      //设置透明度改变的过渡时间为0.3秒
      var b= setTimeout("loading.style.opacity=0",1000)
      //0.5秒后加载动画开始变为透明
      var c= setTimeout("loading.style.display='none'",2000)
      //当透明度为0的时候，隐藏掉它
}
function SetCookie(name,value,ti) {
	var key = '';
	var exp = new Date();
	var domain = "";
	exp.setTime(exp.getTime() + 1000 * 24 * 60 * 60 * ti);
	if (key == null || key == "") {
		document.cookie = name + "=" + encodeURI(value) + ";expires=" + exp.toGMTString() + ";path=/;domain=" + domain + ";";
	}
	else {
		var nameValue = GetCookie(name);
		if (nameValue == "") {
			document.cookie = name + "=" + key + "=" + encodeURI(value) + ";expires=" + exp.toGMTString() + ";path=/;domain=" + domain + ";";
		}
		else {
			var keyValue = getCookie(name, key);
			if (keyValue != "") {
				nameValue = nameValue.replace(key + "=" + keyValue, key + "=" + encodeURI(value));
					document.cookie = name + "=" + nameValue + ";expires=" + exp.toGMTString() + ";path=/;domain=" + domain + ";";
				}
			else {
				document.cookie = name + "=" + nameValue + "&" + key + "=" + encodeURI(value) + ";expires=" + exp.toGMTString() + ";path=/;" + domain + ";";
			}
		}
	}
}
function GetCookie(name) {
	var nameValue = "";
	var key = "";
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg)) {
		nameValue = decodeURI(arr[2]);
	}
	if (key != null && key != "") {
		reg = new RegExp("(^| |&)" + key + "=([^(;|&|=)]*)(&|$)");
		if (arr = nameValue.match(reg)) {
			return decodeURI(arr[2]);
		}
		else return "";
	}
	else {
		return nameValue;
	}
}


//==============================================================================
//判断UA
//==============================================================================

var browser = { 
	versions: function () { 
		var u = navigator.userAgent, app = navigator.appVersion; 
		return {		 //移动终端浏览器版本信息 
			trident: u.indexOf('Trident') > -1, //IE内核 
			presto: u.indexOf('Presto') > -1, //opera内核 
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核 
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核 
			mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端 
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端 
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器 
			iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器 
			iPad: u.indexOf('iPad') > -1, //是否iPad 
			webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部 
		}; 
	}(), 
	language: (navigator.browserLanguage || navigator.language).toLowerCase() 
}
if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
	if(window.location.host=="www.ahgygl.com"){
		if(GetCookie("mobieJumpPc")=="true"||GetCookie("mobieJumpPc")=="false"){
			if(GetCookie("mobieJumpPc")=="true"){
			}else{
				window.location.href='https://m.ahgygl.com/mobie'+window.location.href.slice(window.location.href.lastIndexOf('/'),window.location.href.length);
			}
		}else{
			if(confirm("您现在正在尝试使用移动设备访问PC端网页，确认要继续吗（本提示每24小时仅会出现一次）")==true){
				SetCookie("mobieJumpPc","true",1)
			}else{
				SetCookie("mobieJumpPc","false",1)
				window.location.href='https://m.ahgygl.com/mobie'+window.location.href.slice(window.location.href.lastIndexOf('/'),window.location.href.length);
			}
		}
	}else{
	}
	//以下暂时无用
	var ua = navigator.userAgent.toLowerCase();//获取判断用的对象 
	var u = navigator.userAgent; 
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端 
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端 
	if (ua.match(/MicroMessenger/i) == "micromessenger") { 
		//在微信中打开 
	}
	if (ua.match(/WeiBo/i) == "weibo" && isiOS) { 
		//alert("我在微博中被打开IOS");
/*		document.addEventListener('touchmove', function (event) { 　　 //监听滚动事件
			if(flag==1){　　　　　　　　　　　　　　　　　　　　　　　　　　　　//判断是遮罩显示时执行，禁止滚屏
				event.preventDefault();　　　　　　　　　　　　　　　　　　　//最关键的一句，禁止浏览器默认行为
			}
		})
		$(".download-button,#headermenudownlink,#appshareheaderdownlink,#appsharesayhidownlink,#appsharevslogodownlink,#appsharevsdownlink").bind("click",function () {
			flag = 1;
			//alert('ios下载');
			$("#shade-father").css({"display":"block","background-color":"rgba(0,0,0,0.4)"});
			//$("body").css("paddingTop","2.3rem");
			$("#shade-child").css("height","4rem");
		});
		$('#shade-father').click(function (){
			flag = 0;
			$("#shade-father").css({"display":"none","background-color":"rgba(0,0,0,0)"});
			$("#shade-child").css("height","0");
			//$("body").css("paddingTop","0");
		});*/
	}
	if (ua.match(/WeiBo/i) == "weibo" && isAndroid) {
	
			
	}
			
	if (ua.match(/QQ/i) == "qq") {
			
		//在QQ空间打开
			
	}
			
	if (browser.versions.ios) {
			
		//是否在IOS浏览器打开
			
	}
			
	if(browser.versions.android){
			
		//是否在安卓浏览器打开
			
	}

} else {
	//否则就是PC浏览器打开
	if(window.location.host=="m.ahgygl.com"){
		if(GetCookie("pcJumpMobie")=="true"||GetCookie("pcJumpMobie")=="false"){
			if(GetCookie("pcJumpMobie")=="true"){
			}else{
				window.location.href='https://www.ahgygl.com'+window.location.href.slice(window.location.href.lastIndexOf('/'),window.location.href.length);
			}
		}else{
			if(confirm("您现在正在尝试使用PC设备访问移动端网页，确认要继续吗（本提示每24小时仅会出现一次）")==true){
				SetCookie("pcJumpMobie","true",1)
			}else{
				SetCookie("pcJumpMobie","false",1)
				window.location.href='https://www.ahgygl.com'+window.location.href.slice(window.location.href.lastIndexOf('/'),window.location.href.length);
			}
		}
	}else{
	}
}