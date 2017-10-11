// $(function () {
// 	alert()
// 	console.log($('.musicProgress>img:nth-child(2)'))
// 	$('#palyer').click(function () {
// 		$('#audio').play();
// 		alert()
// 	})
// })
var row = document.getElementById('row');
var player = document.getElementById('player');
var audio = document.getElementById('audio');
var arr = ["薛之谦 - 动物世界","薛之谦 - 方圆几里","薛之谦 - 绅士","薛之谦 - 我知道你都知道","薛之谦 - 意外","薛之谦、何洁 - 有没有 (Live)","薛之谦、毛不易 - 一半 (Live)"];
var n = 0;
var second; //歌曲总时间
var musicName = document.getElementById('musicName');
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
		audio.src = 'lib/'+arr[n]+'.mp3'

		if(n == arr.length-1){
			n = -1;
		}
		player.src = 'images/stpp.png';
		audio.play();
		timer = setInterval(canpaly,1000);
	}

	pre.onclick = function () {
		n--;
		if(n == -1){
			n = arr.length-1;
		}
		musicName.innerHTML = arr[n];
		audio.src = 'lib/'+arr[n]+'.mp3'
		player.src = 'images/stpp.png';
		audio.play();
		timer = setInterval(canpaly,1000);
	}

// 循环播放
var onex = document.getElementById('onex');
var num = 1;

// 初始循环单曲
	audio.onended = function () {
		n++;
		musicName.innerHTML = arr[n];
		audio.src = 'lib/'+arr[n]+'.mp3'
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
			audio.src = 'lib/'+arr[n]+'.mp3'
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
			audio.src = 'lib/'+arr[n]+'.mp3'
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
	newbom1 = 50 - disY;
	bar.style.bottom = newbom1 + 'px';
	current.style.height = newbom1 + 'px';
	audio.volume = newbom1*2/100;
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

var b = 0;
 
var timer = setInterval(canpaly,1000);

function updateTime(){
	var ct = parseInt(audio.currentTime);

}

// 补0
function toZero(zero) {
	if(zero <= 9){
		return '0'+zero;
	}else{
		return ''+zero;
	}
}



