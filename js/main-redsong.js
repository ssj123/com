
var row = document.getElementById('row');
var player = document.getElementById('player');
var audio = document.getElementById('audio');
var arr = ["彭丽媛 - 十送红军","宋祖英 - 映山红","苏小明 - 军港之夜","阎维文 - 强军战歌","阎维文 - 说句心里话"];
var lyrics = ["十送红军<br />演唱：宋祖英<br />一送(里格)红军(介支个)下了山<br />秋雨(里格)绵绵(介支个)秋风寒<br />树树(里格)梧桐叶落尽<br />愁绪(里格)万千压在心间<br />问一声亲人红军啊<br />几时(里格)人马(介支个)再回山<br />七送(里格)红军(介支个)五斗江<br />江上(里格)船儿(介支个)穿梭忙<br />千军万马(介支个)江边站<br />十万百姓泪汪汪<br />恩情似海不能忘<br />红军啊<br />革命成功(介支个)早回乡<br />九送红军上大道<br />锣儿无声鼓不敲<br />鼓不敲<br />双双(里格)拉着长茧的手<br />心像(里格)黄连脸在笑<br />血肉之情怎能忘<br />红军啊<br />盼望(里格)早日(介支个)传捷报<br />十送(里格)红军(介支个)望月亭<br />望月(里格)亭上(介支个)搭高台<br />台高(里格)十丈白玉柱<br />雕龙(里格)画凤放呀放光彩<br />朝也盼来晚也想<br />红军啊<br />这台(里格)名叫(介支个)望红台","映山红<br />演唱：宋祖英<br />夜半三更哟盼天明<br />寒冬腊月哟盼春风<br />若要盼得哟红军来<br />岭上开遍哟映山红<br />若要盼得哟红军来<br />岭上开遍哟映山红<br />岭上开遍哟映山红<br />岭上开遍哟映山红<br />夜半三更哟盼天明<br />寒冬腊月哟盼春风<br />若要盼得哟红军来<br />岭上开遍哟映山红<br />若要盼得哟红军来<br />岭上开遍哟映山红<br />岭上开遍哟映山红<br />岭上开遍哟映山红<br />若要盼得哟红军来<br />岭上开遍哟映山红<br />岭上开遍哟映山红<br />岭上开遍哟映山红","苏小明 - 军港之夜<br />军港的夜啊静悄悄，<br />海浪把战舰轻轻地摇，<br />年轻的水兵头枕着波涛，<br />睡梦中露出甜美的微笑<br />海风你轻轻地吹，<br />海浪你轻轻地摇，<br />年轻的水兵多么辛劳<br />回到了祖国母亲的怀抱，<br />让我们的水兵好好睡觉。<br />music<br />军港的夜啊静悄悄，<br />海浪把战舰轻轻地摇，<br />年轻的水兵头枕着波涛，<br />睡梦中露出幸福的微笑<br />海风你轻轻地吹，<br />海浪你轻轻地摇，<br />年轻的水兵多么辛劳<br />回到了祖国母亲的怀抱，<br />让我们的水兵好好睡觉.<br />music<br />军港的夜啊静悄悄，<br />海浪把战舰轻轻地摇，<br />年轻的水兵头枕着波涛，<br />睡梦中露出幸福的微笑<br />海风你轻轻地吹，<br />海浪你轻轻地摇，<br />年轻的水兵多么辛劳<br />待到朝霞映红了海面，<br />看我们的战舰又要起锚<br />music<br />music","强军战歌<br />作词：王晓岭<br />作曲：印青<br />演唱：阎维文<br />听吧 新征程号角吹响<br />强军目标召唤在前方<br />国要强 我们就要担当<br />战旗上写满铁血荣光<br />将士们 听党指挥<br />能打胜仗作风优良<br />不惧强敌 敢较量<br />为祖国决胜疆场<br />听吧 新征程号角吹响<br />强军目标召唤在前方<br />国要强 我们就要担当<br />战旗上写满铁血荣光<br />将士们 听党指挥<br />能打胜仗作风优良<br />不惧强敌 敢较量<br />为祖国决胜疆场<br />将士们 听党指挥<br />能打胜仗作风优良<br />不惧强敌敢较量<br />为祖国决胜疆场<br />决胜疆场","说句心里话<br />说句心里话 我也想家<br />家中的老妈妈 已是满头白发<br />说句那实在话 我也有爱<br />常思念那个梦中的她 梦中的她<br />来来来来 既然来当兵<br />来来来 就是责任大<br />你不扛枪 我不扛枪<br />谁来保卫咱妈妈 谁来保卫她，谁来保卫她<br />说句心里话 我也不傻<br />我懂得从军的路上风吹雨打<br />说句实在话 我也有情<br />人间的那个烟火把我养大<br />来来来来 话虽这样说<br />来来来 有国才有家<br />你不站岗 我不站岗<br />谁来保卫咱祖国 谁来保卫家 谁来保卫家<br />来来来 来来来来来 来来来来来来来来<br />你不站岗 我不站岗"]
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
		audio.src = 'lib/redsong/'+arr[n]+'.mp3';
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
		audio.src = 'lib/redsong/'+arr[n]+'.mp3';
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
		audio.src = 'lib/redsong/'+arr[n]+'.mp3';
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
			audio.src = 'lib/redsong/'+arr[n]+'.mp3'
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
			audio.src = 'lib/redsong/'+arr[n]+'.mp3';
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
	audio.src = 'lib/redsong/'+arr[0]+'.mp3'
	musictext.innerHTML = lyrics[0];
	audio.play();
}
o2.onclick = function songs() {
	musicName.innerHTML = arr[1];
	player.src = 'images/stpp.png';
	audio.src = 'lib/redsong/'+arr[1]+'.mp3'
	musictext.innerHTML = lyrics[1];
	audio.play();
}
o3.onclick = function songs() {
	musicName.innerHTML = arr[2];
	player.src = 'images/stpp.png';
	audio.src = 'lib/redsong/'+arr[2]+'.mp3'
	musictext.innerHTML = lyrics[2];
	audio.play();
}
o4.onclick = function songs() {
	musicName.innerHTML = arr[3];
	player.src = 'images/stpp.png';
	audio.src = 'lib/redsong/'+arr[3]+'.mp3'
	musictext.innerHTML = lyrics[3];
	audio.play();
}
o5.onclick = function songs() {
	musicName.innerHTML = arr[4];
	player.src = 'images/stpp.png';
	audio.src = 'lib/redsong/'+arr[4]+'.mp3'
	musictext.innerHTML = lyrics[4];
	audio.play();
}

