// $(function () {
// 	alert()
// 	console.log($('.musicProgress>img:nth-child(2)'))
// 	$('#palyer').click(function () {
// 		$('#audio').play();
// 		alert()
// 	})
// })
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
		audio.play();
		player.src = 'images/stpp.png';
		
	}else{
		audio.pause();
		player.src = 'images/play.png';
	}
}

// 上一首下一首
	next.onclick = function next() {
		n++;
	
		musicName.innerHTML = arr[n];
		audio.src = 'lib/'+arr[n]+'.mp3'

			if(n == arr.length-1){
			n = -1;
		}
		player.src = 'images/play.png';
	}

	pre.onclick = function () {
		n--;
		if(n == -1){
			n = arr.length-1;
		}
		musicName.innerHTML = arr[n];
		audio.src = 'lib/'+arr[n]+'.mp3'
		player.src = 'images/play.png';
	}

// 循环播放
var onex = document.getElementById('onex');
var num = 1;

// 初始循环单曲
	audio.onended = function () {
		musicName.innerHTML = arr[n];
		audio.src = 'lib/'+arr[n]+'.mp3'
		console.log(n)
		if(n == arr.length-1){
			n = -1;
			}
		audio.play();
};

onex.onclick = function () {
	if( num == 1){
		num = 2;
		onex.src = 'images/restart.png';
		// 自动下一首
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
	}else{
		onex.src = 'images/onex.png';
		audio.onended = function () {
			musicName.innerHTML = arr[n];
			audio.src = 'lib/'+arr[n]+'.mp3'
			console.log(n)
			if(n == arr.length-1){
				n = -1;
				}
			audio.play();
	};
		num = 1;
	}
}

// 音量调节
var bar = document.getElementById('bar')
var current = document.getElementById('current');
bar.onmousedown = function () {
	alert()
	console.log(bar.style.bottom);
	// audio.volume = current.height;
}

 // 进度条
 var progress = document.getElementById('progress');
 var nowPro = document.getElementById('nowPro');

// 歌曲总时间
function canpaly() {
	second = parseInt(audio.seekable.end(0));
	var m = parseInt(second/60),s = second - m*60;
	var sec = parseInt(audio.currentTime);
	var m1 = parseInt(sec/60),s1 = sec - m1*60;
	time.innerHTML = m1+":"+s1+"/"+m+":"+s;
	nowPro.style.width = sec/second*100+'%';
}
// 歌曲时间
var time = document.getElementById('time');
var b = 0;
 setInterval(canpaly,1000)

 var timer = setInterval(function () {

 	// nowPro.width = 30rem/audio.duration;
 },1000);

function updateTime(){
	var ct = parseInt(audio.currentTime);

}

