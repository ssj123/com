
var row = document.getElementById('row');
var player = document.getElementById('player');
var audio = document.getElementById('audio');
var arr = ["李克勤 - 红日","李荣浩 - 老街","李玉刚 - 刚好遇见你","任妙音 - 天在下雨我在想你","王冕 - 勉为其难"];
var lyrics = ["歌曲：红日<br />歌手：李克勤<br />这首歌献给我自己，好好的过生活！<br />制作：戴国华<br />命运就算颠沛流离<br />命运就算曲折离奇<br />命运就算恐吓着你做人没趣味<br />别流泪 心酸 更不应舍弃<br />我愿能 一生永远陪伴你<br />命运就算颠沛流离<br />命运就算曲折离奇<br />命运就算恐吓着你做人没趣味<br />别流泪 心酸 更不应舍弃<br />我愿能 一生永远陪伴你<br />哦~~<br />一生之中兜兜转转 那会看清楚<br />彷徨时我也试过独坐一角像是没协助<br />在某年 那幼小的我<br />跌倒过几多几多落泪在雨夜滂沱<br />一生之中弯弯曲曲我也要走过<br />从何时有你有你伴我给我热烈地拍和<br />像红日之火 燃点真的我<br />结伴行 千山也定能踏过<br />让晚风 轻轻吹过<br />伴送着清幽花香像是在祝福你我<br />让晚星 轻轻闪过<br />闪出你每个希冀如浪花 快要沾湿我<br />闪出你每个希冀如浪花 快要沾湿我","一张褪色的照片<br />好像带给我一点点怀念<br />巷尾老爷爷买的热汤面<br />味道弥漫过旧旧的后园<br />流浪猫睡熟在摇晃秋千<br />夕阳照了一遍他眯着眼<br />那张同桌寄的明信片<br />安静的躺在课桌的里面<br />快要过完的春天<br />还有雕刻着图案的门帘<br />窄窄的长长的过道两边<br />老房子依然升起了炊烟<br />刚刚下完了小雨的季节<br />爸妈又一起走过的老街<br />记不得哪年的哪一天<br />很漫长又很短暂的岁月<br />现在已经回不去<br />早已流逝的光阴<br />手里的那一张渐渐模糊不清的车票<br />成了回忆的信号<br />忘不掉的是什么我也不知道<br />想不起当年模样<br />看也看不到去也去不了的地方<br />也许那老街的腔调是属于我的忧伤<br />嘴角那点微笑越来越勉强<br />忘不掉的是什么我也不知道<br />放不下熟悉片段<br />回头望一眼已经很多年的时间<br />透过手指间看着天<br />我又回到那老街<br />靠在你们身边渐行渐远<br />快要过完的春天<br />还有雕刻着图案的门帘<br />窄窄的长长的过道两边<br />老房子依然升起了炊烟<br />刚刚下完小雨的季节<br />爸妈又一起走过的老街<br />记不得哪年的哪一天<br />很漫长又很短暂的岁月<br />现在已经回不去<br />早已流逝的光阴<br />手里的那一张渐渐模糊不清的车票<br />成了回忆的信号<br />忘不掉的是什么我也不知道<br />想不起当年模样<br />看也看不到去也不去了的地方<br />也许那老街的腔调是属于我的忧伤<br />嘴角那点微笑越来越勉强<br />忘不掉的是什么我也不知道<br />放不下熟悉片段<br />回头望一眼已经很多年的时间<br />透过手指间看着天<br />我又回到那老街<br />靠在你们身边渐行渐远","刚好遇见你<br />作词：高进<br />作曲：高进<br />编曲：关天天<br />演唱：李玉刚<br />我们哭了<br />我们笑着<br />我们抬头望天空<br />星星还亮着几颗<br />我们唱着<br />时间的歌<br />才懂得相互拥抱<br />到底是为了什么<br />因为我刚好遇见你<br />留下足迹才美丽<br />风吹花落泪如雨<br />因为不想分离<br />因为刚好遇见你<br />留下十年的期许<br />如果再相遇<br />我想我会记得你<br />我们哭了<br />我们笑着<br />我们抬头望天空<br />星星还亮着几颗<br />我们唱着<br />时间的歌<br />才懂得相互拥抱<br />到底是为了什么<br />因为我刚好遇见你<br />留下足迹才美丽<br />风吹花落泪如雨<br />因为不想分离<br />因为刚好遇见你<br />留下十年的期许<br />如果再相遇<br />我想我会记得你<br />因为我刚好遇见你<br />留下足迹才美丽<br />风吹花落泪如雨<br />因为不想分离<br />因为刚好遇见你<br />留下十年的期许<br />如果再相遇<br />我想我会记得你<br />因为我刚好遇见你<br />留下足迹才美丽<br />风吹花落泪如雨<br />因为不想分离<br />因为刚好遇见你<br />留下十年的期许<br />如果再相遇<br />我想我会记得你","天在下雨我在想你 - 任妙音<br />词：陈红卫&祁隆<br />曲：陈伟<br />窗外细雨淅淅沥沥<br />敲打寂寞溅起回忆<br />想起那些美好过去<br />你的面容渐渐清晰<br />在这拥挤的城市里<br />遍寻不到哪个是你<br />多情自古伤别离<br />点点滴滴化作叹息<br />天在下雨我在想你<br />不知道你是否有感应<br />出门在外都不容易<br />千万小心保重自己<br />天在下雨我在想你<br />你是否知道我的情意<br />也许有人把我代替<br />我会永远祝福你<br />窗外细雨淅淅沥沥<br />敲打寂寞溅起回忆<br />想起那些美好过去<br />你的面容渐渐清晰<br />在这拥挤的城市里<br />遍寻不到哪个是你<br />多情自古伤别离<br />点点滴滴化作叹息<br />天在下雨我在想你<br />不知道你是否有感应<br />出门在外都不容易<br />千万小心保重自己<br />天在下雨我在想你<br />你是否知道我的情意<br />也许有人把我代替<br />我会永远祝福你<br />天在下雨我在想你<br />不知道你是否有感应<br />出门在外都不容易<br />千万小心保重自己<br />天在下雨我在想你<br />你是否知道我的情意<br />也许有人把我代替<br />我会永远祝福你<br />我会永远祝福你","勉为其难 - 王冕 <br />作词：高进 <br />作曲：高进 <br />编曲：张亮 <br />还要多少时间 <br />才能停止想念 <br />在这样的夜晚 <br />你是否 <br />和我一样不知道该找谁聊天 <br />女人哭花了双眼 <br />男人湿透了衣衫 <br />两个人相拥却孤单 <br />留下了什么遗憾 <br />在身边 在昨天 <br />从一开始相互牵绊到争吵 <br />用了多少天 <br />从承诺出发一路提心吊胆 <br />只因为不想走散 <br />如果不爱了就别勉为其难 <br />虽然我也不想说声再见 <br />用手画出的圆 <br />却总不圆满 <br />孤独缓解一个人的狂欢 <br />如果留不住就别勉为其难 <br />就算痛也不让自己难堪 <br />总想有人去管 <br />别袖手旁观 <br />总会等到对的人说晚安 <br />女人哭花了双眼 <br />男人湿透了衣衫 <br />两个人相拥却孤单 <br />留下了什么遗憾 <br />在身边 在昨天 <br />从一开始相互牵绊到争吵 <br />用了多少天 <br />从承诺出发一路提心吊胆 <br />只因为不想走散 <br />如果不爱了就别勉为其难 <br />虽然我也不想说声再见 <br />用手画出的圆 <br />却总不圆满 <br />孤独缓解一个人的狂欢 <br />如果留不住就别勉为其难 <br />就算痛也不让自己难堪 <br />总想有人去管 <br />别袖手旁观 <br />总会等到对的人说晚安 <br />如果不爱了就别勉为其难 <br />虽然我也不想说声再见 <br />用手画出的圆 <br />却总不圆满 <br />孤独缓解一个人的狂欢 <br />如果留不住就别勉为其难 <br />就算痛也不让自己难堪 <br />总想有人去管 <br />别袖手旁观 <br />总会等到对的人说晚安 <br />总会等到对的人说晚安 "]
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
		audio.src = 'lib/popular/'+arr[n]+'.mp3';
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
		audio.src = 'lib/popular/'+arr[n]+'.mp3'
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
		audio.src = 'lib/popular/'+arr[n]+'.mp3';
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
			audio.src = 'lib/popular/'+arr[n]+'.mp3';
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
			audio.src = 'lib/popular/'+arr[n]+'.mp3';
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
	audio.src = 'lib/popular/'+arr[0]+'.mp3'
	musictext.innerHTML = lyrics[0];
	audio.play();
}
o2.onclick = function songs() {
	musicName.innerHTML = arr[1];
	player.src = 'images/stpp.png';
	audio.src = 'lib/popular/'+arr[1]+'.mp3'
	musictext.innerHTML = lyrics[1];
	audio.play();
}
o3.onclick = function songs() {
	musicName.innerHTML = arr[2];
	player.src = 'images/stpp.png';
	audio.src = 'lib/popular/'+arr[2]+'.mp3'
	musictext.innerHTML = lyrics[2];
	audio.play();
}
o4.onclick = function songs() {
	musicName.innerHTML = arr[3];
	player.src = 'images/stpp.png';
	audio.src = 'lib/popular/'+arr[3]+'.mp3'
	musictext.innerHTML = lyrics[3];
	audio.play();
}
o5.onclick = function songs() {
	musicName.innerHTML = arr[4];
	player.src = 'images/stpp.png';
	audio.src = 'lib/popular/'+arr[4]+'.mp3'
	musictext.innerHTML = lyrics[4];
	audio.play();
}
