if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","b","c","d","f","g","gl","gn","h","k","kl","kr","l","m","p","t","th"];
var nm2 = ["a","e","i","o","u","i","i","ee"];
var nm3 = ["b","c","d","k","kl","l","m","n","nc","r","t","th","tl","ttl","cl","ck","ld","lk","ll","mk","ml","nb","nd","nk","nl","rk","rl","tk","tl","thk"];
var nm4 = ["a","e","i","o","u","i","i","a","e","i","o","u","i","i","ee"];
var nm5 = ["b","bl","br","d","f","fl","g","k","kl","l","m","n","nkl","rg","s","r","t","th","v","w"];
var nm6 = ["","","c","ck","k","n","nk","rn","s","sh","zz"];

var nm7 = ["","","b","d","f","g","gl","gn","h","j","k","kl","l","m","n","p","s","t","th"];
var nm8 = ["a","e","i","o","u","i","i","e","y"];
var nm9 = ["b","d","k","l","m","n","nk","nn","p","r","s","ss","t","th","tl","ttl","x","lb","ld","lk","ll","mk","nd","nk","nkl","sk","sl","tk","tkl"];
var nm10 = ["a","e","i","o","u","i","a","e","i","o","u","i","a","e","i","o","u","i","ey","ee"];
var nm11 = ["b","bl","br","d","f","fl","g","k","kl","l","m","n"];
var nm12 = ["","","","","","ck","k","l","ll","n","nk","s","sh","z","zz"];

var nm13 = ["acer","angle","battle","bellow","berry","billow","bizz","black","brass","brisk","buzz","buzzin","cast","click","clock","cog","coil","copper","dazzle","draxle","dual","fast","fine","fix","fizzle","flicker","fluke","fuzz","fuzzy","gear","grimey","grind","grip","heavy","light","lock","luck","mecha","mekka","mint","nifty","oil","oily","over","pipe","pitch","porter","puddle","pull","pulse","pump","quick","quiet","quirk","rail","rust","sad","scratch","sharp","shift","shine","shiny","short","silver","single","slip","spanner","spark","sparkle","spring","spry","squiggle","steam","stitch","storm","strike","swift","switch","teeny","temper","thistle","thunder","tidy","tink","tinker","toggle","tossle","trick","tricky","twist","wheel","whistle","wiggle","wire","wobble","wrench"];
var nm14 = ["badge","balloon","bang","beam","bell","bells","bit","blast","block","bonk","boss","box","brain","brake","branch","brass","brick","bus","cable","case","chalk","chart","cheek","chin","click","clock","clue","cog","coil","collar","cookie","cord","count","craft","crank","crown","cub","cup","data","dish","disk","dock","drop","dwadle","field","fizz","fizzle","flow","fluke","fuse","fuzz","gauge","gear","grinder","guard","hammer","heart","house","kettle","laugh","light","locket","master","mix","needle","nozzle","patch","phase","pickle","pipe","pitch","pocket","riddle","scheme","shape","signal","span","spanner","spark","spell","spindle","spinner","spring","sprocket","steel","stitch","strip","torque","trick","twist","whistle","wire","wizzle","wrench"];

function generator$world_of_warcraft$wowGnomes(type){
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