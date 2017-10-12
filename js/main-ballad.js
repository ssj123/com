
var row = document.getElementById('row');
var player = document.getElementById('player');
var audio = document.getElementById('audio');
var arr = ["马頔 - 南山南","朴树 - 平凡之路","宋冬野 - 安和桥","宋冬野 - 斑马，斑马","赵雷 - 南方姑娘"];
var lyrics = ["南山南<br />作词：马頔<br />作曲：马頔<br />演唱：马頔<br />你在南方的艳阳里大雪纷飞<br />我在北方的寒夜里四季如春<br />如果天黑之前来得及<br />我要忘了你的眼睛<br />穷极一生做不完一场梦<br />他不再和谁谈论相逢的孤岛<br />因为心里早已荒芜人烟<br />他的心里再装不下一个家<br />做一个只对自己说谎的哑巴<br />他说<br />你任何为人称道的美丽<br />不及他第一次遇见你<br />时光苟延残喘无可奈何<br />如果所有土地连在一起<br />走上一生只为去拥抱你<br />喝醉了他的梦，晚安<br />他听见有人唱着古老的歌<br />唱着今天还在远方发生的<br />像在她眼睛里看到的孤岛<br />没有悲伤但也没有花朵<br />你在南方的艳阳里大雪纷飞<br />我在北方的寒夜里四季如春<br />如果天黑之前来得及<br />我要忘了你的眼睛<br />穷极一生做不完一场梦<br />你在南方的艳阳里大雪纷飞<br />我在北方的寒夜里四季如春<br />如果天黑之前来得及<br />我要忘了你的眼睛<br />穷极一生做不完一场梦<br />大梦初醒荒唐了这一生<br />南山南，北秋悲<br />南山有谷堆<br />南风喃，北海北<br />北海有墓碑<br />南山南，北秋悲<br />南山有谷堆<br />南风喃，北海北<br />北海有墓碑<br />北海有墓碑","平凡之路  - 朴树<br />徘徊着的 在路上的<br />你要走吗<br />易碎的 骄傲着<br />那也曾是我的模样<br />沸腾着的 不安着的<br />你要去哪<br />谜一样的 沉默着的<br />故事你真的在听吗<br />我曾经跨过山和大海<br />也穿过人山人海<br />我曾经拥有着一切<br />转眼都飘散如烟<br />我曾经失落失望失掉所有方向<br />直到看见平凡才是唯一的答案<br />当你仍然 还在幻想<br />你的明天<br />她会好吗 还是更烂<br />对我而言是另一天<br />我曾经毁了我的一切<br />只想永远地离开<br />我曾经堕入无边黑暗<br />想挣扎无法自拔<br />我曾经像你像他像那野草野花<br />绝望着 也渴望着 也哭也笑平凡着<br />向前走 就这么走<br />就算你被给过什么<br />向前走 就这么走<br />就算你被夺走什么<br />向前走 就这么走<br />就算你会错过什么<br />向前走 就这么走<br />就算你会<br />我曾经跨过山和大海<br />也穿过人山人海<br />我曾经拥有着一切<br />转眼都飘散如烟<br />我曾经失落失望失掉所有方向<br />直到看见平凡才是唯一的答案<br />我曾经毁了我的一切<br />只想永远地离开<br />我曾经堕入无边黑暗<br />想挣扎无法自拔<br />我曾经像你像他像那野草野花<br />绝望着 也渴望着 也哭也笑平凡着<br />我曾经跨过山和大海<br />也穿过人山人海<br />我曾经拥有着一切<br />转眼都飘散如烟<br />我曾经失落失望失掉所有方向<br />直到看见平凡才是唯一的答案<br />我曾经毁了我的一切<br />只想永远地离开<br />我曾经堕入无边黑暗<br />想挣扎无法自拔<br />我曾经像你像他像那野草野花<br />绝望着 也渴望着 也哭也笑平凡着<br />我曾经跨过山和大海<br />也穿过人山人海<br />我曾经问遍整个世界<br />从来没得到答案<br />我不过像你像他像那野草野花<br />冥冥中这是我 唯一要走的路啊<br />时间无言 如此这般<br />明天已在眼前<br />风吹过的 路依然远<br />你的故事讲到了哪","安和桥<br />演唱：宋冬野<br />让我再看你一遍 从南到北<br />像是被五环路蒙住的双眼<br />请你再讲一遍<br />关于那天 抱着盒子的姑娘<br />和擦汗的男人<br />我知道<br />那些夏天就像青春一样回不来<br />代替梦想的<br />也只能是勉为其难<br />我知道<br />吹过的牛逼也会随青春一笑了之<br />让我困在城市里 纪念你<br />让我再尝一口<br />秋天的酒<br />一直往南方开<br />不会太久<br />让我再听一遍<br />最美的那一句 你回家了<br />我在等你呢<br />我知道<br />那些夏天就像青春一样回不来<br />代替梦想的<br />也只能是勉为其难<br />我知道<br />吹过的牛逼也会随青春一笑了之<br />让我困在城市里 纪念你<br />我知道<br />那些夏天就像你一样回不来<br />我已不会再对谁<br />满怀期待<br />我知道<br />这个世界每天都有太多遗憾<br />所以 你好 再见","斑马,斑马<br />演唱：宋冬野<br />斑马 斑马 你不要睡着啦<br />再给我看看你受伤的尾巴<br />我不想去触碰你 伤口的疤<br />我只想掀起你的头发<br />斑马 斑马 你回到了你的家<br />可我浪费着我寒冷的年华<br />你的城市没有一扇门 为我打开啊<br />我终究还要回到路上<br />斑马 斑马 你来自南方的红色啊<br />是否也是个动人的故事啊<br />你隔壁的戏子 如果不能留下<br />谁会和你 睡到天亮<br />斑马 斑马 你还记得我吗<br />我是只会歌唱的傻瓜<br />斑马 斑马 你睡吧睡吧<br />我会背上吉他离开北方<br />斑马 斑马 你会记得我吗<br />我是强说着愁的孩子啊<br />斑马 斑马 你睡吧睡吧<br />我把你的青草带回故乡<br />斑马 斑马 你不要睡着了<br />我只是个匆忙的旅人啊<br />斑马 斑马 你睡吧睡吧<br />我要卖掉我的房子 浪迹天涯","南方姑娘<br />作词：赵雷 作曲：赵雷<br />演唱：赵雷<br />北方的村庄住着一个南方的姑娘<br />她总是喜欢穿着带花的裙子站在路旁<br />她的话不多但笑起来是那么平静悠扬<br />她柔弱的眼神里装的是什么 是思念的忧伤<br />南方的小镇阴雨的冬天没有北方冷<br />她不需要臃肿的棉衣去遮盖她似水的面容<br />她在来去的街头留下影子芳香才会某然的心痛<br />眨眼的时间芳香已飘散影子已不见<br />南方姑娘 你是否习惯北方的秋凉<br />南方姑娘 你是否喜欢北方人的直爽<br />日子过的就像那些不眠的晚上<br />她嚼着口香糖对墙满谈着理想<br />南方姑娘 我们都在忍受着漫长<br />南方姑娘 是不是高楼遮住了你的希望<br />昨日的雨曾淋漓过她瘦弱的肩膀<br />夜空的北斗也没有让她找到迷途的方向<br />阳光里她在院子中央晾晒着衣裳<br />在四季的风中她散着头发安慰着时光<br />南方姑娘 你是否爱上了北方<br />南方姑娘 你说今天你就要回到你的家乡<br />思念让人心伤 她呼唤着你的泪光<br />南方的果子已熟 那是你简单的理想<br />啦……啦……"]
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
		audio.src = 'lib/ballad/'+arr[n]+'.mp3'
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
		audio.src = 'lib/ballad/'+arr[n]+'.mp3'
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
		audio.src = 'lib/ballad/'+arr[n]+'.mp3';
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
			audio.src = 'lib/ballad/'+arr[n]+'.mp3';
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
			audio.src = 'lib/ballad/'+arr[n]+'.mp3';
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
	audio.src = 'lib/ballad/'+arr[0]+'.mp3'
	musictext.innerHTML = lyrics[0];
	audio.play();
}
o2.onclick = function songs() {
	musicName.innerHTML = arr[1];
	player.src = 'images/stpp.png';
	audio.src = 'lib/ballad/'+arr[1]+'.mp3'
	musictext.innerHTML = lyrics[1];
	audio.play();
}
o3.onclick = function songs() {
	musicName.innerHTML = arr[2];
	player.src = 'images/stpp.png';
	audio.src = 'lib/ballad/'+arr[2]+'.mp3'
	musictext.innerHTML = lyrics[2];
	audio.play();
}
o4.onclick = function songs() {
	musicName.innerHTML = arr[3];
	player.src = 'images/stpp.png';
	audio.src = 'lib/ballad/'+arr[3]+'.mp3'
	musictext.innerHTML = lyrics[3];
	audio.play();
}
o5.onclick = function songs() {
	musicName.innerHTML = arr[4];
	player.src = 'images/stpp.png';
	audio.src = 'lib/ballad/'+arr[4]+'.mp3'
	musictext.innerHTML = lyrics[4];
	audio.play();
}
