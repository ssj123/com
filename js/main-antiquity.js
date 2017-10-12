
var row = document.getElementById('row');
var player = document.getElementById('player');
var audio = document.getElementById('audio');
var arr = ["河图 - 老酒街","刘珂矣 - 缥缃醉","少司命 - 客官请进","新乐尘符 - 醉流年","佑可猫 - 将进酒"];
var lyrics = ["老酒街<br />词:明河<br />曲:河图<br />唱:河图<br />供销社的商店是少年梦想<br />三国演义最后看到第几章<br />还记得那一年的火龙很长<br />戏园里白素贞有婉转唱腔<br />听着川剧吃块米花糖<br />夕阳漫不经心走下酒坊<br />晚风路过陶坛吹散了酒香<br />偷倒空的酒壶还挂在墙上<br />猫咪抱着尾巴睡得好安详<br />我记得你所有的模样<br />离开时最后一次朝你远望<br />你带着天真的忧伤<br />时光来去你在原地<br />安静地站到两鬓苍苍<br />亲爱的老酒街别来无恙<br />我在遥远梦里看到你模样<br />等星星都点亮 闭上眼找酒香<br />沿着回忆我走过旧时光<br />亲爱的老酒街别来无恙<br />风霜浸透岁月爬过你脸庞<br />等夜风开始唱 越过山去远方<br />我终于把回忆写成伤感诗行<br />古营沟走遍了数不清酒坊<br />龙泉洞的收藏用什么计量<br />船山楼有香袅袅飘下长江<br />一路向东随着轮船浪打浪<br />我记得你所有的模样<br />离开时最后一次朝你远望<br />你带着天真的忧伤<br />时光来去你在原地<br />安静地站到两鬓苍苍<br />亲爱的老酒街别来无恙<br />我在遥远梦里看到你模样<br />等星星都点亮 闭上眼找酒香<br />沿着回忆我走过旧时光<br />亲爱的老酒街别来无恙<br />风霜浸透岁月爬过你脸庞<br />等夜风开始唱 越过山去远方<br />我终于把回忆写成伤感诗行","缥缃醉<br />作词：不退居士，刘珂矣<br />作曲：百慕三石，刘珂矣<br />演唱：刘珂矣<br />君不见 谁在问 驮经白马自西来<br />黄衣啊 少年人 已不在<br />君不见 谁在问 一窗青山一窗年<br />数排雁 已是人间四季天<br />饮一钵不凋谢的风雪<br />沙淹没来时路的寒夜<br />尺素间 楮松烟 陈墨点点 落心弦<br />游龙舞 惹谁醉了几千年<br />引阑珊 衣不沾 薄指芊芊人缱倦<br />旧时月光盛满了书简<br />君不见 谁在问 一窗青山一窗年<br />数排雁 已是人间四季天<br />饮一钵不凋谢的风雪<br />沙淹没来时路的寒夜<br />尺素间 楮松烟 陈墨点点 落心弦<br />游龙舞 惹谁醉了几千年<br />引阑珊 衣不沾 薄指芊芊人缱倦<br />旧时月光盛满了书简<br />尺素间 楮松烟 陈墨点点 落心弦<br />游龙舞 惹谁醉了几千年<br />引阑珊 衣不沾 薄指芊芊人缱倦<br />莫问梦舟已过几重巅<br />模糊间 已是枫杨染红了秋天","客官请进 - 少司命<br />词：willen<br />曲：willen<br />客官里面请几位<br />请上座好茶来奉陪<br />一双筷从南吃到北<br />中华五千年留下的韵味<br />客官您请进<br />请问住店还是打尖<br />小二快到这边来<br />拿来上好的饭菜热情招待<br />一壶陈酿的老酒<br />好喝它还还还还不上头<br />再给您切上半斤牛肉<br />这份量你看够不够<br />南来的北往的<br />快进店里来看一看<br />走一走转一转<br />我们靠祖传的手艺吃饭<br />南方的米北方的面<br />师傅手中变化有万千<br />煎炒烹炸样样味道鲜<br />想吃啥都都随您的便<br />客官您听好了<br />蒸羊羔 蒸熊掌 蒸鹿尾儿<br />烧花鸭 烧雏鸡 烧子鹅<br />卤猪 卤鸭 酱鸡 腊肉<br />松花小肚儿 晾肉 香肠儿<br />什锦苏盘<br />熏鸡白肚儿 清蒸八宝猪<br />江米酿鸭子<br />罐罐罐罐儿野鸡 罐儿鹌鹑<br />卤什件儿 卤子鹅 山鸡<br />老祖宗的招牌千年的碑<br />柴米油盐酱醋茶的韵味<br />老姜配丹桂<br />千年万年食材美<br />老祖宗的招牌不能憔悴<br />玉盘珍馐万钱也不能给<br />清汤配当归<br />好似一心静如水<br />沂州糁 黄焖鸡<br />兰陵的美酒饮一口<br />柳叶片刀削份量厚<br />一盘麻婆豆腐吃不够<br />米线过桥狗不理<br />羊肉泡馍香飘几里<br />天津的麻花重庆的水煮鱼<br />老祖宗的招牌千年的碑<br />柴米油盐酱醋茶的韵味<br />老姜配丹桂<br />千年万年食材美<br />老祖宗的招牌不能憔悴<br />玉盘珍馐万钱也不能给<br />清汤配当归<br />好似一心静如水<br />老祖宗的招牌千年的碑<br />柴米油盐酱醋茶的韵味<br />老姜配丹桂<br />千年万年食材美<br />老祖宗的招牌不能憔悴<br />玉盘珍馐万钱也不能给<br />清汤配当归<br />好似一心静如水","醉流年 - 新乐尘符 <br />词：孟君酱 曲：孟君酱 <br />编曲：江潮 <br />春风到迎春晓 <br />小荷尖尖露小角 <br />红叶橘果小儿闹 <br />白雪皑皑已满宵 <br />古城外牧童遥声声生寂寥 <br />年少情深未央已老 <br />春秋外儿时发小 <br />往事知多少 <br />谁哀叹花残风萧 <br />阁楼上内家娇庭前低语笑 <br />一壶倾杯公子可好 <br />转眼处玉人轻舞 <br />今夕是何朝 <br />梦回时浮生飘摇 <br />我只愿一生孤独终老 <br />换你一世逍遥 <br />别离缱绻相思几度又何消 <br />人若初见时情浅未扰 <br />爱与恨谁能了 <br />青衫醉语怕流年知晓 <br />阁楼上内家娇 <br />庭前低语笑 <br />一壶倾杯公子可好 <br />转眼处玉人轻舞 <br />今夕是何朝 <br />梦回时浮生飘摇 <br />我只愿一生孤独终老 <br />换你一世逍遥 <br />别离缱绻相思几度又何消 <br />人若初见时情浅未扰 <br />爱与恨谁能了 <br />青衫醉语怕流年知晓 <br />我只愿一生孤独终老 <br />换你一世逍遥 <br />别离缱绻相思几度又何消 <br />人若初见时情浅未扰 <br />爱与恨谁能了 <br />青衫醉语怕流年知晓 <br />青衫醉语 <br />怕流年 <br />知晓 ","将进酒 - 佑可猫<br />词：谢博文<br />君不见黄河之水天上来<br />奔流到海不复回<br />君不见高堂明镜悲白发<br />朝如青丝暮成雪<br />等不到三千世界<br />和解的宇宙<br />银河奔流<br />最后少年白了头<br />等不到细水长流<br />紧扣的双手<br />以为灯火之后<br />再无人解咒<br />唱一首歌来温暖<br />一瞬的蜉蝣<br />平生看透<br />最后别在意春秋<br />喝一杯酒来唤醒<br />沉寂的王侯<br />天下所有哀愁<br />都变成自由<br />今朝与君一曲<br />倾耳聆听<br />请君杯莫停<br />把千金散尽<br />留下姓名<br />长醉不复醒<br />别说那圣贤寂寞<br />总有时光难消磨<br />别说那去日苦多<br />一时朝阳破烟箩<br />来再来一杯<br />天涯无谓<br />言语不在多<br />你仗剑东游<br />我青衫白马过<br />唱一首歌来温暖<br />一瞬的蜉蝣<br />平生看透<br />最后别在意春秋<br />喝一杯酒来唤醒<br />沉寂的王侯<br />天下所有哀愁<br />都变成自由<br />今朝与君一曲<br />倾耳聆听<br />请君杯莫停<br />把千金散尽<br />留下姓名<br />长醉不复醒<br />别说那圣贤寂寞"]
var n = 0;
var second; //歌曲总时间
var musicName = document.getElementById('musicName');
var text = document.getElementById('musictext');
var next = document.getElementById('next');
var pre = document.getElementById('pre');
// 点击播放暂停
player.onclick = function () {
	if( audio.paused){
		timer = setInterval(canpaly,1000);
		audio.play();
		player.src = 'images/stpp.png';
		
	}else{
		clearInterval(timer);
		audio.pause();
		player.src = 'images/play.png';
	}
}

