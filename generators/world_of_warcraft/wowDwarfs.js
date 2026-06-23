if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","","","b","bh","br","d","dr","g","gr","h","hj","j","k","kh","kr","m","r","s","t","th"];
var nm2 = ["ui","ou","y","a","e","i","o","u","a","o","u","a","e","i","o","u","a","o","u","a","e","i","o","u","a","o","u"];
var nm3 = ["d","dr","g","gd","gn","gr","k","l","ld","lf","m","md","n","nd","ng","r","rm","rd","rg","rr","rn"];
var nm4 = ["ia","iu","ou","ua","a","e","i","o","u","a","o","u","a","e","i","o","u","a","o","u","a","e","i","o","u","a","o","u","a","e","i","o","u","a","o","u","a","e","i","o","u","a","o","u"];
var nm5 = ["d","dr","g","gr","h","k","m","n","r","th","d","dr","g","gr","h","k","m","n","r","th","hd","hdr","hr","hgr","hm","hn","hr","hrd","hrg","hrn","rd","rdr","rg","rgr","rh","rk","rm","rn","rr","rth"];
var nm6 = ["g","gg","ggs","gs","hm","hr","k","l","m","n","nd","nn","r","rm","rn","s","th"];

var nm7 = ["","","","","","b","br","d","g","gw","j","k","l","m","n","r","s","t","th","tw"];
var nm8 = ["ae","ea","ei","ey","ai","a","a","e","e","i","o","u","y","a","a","e","e","i","o","u","y","a","a","e","e","i","o","u","y","a","a","e","e","i","o","u","y","o","o"];
var nm9 = ["d","g","gl","hd","hg","l","ll","m","md","mw","mm","n","ng","ngr","nn","nl","nm","nv","r","s","sh","ss","st","t","v","z"];
var nm10 = ["ia","io","ou","ua","y","a","i","e","o","u","a","i","e","o","u","a","i","e","o","u","a","i","e","o","u","a","i","e","o","u","a","i","e","o","u"];
var nm11 = ["d","g","gl","h","l","m","n","r","t","th","v","w","wh","hd","hg","hgl","hl","hm","hn","hr","ht","hv","hw","md","mg","mgl","ml","mn","mr","mv","mw","mwh","mm","nd","ng","ngl","nl","nm","nn","nr","nt","nth","nv","nw","nwh"];
var nm12 = ["","","","","","","","","","","","","","","","l","n","n","n","nn","s","ss"];

var nm13 = ["arctic","barley","battle","black","blank","bold","bone","boulder","brave","bright","broad","bronze","cask","cliff","coarse","cold","cool","crag","dark","deep","dim","dirge","doom","drunk","dual","eager","even","far","fire","firm","first","flint","frost","frozen","full","fuse","giant","gold","golden","good","great","grim","half","hammer","hard","high","ice","iron","keen","kind","last","light","long","loud","mad","marble","might","molten","mountain","odd","old","onyx","pale","quick","red","rust","short","slate","slow","smug","snow","stark","steel","stern","stone","storm","stout","strong","swift","thunder","tough","true","twin","vast","war","wild"];
var nm14 = ["arm","axe","back","battle","bear","beard","beer","belch","belcher","belly","belt","blade","boot","boots","bottom","braid","branch","brand","breaker","breath","brew","brow","buster","cave","crag","depth","drink","dust","fall","favor","feast","field","fight","fist","flayer","flight","flow","force","forge","front","fury","game","gate","gem","gift","grace","grip","guard","hammer","hand","handle","head","heart","helm","hold","honor","horn","host","kind","mail","mane","mantle","mask","might","night","ore","pass","past","patch","peak","pike","power","pride","reach","rest","river","roar","rock","shaper","shield","shout","song","stand","steel","stone","storm","strike","tale","task","toe","ward"];

function generator$world_of_warcraft$wowDwarfs(type){
	i = Math.floor(Math.random() * 10);

	var tp = type;
	if(tp === 1){
			nameFem();
			while(nMs === ""){
				nameFem();
			}
		}else{
			nameMas();
			while(nMs === ""){
				nameMas();
			}
		}
		rnd = Math.random() * nm13.length | 0;
		rnd2 = Math.random() * nm14.length | 0;
		while(nm13[rnd] === nm14[rnd2]){
			rnd2 = Math.random() * nm14.length | 0;
		}
		names = nMs + " " + nm13[rnd] + nm14[rnd2];
		return names;
}

function nameMas(){
	nTp = Math.random() * 6 | 0
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm6.length | 0;
	rnd4 = Math.random() * nm3.length | 0;
	rnd5 = Math.random() * nm4.length | 0;
	while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm6[rnd3]){
		rnd4 = Math.random() * nm3.length | 0;
	}
	if(nTp < 4){
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
	}else{
		rnd6 = Math.random() * nm2.length | 0;
		rnd7 = Math.random() * nm5.length | 0;
		while(nm5[rnd7] === nm3[rnd4] || nm5[rnd7] === nm6[rnd3]){
			rnd7 = Math.random() * nm5.length | 0;
		}
		if(nTp === 4){
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm2[rnd6] + nm5[rnd7] + nm4[rnd5] + nm6[rnd3];
		}else{
			nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd7] + nm2[rnd6] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
		}
	}
	testSwear(nMs);
}

function nameFem(){
	nTp = Math.random() * 6 | 0
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	rnd3 = Math.random() * nm12.length | 0;
	rnd4 = Math.random() * nm9.length | 0;
	rnd5 = Math.random() * nm10.length | 0;
	while(nm9[rnd4] === nm7[rnd] || nm9[rnd4] === nm12[rnd3]){
		rnd4 = Math.random() * nm9.length | 0;
	}
	if(nTp < 4){
		nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd4] + nm10[rnd5] + nm12[rnd3];
	}else{
		rnd6 = Math.random() * nm8.length | 0;
		rnd7 = Math.random() * nm11.length | 0;
		while(nm11[rnd7] === nm9[rnd4] || nm11[rnd7] === nm12[rnd3]){
			rnd7 = Math.random() * nm11.length | 0;
		}
		if(nTp === 4){
			nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd4] + nm8[rnd6] + nm11[rnd7] + nm10[rnd5] + nm12[rnd3];
		}else{
			nMs = nm7[rnd] + nm8[rnd2] + nm11[rnd7] + nm8[rnd6] + nm9[rnd4] + nm10[rnd5] + nm12[rnd3];
		}
	}
	testSwear(nMs);
}