if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","b","br","d","dr","g","gr","h","j","m","n","r","s","v","z"];
var nm2 = ["a","e","i","o","u"];
var nm3 = ["bl","cd","ckl","ct","dj","dl","g","gd","gl","gt","j","kl","lj","ld","nd","ng","nt","rgl","rkl","rd","rj","rt"];
var nm4 = ["a","e","i","o"];
var nm5 = ["","","","","","","","c","d","f","ff","g","gg","hh","k","kk","n","r","rg","rk","z","zg","zk","zz"];

var nm6 = ["back","bark","bash","bat","blight","blot","blotch","bold","brash","bruise","bunk","cane","champ","chaw","chew","chomp","crunch","crush","dart","dash","dirt","gash","glum","gnarl","gnaw","grim","growl","guff","howl","lash","mash","mold","muck","mud","munch","mutter","quick","rash","raw","razz","rend","rib","ridge","rip","rot","rush","sage","scourge","shred","snaggle","snap","snarl","snatch","speck","spot","squash","swift","taint","tear","thrash","trash","whip","yap","yelp"];
var nm7 = ["axe","back","bite","blade","bone","brawn","chaser","chopper","claw","club","coat","crest","crook","fang","flesh","fringe","fur","gore","hide","hook","mane","meat","muzzle","nose","paw","pelt","pike","ridge","skull","sniffer","snout","spear","stick","teeth","tooth","tuft"];

function generator$world_of_warcraft$wowGnoll(type){
	i = Math.floor(Math.random() * 10);

	var tp = type;
	nameMas();
		while(nMs === ""){
			nameMas();
		}
		rnd = Math.random() * nm6.length | 0;
		rnd2 = Math.random() * nm7.length | 0;
		while(nm6[rnd] === nm7[rnd2]){
			rnd2 = Math.random() * nm7.length | 0;
		}
		nMs = nMs + " " + nm6[rnd] + nm7[rnd2];
		return nMs;
}

function nameMas(){
	nTp = Math.random() * 2 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm5.length | 0;
	if(nTp === 0){
		while(nm1[rnd] === ""){
			rnd = Math.random() * nm1.length | 0;
		}
		while(nm1[rnd] === nm5[rnd3] || nm5[rnd3] === ""){
			rnd3 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd3];
	}else{
		rnd4 = Math.random() * nm3.length | 0;
		rnd5 = Math.random() * nm4.length | 0;
		while(nm3[rnd4] === nm1[rnd] || nm3[rnd4] === nm5[rnd3]){
			rnd4 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm5[rnd3];
	}
	testSwear(nMs);
}