// 上一首下一首s
	next.onclick = function next() {
		n++;
	
		musicName.innerHTML = arr[n];
		audio.src = 'lib/antiquity/'+arr[n]+'.mp3'
		musictext.innerHTML = lyrics[n];
		if(n == arr.length-1){
			n = -1;
		}
		player.src = 'images/stpp.png';
		audio.play();
		timer = setInterval(canpaly,1000);
		return n;
	}

	pre.onclick = function () {
		n--;
		if(n == -1){
			n = arr.length-1;
		}
		musicName.innerHTML = arr[n];
		musictext.innerHTML = lyrics[n];
		audio.src = 'lib/antiquity/'+arr[n]+'.mp3'
		player.src = 'images/stpp.png';
		audio.play();
		timer = setInterval(canpaly,1000);
		return n;
	}

// 循环播放
var onex = document.getElementById('onex');
var num = 1;

// 初始循环单曲
	audio.onended = function () {
		n++;
		musicName.innerHTML = arr[n];
		audio.src = 'lib/antiquity/'+arr[n]+'.mp3';
		musictext.innerHTML = lyrics[n];
		if(n == arr.length-1){
			n = -1;
			}
		audio.play();
};

onex.onclick = function () {
	if( num == 1){
		num = 2;
		onex.src = 'images/restart.png';
		//循环当前
		audio.onended = function () {
			musicName.innerHTML = arr[n];
			audio.src = 'lib/antiquity/'+arr[n]+'.mp3';
			if(n == arr.length-1){
				n = -1;
				}
			audio.play();
		};
	}else if(num == 2){
		num = 1;
		// 自动下一首
		onex.src = 'images/onex.png';
		audio.onended = function () {
			n++;
			musicName.innerHTML = arr[n];
			audio.src = 'lib/antiquity/'+arr[n]+'.mp3';
			musictext.innerHTML = lyrics[n];
			console.log(n)
			if(n == arr.length-1){
				n = -1;
				}
			audio.play();	
		};
		
	}
}

