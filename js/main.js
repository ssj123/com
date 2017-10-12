
var row = document.getElementById('row');
var player = document.getElementById('player');
var audio = document.getElementById('audio');
var arr = ["金志文、徐佳莹 - 远走高飞","薛之谦 - 暧昧","薛之谦 - 动物世界","薛之谦 - 方圆几里","薛之谦 - 绅士","薛之谦 - 我知道你都知道","薛之谦 - 意外","薛之谦、何洁 - 有没有 (Live)","薛之谦、毛不易 - 一半 (Live)","尹正 - 一生所爱"];
var lyrics = ["远走高飞(合唱版) - 金志文&徐佳莹 <br />词：王耀光 <br />曲：金志文 <br />我一路看过千山和万水 <br />我的脚踏遍天南和地北 <br />日晒或是风吹 <br />我都无所谓 <br />路边那朵蔷薇 <br />鲜红的纯粹 <br />关掉了手机管他谁是谁 <br />不要去理会是是与非非 <br />天亮走到天黑 从不觉疲惫 <br />黄昏中的堡垒 多颓废 <br />如果迎着风就飞 <br />俯瞰这世界有多美 <br />让烦恼都灰飞 <br />别去理会自我藉慰 <br />如果还有梦就追 <br />至少不会遗憾后悔 <br />迎着光勇敢追 远走高飞 <br />说走就走一回 <br />翻过了山坡又踏过了水 <br />跟心走别管东南和西北 <br />前行还是后退 <br />靠直觉发挥 <br />落日下的余晖 <br />有一点凄美 <br />拥挤的城市布满了虚伪 <br />何必去辩解是错或是对 <br />就让一切回归 童真的滋味 <br />那自由的感觉 不会累 <br />如果迎着风就飞 <br />俯瞰这世界有多美 <br />让烦恼都灰飞 <br />别去理会自我藉慰 <br />如果还有梦就追 <br />至少不会遗憾后悔 <br />迎着光勇敢追 远走高飞 <br />说走就走一回 <br />如果迎着风就飞 <br />俯瞰这世界有多美 <br />让烦恼都灰飞 <br />别去理会自我藉慰 <br />如果还有梦就追 <br />至少不会遗憾后悔 <br />迎着光勇敢追 远走高飞 <br />说走就走一回 ","暧昧<br />作词：薛之谦作曲：薛之谦演唱：薛之谦<br />反正现在的感情 都暧昧<br />你大可不必为难 找般配<br />付出过的人排队 谈体会<br />趁年轻别害怕一个人睡<br />可能是现在感情 太昂贵<br />让付出真心的人 好狼狈<br />还不如听首情歌 的机会 忘了谁<br />感情像牛奶一杯 越甜越让人生畏<br />都早有些防备 润色前的原味<br />所以人们都拿起咖啡 把试探放在两人位<br />距离感一对 就不必再赤裸相对<br />反正现在的感情 都暧昧<br />你大可不必为难 找般配<br />付出过的人排队 谈体会<br />弃之可惜 食而无味<br />可能是现在感情 太珍贵<br />让付出真心的人 好疲惫<br />谁不曾用过卑微的词汇 想留住谁<br />还贪恋着衣衫昂贵 却输给了廉价香水<br />他先诱你入位 还刻意放低了分贝<br />可感情越爱越妩媚 像烂掉的苹果一堆<br />连基因都不对 还在意什么鱼腥味<br />反正现在的感情 都暧昧<br />你大可不必为难 找般配<br />何必给自己沉迷 的机会<br />不如用误会来结尾<br />反正现在的我们 算暧昧<br />我愿意给的感情 请浪费<br />反正流过的眼泪 难收回<br />就别再安慰<br />看你入眠的侧脸 有多美<br />和你丢下的一切 好匹配<br />我还以为我能 多狼狈<br />我自以为<br />制作人：郑伟<br />编曲：薛之谦 郑伟<br />混音：郑伟<br />大提琴：周润青<br />女声：孟楠<br />合音：薛之谦 张石狄<br />录音：莫家伟<br />母带：Chris Gehringer","动物世界<br />作词:薛之谦<br />作曲:郭顶<br />演唱:薛之谦<br />东打一下西戳一下<br />动物未必需要尖牙<br />示爱的方法有礼貌或是我管它<br />要将情人一口吞下<br />还要显得温文尔雅<br />螳螂委屈的展示旧伤疤<br />求偶时候一惊一乍<br />因为害怕时常倒挂<br />走投无路的情况下舍弃了尾巴<br />如果不能将它同化就寄生于它 大不了一同腐化<br />努力进化 笑动物世界都太假<br />祖先 已磨去爪牙<br />相爱相杀 一定有更好的办法<br />攀比一下 谁先跪下<br />不再进化 动物世界里都太傻<br />为情表现到浮夸<br />得到了你就该丢下 人性来不及粉刷<br />所以啊 人总患孤寡<br />麋鹿本来约在树下<br />说好一起浪迹天涯<br />系上铃铛还在往那个方向挣扎<br />如果有只豺狼它英勇披上婚纱 同伴笑他读过童话<br />别再进化 别让动物世界太假<br />我们 该露出爪牙<br />相爱相杀 别再想更好的办法<br />优胜劣汰 自舔伤疤<br />假装进化 拼命想和动物有差<br />玩一出高贵优雅<br />在人们腐烂的欲望下 兽性来不及抹杀<br />算了吧 懒得去挣扎<br />人类用沙 想捏出梦里通天塔<br />为贪念不惜代价<br />驾驭着昂贵的木马 巢穴一层层叠加<br />最后啊 却一丝不挂 别害怕 我们都孤寡<br />制作人：郭顶<br />编曲/钢琴/贝斯：陈迪<br />鼓：王斌<br />弦乐：国际首席爱乐乐团<br />第一小提琴：李朋 王大毛庞阔 张浩 杨爽 李曦 刘潇 高言 杨思宇 倪冰雪<br />第二小提琴：简蓓 阎红 张晨迪 唐昕 侯宇红 张雷 徐文超<br />中提琴：何辉 毕芳 武文豪 陈欣欣 王羽沛<br />大提琴：张平 郎莹 陈俊杰 孙艺 邵鑫<br />低音提琴：周旭 段然<br />录音：汝文博 （Big J Studio. beijing.)<br />混音：赵靖（Big J Studio. beijing.）<br />母带：Tom Coyne （Sterlingsound NYC.）","方圆几里<br />词：薛之谦 曲：薛之谦<br />演唱：薛之谦<br />感觉很诚恳 是好事<br />不需要发誓 那么幼稚<br />本以为可以 就这样随你<br />反正我也无处可去<br />我怕太负责任的人<br />因为他随时会牺牲<br />爱不爱都可以 我怎样都依你<br />连借口 我都帮你寻<br />与其在你不要的世界里<br />不如痛快把你忘记<br />这道理谁都懂 说容易 爱透了还要嘴硬<br />我宁愿 留在你方圆几里<br />我的心 要不回就送你<br />因为我爱你 和你没关系<br />感觉会压抑 的样子<br />勉强 也没什么意思<br />我不算很自私 也越来越懂事<br />爱你只是我的事<br />与其在你不要的世界里<br />不如痛快把你忘记<br />这道理谁都懂 说容易 爱透了还要嘴硬<br />我宁愿 留在你方圆几里<br />至少能感受你的悲喜<br />在你需要我的时候 就能陪你<br />我在你 不要的世界里<br />何苦不找个人来代替<br />可惜我 谁劝都不停<br />我宁愿 留在你方圆几里<br />我的心 要不回就送你<br />爱不爱都可以 我怎样都依你<br />因为我爱你 和你没关系<br />我的爱 扩散在方圆几里<br />近的能 听见你的呼吸<br />只要你转身 我就在这里","绅士<br />作词：薛之谦<br />作曲：薛之谦<br />演唱：薛之谦<br />好久没见了什么角色呢<br />细心装扮着<br />白色衬衫的袖扣是你送的<br />尽量表现着像不在意的<br />频繁暴露了自欺欺人者<br />越掩饰越深刻<br />你说我说听说<br />忍着言不由衷的段落<br />我反正决定自己难过<br />我想摸你的头发<br />只是简单的试探啊<br />我想给你个拥抱<br />像以前一样可以吗<br />你退半步的动作认真的吗<br />小小的动作伤害还那么大<br />我只能扮演个绅士<br />才能和你说说话<br />我能送你回家吗<br />可能外面要下雨啦<br />我能给你个拥抱<br />像朋友一样可以吗<br />我忍不住从背后抱了一下<br />尺度掌握在不能说想你啊<br />你就当刚认识的绅士<br />闹了个笑话吧<br />尽量表现着善解人意的<br />频繁暴露了不欲人知的v越掩饰越深刻<br />想说听说别说<br />忍着言不由衷的段落<br />我反正注定留在角落<br />我想摸你的头发<br />只是简单的试探啊<br />我想给你个拥抱<br />像以前一样可以吗<br />你退半步的动作认真的吗<br />小小的动作伤害还那么大<br />我只能扮演个绅士<br />才能和你说说话<br />我能送你回家吗<br />可能外面要下雨啦<br />我能给你个拥抱<br />像朋友一样可以吗<br />我忍不住从背后抱了一下<br />尺度掌握在不能说想你啊<br />你就当刚认识的绅士<br />闹了个笑话吧<br />你能给我只左手<br />牵你到马路那头吗<br />我会像以前一样<br />看着来往的车子啊<br />我们的距离在眉间皱了下<br />迅速还原成路人的样子啊<br />越有礼貌我越害怕<br />绅士要放得下","我知道其实你都知道<br />街角有人祝福巷口有人哭<br />是不是感情就该有个胜负<br />你用浓妆来保护 想开口却忍住<br />我已没了退路 你却认输<br />我知道你全都知道<br />保持沉默你不想太计较<br />你看着我就一个微笑<br />让借口变成煎熬<br />但我知道都是我不好<br />你越不计较越显得我渺小<br />你轻轻的拉住我衣角<br />能让我还不至于无可救药<br />街角有人祝福巷口有人哭<br />是不是感情就该有个胜负<br />你用浓妆来保护 想开口却忍住<br />我已没了退路 你却认输<br />我知道你全都知道<br />保持沉默你不想太计较<br />你看着我就一个微笑<br />让借口变成煎熬<br />但我知道都是我不好<br />你越不计较越显得我渺小<br />你轻轻的拉住我衣角<br />能让我还不至于无可救药<br />我知道我全都知道<br />一再忍让是你不想太计较<br />你看着我就一个微笑<br />让借口变成煎熬<br />但我知道都是我不好<br />你越不计较越显得我渺小<br />你轻轻的拉住我衣角<br />能让我还不至于无可救药","歌名：意外<br />作词：杨子朴 作曲：杨子朴<br />歌手：薛之谦<br />我在清晨的路上<br />谁被我遗忘<br />我在深夜里旅行<br />谁被我遗忘<br />肩上的破旧行囊<br />能收藏多少坚强<br />不如全身赤裸<br />还给我那脆弱<br />明知这是一场意外<br />你要不要来<br />明知这是一场重伤害<br />你会不会来<br />当疯狂慢慢从爱情离开<br />还有什么你值得感慨<br />如果风景早已都不存在<br />我想我谁不都爱","有没有 - 何洁&薛之谦 <br />词：郭顶 <br />曲：郭顶 <br />幽默的人都怕误会 这种称谓 <br />这一刻把我当成谁 不如白费 <br />有没有一个人 能拒绝安慰 <br />就剩我一个人 能不能全身而退 <br />有没有真实可以退 如何应对 <br />早知道我何必流泪 我自以为 <br />不习惯这个故事 已经结尾 <br />连错也错的这么美 任谁都会 <br />有没有人比你懂我的防备 <br />还是会笑我傻到以为 <br />这真心的话不能给 <br />多残忍也都自己安慰 <br />有没有人比我更惭愧 <br />越热烈越沉默以对 <br />别看我 我不难过 <br />只要你记得我来过 <br />有没有真实可以退 如何应对 <br />早知道我何必流泪 我自以为 <br />不习惯这个故事 已经结尾 <br />连错也错的这么美 任谁都会 <br />有没有人比你懂我的防备 <br />还是会笑我傻到以为 <br />这真心的话不能给 <br />多残忍也都自己安慰 <br />有没有人比我更惭愧 <br />越热烈越沉默以对 <br />别看我 我不难过 <br />只要你记得我来过 <br />有没有人比你懂我的防备 <br />还是会笑我傻到以为 <br />这真心的话不能给 <br />多残忍也都自己安慰 <br />有没有人比我更惭愧 <br />越热烈越沉默以对 <br />别想我 我不难过 <br />只要你记得我来过 <br />只要你记得我来过 ","薛之谦/毛不易 -  一半 (Live)<br />词：薛之谦 <br />曲：李荣浩 <br />编曲：陈思同 byT.Y.Z <br />音乐总监：谭伊哲 <br />乐队：TYZ乐队 <br />乐队队长：黄竣琮 <br />键盘：韩韵/杨猛 <br />鼓手：胡宇飞 <br />吉他：黄竣琮/Andrew Moore （加拿大） <br />贝斯： Ryan Bradetich（美国） <br />和声：王思思/刘芮嘉/宋豪 <br />打击乐：Gman <br />电脑工程：郭丁尘 <br />音乐统筹：吕易秋 <br />毛不易： <br />多平淡 所以自己刻意为难 <br />多遗憾 被抛弃的人没喜感 <br />像被人围起来 就特别放不开 <br />都在期待 角色要坏 <br />别委屈了人才 <br />薛之谦： <br />别期待 伤人的话变得柔软 <br />也别揭穿 剧透的电影不好看 <br />隔墙有只耳朵 嘲笑你多难过 <br />你越反驳 越像示弱 <br />请别再招惹我 <br />毛不易： <br />我可以 为我们的散 承担一半 <br />可我偏要摧毁所有的好感 <br />看上去能孤独的很圆满 <br />薛之谦： <br />我做作的表情让自己很难堪 <br />可感情这玩意儿怎么计算 <br />别两难 嘿 晚安 <br />合： <br />少了有点不甘 <br />但多了太烦 <br />毛不易： <br />多困难 狠话有几句新鲜感 <br />又有多难 掩饰掉全程的伤感 <br />薛之谦： <br />我毁了艘小船 逼我们隔着岸 <br />冷眼旁观 最后一段 <br />对白还有点烂 <br />你可以 为我们的散 不用承担 <br />是我 投入到一半 感到不安 <br />好过未来一点一点纠缠 <br />毛不易： <br />我帮你 摘下的那颗廉价指环 <br />像赠品附送完 人群涣散 <br />心很酸 烟很淡 <br />合： <br />难过若写不完 用情歌刁难 <br />我非要 锈了的皇冠 还不肯摘 <br />在悲伤明显前 举杯离散 <br />为何亏欠的人 特别勇敢 <br />我撑到 你的恨 开始无限扩散 <br />该流的泪才刚刚流一半 <br />别有关 就两断 <br />故事已经说完 懒得圆满 ","尹正 - 一生所爱(《大话西游之爱你一万年》片尾曲)<br />作曲：卢冠廷<br />作词：唐书琛<br />编曲：王梓同<br />从前现在过去了再不来<br />红红落叶长埋尘土内<br />开始终结总是没变改<br />天边的你飘泊在白云外<br />苦海翻起爱恨<br />在世间难逃避命运<br />相亲竟不可接近<br />或我应该相信是缘份<br />情人别后永远再不来<br />无言独坐放眼尘世外<br />鲜花虽会凋谢<br />但会再开<br />一生所爱隐约<br />在白云外<br />苦海翻起爱恨<br />在世间难逃避命运<br />相亲竟不可接近<br />或我应该相信是缘份<br />苦海翻起爱恨<br />在世间难逃避命运<br />相亲竟不可接近<br />或我应该相信是缘份"]
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
		audio.src = 'lib/'+arr[n]+'.mp3'
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
		audio.src = 'lib/'+arr[n]+'.mp3'
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
		audio.src = 'lib/'+arr[n]+'.mp3';
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
			audio.src = 'lib/'+arr[n]+'.mp3';
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
			audio.src = 'lib/'+arr[n]+'.mp3';
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
	audio.src = 'lib/'+arr[0]+'.mp3'
	musictext.innerHTML = lyrics[0];
	audio.play();
}
o2.onclick = function songs() {
	musicName.innerHTML = arr[1];
	player.src = 'images/stpp.png';
	audio.src = 'lib/'+arr[1]+'.mp3'
	musictext.innerHTML = lyrics[1];
	audio.play();
}
o3.onclick = function songs() {
	musicName.innerHTML = arr[2];
	player.src = 'images/stpp.png';
	audio.src = 'lib/'+arr[2]+'.mp3'
	musictext.innerHTML = lyrics[2];
	audio.play();
}
o4.onclick = function songs() {
	musicName.innerHTML = arr[3];
	player.src = 'images/stpp.png';
	audio.src = 'lib/'+arr[3]+'.mp3'
	musictext.innerHTML = lyrics[3];
	audio.play();
}
o5.onclick = function songs() {
	musicName.innerHTML = arr[4];
	player.src = 'images/stpp.png';
	audio.src = 'lib/'+arr[4]+'.mp3'
	musictext.innerHTML = lyrics[4];
	audio.play();
}
o6.onclick = function songs() {
	musicName.innerHTML = arr[5];
	player.src = 'images/stpp.png';
	audio.src = 'lib/'+arr[5]+'.mp3'
	musictext.innerHTML = lyrics[5];
	audio.play();
}
o7.onclick = function songs() {
	musicName.innerHTML = arr[6];
	player.src = 'images/stpp.png';
	audio.src = 'lib/'+arr[6]+'.mp3'
	musictext.innerHTML = lyrics[6];
	audio.play();
}
o8.onclick = function songs() {
	musicName.innerHTML = arr[7];
	player.src = 'images/stpp.png';
	audio.src = 'lib/'+arr[7]+'.mp3'
	musictext.innerHTML = lyrics[7];
	audio.play();
}
o9.onclick = function songs() {
	musicName.innerHTML = arr[8];
	player.src = 'images/stpp.png';
	audio.src = 'lib/'+arr[8]+'.mp3'
	musictext.innerHTML = lyrics[8];
	audio.play();
}
o10.onclick = function songs() {
	musicName.innerHTML = arr[9];
	player.src = 'images/stpp.png';
	audio.src = 'lib/'+arr[9]+'.mp3'
	musictext.innerHTML = lyrics[9];
	audio.play();
}

/*function songTo(j) {
	musicName.innerHTML = arr[j]
		player.src = 'images/stpp.png';
		audio.src = 'lib/'+arr[j]+'.mp3'
		musictext.innerHTML = lyrics[j];
		audio.play();
}

o1.onclick = songTo(0);
o2.onclick = songTo(1);
o3.onclick = songTo(2);
o4.onclick = songTo(3);
o5.onclick = songTo(4);
o6.onclick = songTo(5);*/