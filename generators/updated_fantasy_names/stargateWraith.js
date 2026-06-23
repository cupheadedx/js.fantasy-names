var nm1 = ["action","air","ambition","answer","aspect","author","balance","beam","bit","bite","bone","bonus","brain","brave","breath","burst","call","calm","care","catch","chain","champion","change","chaos","charge","choice","claim","cloud","clover","clue","code","coil","cold","copper","count","courage","cross","cycle","dark","data","death","design","desire","despair","dime","dirt","divide","doll","dot","draw","dream","drink","dust","edge","end","error","escape","event","fall","fight","fire","flame","flavor","flight","flock","flow","fluke","fog","fold","force","front","game","ghost","gift","glass","goal","gold","grace","grand","guard","guest","guide","hand","harm","health","heart","hide","hold","honor","horn","ice","image","impulse","ink","iron","jewel","judge","justice","kind","knowledge","law","leader","lesson","life","light","limit","link","loan","loss","luck","march","mask","master","matter","memory","mercy","metal","might","mind","mist","moment","moon","mud","need","night","part","passage","patch","path","peak","phase","pride","quiet","quill","ray","record","rest","riddle","risk","role","root","rush","scale","scheme","science","sea","seat","secret","sense","shade","shadow","shape","shift","shine","shore","sign","silk","sky","sleet","slide","smile","smoke","snow","soil","song","sorrow","sound","space","spark","spell","star","steam","stitch","storm","stream","strike","sun","talent","temper","thunder","time","trick","trust","truth","veil","wish","writer"];
var nm2 = ["all","blank","bleak","blind","bold","brash","bright","broad","calm","clear","cold","cruel","deep","dark","dim","dual","even","faint","fair","false","far","fast","fine","free","full","gentle","giant","glass","glum","gold","grand","grim","half","high","hollow","ill","keen","key","kind","last","light","lone","long","lost","loud","low","mad","mild","minor","new","next","numb","odd","old","past","plain","proud","pure","quick","quiet","rapid","rare","right","sharp","silent","slim","slow","small","soft","stark","stout","swift","thin","torn","true","twin","vast","warp","whole","wide","wild","wise"];
var nm3 = ["action","air","ambition","answer","aspect","author","balance","beam","bit","bite","bone","bonus","brain","brave","breath","burst","call","catch","chain","champion","change","chaos","charge","choice","cloud","clover","clue","copper","count","courage","cross","cycle","data","death","dime","dirt","doll","dot","draw","dream","drink","dust","edge","end","fall","fight","fire","flame","flight","flock","flow","fluke","fog","fold","force","front","game","ghost","gift","goal","gold","grace","guard","guest","guide","hand","harm","health","heart","hide","hold","honor","horn","ice","ink","iron","jewel","judge","kind","law","life","light","link","loss","luck","march","mask","master","matter","memory","mercy","metal","might","mind","mist","moon","mud","need","night","part","patch","path","peak","phase","pride","quiet","quill","ray","rest","risk","role","root","rush","scale","sea","seat","secret","sense","shade","shadow","shape","shift","shine","sign","silk","sky","sleet","slide","smile","smoke","snow","song","sorrow","sound","space","spark","spell","star","steam","stitch","storm","stream","strike","sun","talent","temper","thunder","time","trick","trust","truth","veil","wish"];


function nameGen(){
	$('#placeholder').css('textTransform', 'capitalize');
	var br = "";
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		nTp = Math.random() * 2 | 0;
		if(nTp === 1){
			rnd = Math.random() * nm1.length | 0;
			names = nm1[rnd];
		}else{
			rnd = Math.random() * nm2.length | 0;
			rnd2 = Math.random() * nm3.length | 0;
			while(nm3[rnd2] === nm2[rnd]){
				rnd2 = Math.random() * nm3.length | 0;
			}
			names = nm2[rnd] + nm3[rnd2];
		}
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(names));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}