// 音量调节
var bar = document.getElementById('bar');
var current = document.getElementById('current');
var toralvo = document.getElementById('event');
var adjust = document.getElementById('adjust');
var song = document.getElementById('song');
var re = 1;

adjust.onclick = function (ev) {
	var ev = ev || window.event;
	disY = ev.clientY - 90;
	console.log(ev.clientY)
	newbom1 = 50 - disY;
	bar.style.bottom = newbom1 + 'px';
	current.style.height = newbom1 + 'px';
	// audio.volume = newbom1*2/100;
}

bar.onmousedown = function (ev) {
	var ev = ev || window.event;
	disX = ev.clientY;
	document.onmousemove = function (ev) {
		var ev = ev || window.event;
		newbom = disX - ev.clientY + 25;
		if (newbom < 0) {
				newbom = 0;
			}else if( newbom > toralvo.offsetHeight){
				newbom = toralvo.offsetHeight;
			}
		bar.style.bottom = newbom + 'px';
		current.style.height = newbom + 'px';
		audio.volume = newbom*2/100;
		if( audio.volume == 0){
			song.src = 'images/songclose.png';
		}else{
			song.src = 'images/song_y.png';
		}
		}
		document.onmouseup = function () {
			document.onmousemove = null;
		}
}
song.onclick = function () {
	adjust.style.display = 'block';
	if(re == 0){
		audio.volume = 0;
		newbom = 0;

		song.src = 'images/songclose.png';
		re = 1
	}else if( re == 1){
		audio.volume = 0.5;
		song.src = 'images/song_y.png';
		newbom = toralvo.offsetHeight/2;
		re = 0;
	}
	bar.style.bottom = newbom + 'px';
	current.style.height = newbom + 'px';

}
bar.onmousemove = function () {
	adjust.style.display = 'block';
}
bar.onmouseout = function () {
	adjust.style.display = 'none';
}
song.onmousemove = function () {
	adjust.style.display = 'block';
}
song.onmouseout = function () {
	adjust.style.display = 'none';
}
toralvo.onmousemove = function () {
	adjust.style.display = 'block';
}
toralvo.onmouseout = function () {
	adjust.style.display = 'none';
}


 // 进度条
 var progress = document.getElementById('progress');
 var nowPro = document.getElementById('nowPro');
 var time = document.getElementById('time');
 var mlef = $('#row').css('margin-left');
 var plef = $('#row').css('padding-left');

progress.onclick = function (ev) {
	var ev = ev || window.event;
	disX1 = ev.clientX - parseInt(mlef) - parseInt(plef);
	console.log(progress.offsetWidth);
	newbom2 = disX1/progress.offsetWidth;
	bar.style.bottom = disX1 + 'px';
	audio.currentTime = parseInt(audio.duration)*newbom2;
	audio.play();
	timer = setInterval(canpaly,1000);
	player.src = 'images/stpp.png';
}


// 歌曲总时间
function canpaly() {
	// second = parseInt(audio.seekable.end(0));
	second = parseInt(audio.duration);
	var m = parseInt(second/60),s = toZero(second - m*60);
	var sec = parseInt(audio.currentTime);
	var m1 = parseInt(sec/60),s1 = toZero(sec - m1*60);
	time.innerHTML = m1+":"+s1+"/"+m+":"+s;
	nowPro.style.width = sec/second*100+'%';

}
// 歌曲时间
 
var timer = setInterval(canpaly,1000);

// audio.ontimeupdate = function updateTime(){
// 	var ct = parseInt(audio.currentTime);

// }

// 补0
function toZero(zero) {
	if(zero <= 9){
		return '0'+zero;
	}else{
		return ''+zero;
	}
}


var o1 = document.getElementById('o1');
var o2 = document.getElementById('o2');
var o3 = document.getElementById('o3');
var o4 = document.getElementById('o4');
var o5 = document.getElementById('o5');
var o6 = document.getElementById('o6');
var o7 = document.getElementById('o7');
var o8 = document.getElementById('o8');
var o9 = document.getElementById('o9');
var o10 = document.getElementById('o10');



o1.onclick = function songs() {
	musicName.innerHTML = arr[0];
	player.src = 'images/stpp.png';
	audio.src = 'lib/antiquity/'+arr[0]+'.mp3'
	musictext.innerHTML = lyrics[0];
	audio.play();
}
o2.onclick = function songs() {
	musicName.innerHTML = arr[1];
	player.src = 'images/stpp.png';
	audio.src = 'lib/antiquity/'+arr[1]+'.mp3'
	musictext.innerHTML = lyrics[1];
	audio.play();
}
o3.onclick = function songs() {
	musicName.innerHTML = arr[2];
	player.src = 'images/stpp.png';
	audio.src = 'lib/antiquity/'+arr[2]+'.mp3'
	musictext.innerHTML = lyrics[2];
	audio.play();
}
o4.onclick = function songs() {
	musicName.innerHTML = arr[3];
	player.src = 'images/stpp.png';
	audio.src = 'lib/antiquity/'+arr[3]+'.mp3'
	musictext.innerHTML = lyrics[3];
	audio.play();
}
o5.onclick = function songs() {
	musicName.innerHTML = arr[4];
	player.src = 'images/stpp.png';
	audio.src = 'lib/antiquity/'+arr[4]+'.mp3'
	musictext.innerHTML = lyrics[4];
	audio.play();
}
o6.onclick = function songs() {
	musicName.innerHTML = arr[5];
	player.src = 'images/stpp.png';
	audio.src = 'lib/antiquity/'+arr[5]+'.mp3'
	musictext.innerHTML = lyrics[5];
	audio.play();
}
o7.onclick = function songs() {
	musicName.innerHTML = arr[6];
	player.src = 'images/stpp.png';
	audio.src = 'lib/antiquity/'+arr[6]+'.mp3'
	musictext.innerHTML = lyrics[6];
	audio.play();
}
o8.onclick = function songs() {
	musicName.innerHTML = arr[7];
	player.src = 'images/stpp.png';
	audio.src = 'lib/antiquity/'+arr[7]+'.mp3'
	musictext.innerHTML = lyrics[7];
	audio.play();
}
o9.onclick = function songs() {
	musicName.innerHTML = arr[8];
	player.src = 'images/stpp.png';
	audio.src = 'lib/antiquity/'+arr[8]+'.mp3'
	musictext.innerHTML = lyrics[8];
	audio.play();
}
o10.onclick = function songs() {
	musicName.innerHTML = arr[9];
	player.src = 'images/stpp.png';
	audio.src = 'lib/antiquity/'+arr[9]+'.mp3'
	musictext.innerHTML = lyrics[9];
	audio.play();
}
