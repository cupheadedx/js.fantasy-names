if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nm1 = ["","","","","","b","br","cr","chr","d","dr","g","h","j","k","kr","l","m","n","pr","r","s","st","t","th","v","w","y","z"];
var nm2 = ["ee","ou","ei","oe","eo","ie","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","y"];
var nm3 = ["b","bs","c","cch","ch","ck","d","dg","ds","g","gg","gr","j","k","kz","kt","ld","lf","lz","m","mm","n","nn","r","rg","rr","rt","s","st","sd","ts","v","vl","w","x","z"];
var nm4 = ["ia","ee","ao","eo","au","ai","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm5 = ["b","c","d","g","h","k","m","n","b","c","d","g","h","k","m","n","nb","ng","r","rl","t","v","z","t","v","z","r"];
var nm6 = ["","","","","","b","ch","ck","d","k","l","lt","n","ng","r","rd","rg","rts","s","st","t","v","w","x"];

var nm7 = ["","","","","","b","c","ch","j","k","l","m","n","p","ph","r","s","sh","t","th","v","w","y","z"];
var nm8 = ["ay","ei","ey","ue","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm9 = ["c","cl","f","g","gl","gn","h","k","kn","kl","l","ll","lt","ln","m","mm","n","nm","nz","nd","nn","r","rr","rl","rz","s","sh","sl","sc","t","tt","v","z"];
var nm10 = ["ia","ea","ie","ai","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","y","y","y"];
var nm11 = ["c","d","g","j","l","m","n","c","d","g","j","l","m","n","nn","r","s","r","s","sh","v","w","z","v","w","z","zh"];
var nm12 = ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","h","l","n","r","s","th"];

var nm13 = ["","","","","","b","bl","c","ch","cl","d","dr","f","g","gr","h","k","l","m","n","p","r","s","sc","sh","st","str","t","tr","v","w"];
var nm14 = ["ee","ea","au","eu","ae","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","y","y","y"];
var nm15 = ["b","c","ch","ck","cl","d","df","dl","g","gn","gr","k","l","lb","lt","m","mm","n","nb","nd","ng","nn","nt","nz","q","r","rh","rl","rm","rn","rt","rv","s","sh","sl","sr","st","t","v","z"];
var nm16 = ["aa","ee","eu","ia","io","ea","ie","ue","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm17 = ["b","d","f","k","l","n","r","s","t","v","z","b","ch","d","f","ff","k","l","ll","n","nn","ns","r","s","t","tt","ts","v","z"];
var nm18 = ["","","","","","h","l","ll","lt","m","n","nd","r","rs","s","ss","t","tt"];

var nm19 = ["Actorr","Advans","Agent","Agile","Aloof","Ambit","Angle","Ants","Antsy","Appeal","Aqua","Arch","Aspect","Banks","Bead","Beatt","Bell","Belle","Berserk","Bird","Bit","Bitt","Blaze","Bold","Bolt","Books","Brash","Brass","Brave","Brighte","Bubble","Burst","Cannon","Cart","Catch","Cent","Chain","Cheek","Cloud","Cloude","Clover","Code","Copper","Cover","Cross","Crown","Cuddle","Darknes","Dazzle","Desyre","Diamond","Dime","Dizzy","Double","Dream","Dubble","Dulle","Eager","Earthe","End","Error","Escape","Fainte","Faith","Faithe","Feast","Feather","Fickle","Fite","Flame","Flight","Flo","Flock","Fluff","Fluke","Fortune","Fowl","Fuel","Fuse","Fuss","Ghost","Gift","Glib","Glove","Glum","Grace","Grade","Grande","Grave","Grief","Grimm","Hearth","Honor","Husky","Ice","Ink","Jade","Jaggy","Jazzy","Jewell","Joly","Journey","Judge","Knott","Kooky","Leaf","Light","Livid","Locket","Lone","Love","Lucky","Lush","Macho","Marble","Mask","Mello","Mellow","Memory","Metal","Minut","Mirror","Mitten","Mold","Motion","Mouse","Mushy","Night","Nimble","Nippy","Novel","Numb","Omen","Onyx","Patch","Peace","Phase","Pickle","Pitch","Pockett","Pride","Prime","Printe","Prism","Pryme","Puffy","Rash","Ray","Red","Requiem","Riche","Riddle","Robin","Ruby","Salte","Sapphire","Sass","Sassy","Scale","Shabby","Shift","Shine","Shril","Sickle","Silk","Silver","Slide","Smoke","Snaile","Spark","Spelle","Spite","Spot","Stark","Stitch","Storm","Storme","Stout","Surprise","Sweets","Swift","Switch","Temper","Tempes","Thril","Thunder","Truthe","Twiste","Veil","Web","Whistle","Zephir"];

function generator$fairy_tail$fairyTailNames(type){
	i = Math.floor(Math.random() * 10);

	var tp = type;
	nameSur();
		while(nSr === ""){
			nameSur();
		}
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
		names = nMs + " " + nSr;
		return names;
}

function nameMas(){
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm6.length | 0;
	if(i < 3){
		while(nm1[rnd] === ""){
			rnd = Math.random() * nm1.length | 0;
		}
		while(nm6[rnd3] === nm1[rnd]){
			rnd3 = Math.random() * nm6.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm6[rnd3];
	}else{
		rnd4 = Math.random() * nm3.length | 0;
		rnd5 = Math.random() * nm4.length | 0;
		while(rnd2 < 6 && rnd5 < 6){
			rnd5 = Math.random() * nm4.length | 0;
		}
		if(i < 7){
			while(nm1[rnd] === nm3[rnd4] || nm3[rnd4] === nm6[rnd3]){
				rnd4 = Math.random() * nm3.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd4] + nm4[rnd5] + nm6[rnd3];
		}else{
			rnd4 = Math.random() * nm5.length | 0;
			rnd6 = Math.random() * nm5.length | 0;
			rnd7 = Math.random() * nm4.length | 0;
			while(nm5[rnd6] === nm5[rnd4] || nm5[rnd6] === nm6[rnd3]){
				rnd6 = Math.random() * nm5.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm5[rnd4] + nm4[rnd5] + nm5[rnd6] + nm4[rnd7] + nm6[rnd3];
		}
	}
	testSwear(nMs);
}

function nameFem(){
	rnd = Math.random() * nm7.length | 0;
	rnd2 = Math.random() * nm8.length | 0;
	rnd3 = Math.random() * nm12.length | 0;
	if(i < 3){
		while(nm12[rnd3] === nm7[rnd]){
			rnd = Math.random() * nm7.length | 0;
		}
		nMs = nm7[rnd] + nm8[rnd2] + nm12[rnd3];
	}else{
		rnd4 = Math.random() * nm9.length | 0;
		rnd5 = Math.random() * nm10.length | 0;
		while(rnd2 < 4 && rnd5 < 4){
			rnd5 = Math.random() * nm10.length | 0;
		}
		if(i < 7){
			while(nm7[rnd] === nm9[rnd4] || nm9[rnd4] === nm12[rnd3]){
				rnd4 = Math.random() * nm9.length | 0;
			}
			nMs = nm7[rnd] + nm8[rnd2] + nm9[rnd4] + nm10[rnd5] + nm12[rnd3];
		}else{
			rnd4 = Math.random() * nm11.length | 0;
			rnd6 = Math.random() * nm11.length | 0;
			rnd7 = Math.random() * nm10.length | 0;
			while(nm11[rnd6] === nm11[rnd4] || nm11[rnd6] === nm12[rnd3]){
				rnd6 = Math.random() * nm11.length | 0;
			}
			nMs = nm7[rnd] + nm8[rnd2] + nm11[rnd4] + nm10[rnd5] + nm11[rnd6] + nm10[rnd7] + nm12[rnd3];
		}
	}
	testSwear(nMs);
}

function nameSur(){
	sTp = Math.random() * 6 | 0;
	rnd = Math.random() * nm13.length | 0;
	rnd2 = Math.random() * nm14.length | 0;
	rnd3 = Math.random() * nm18.length | 0;
	if(sTp === 0){
		while(nm18[rnd3] === nm13[rnd]){
			rnd3 = Math.random() * nm18.length | 0;
		}
		nSr = nm13[rnd] + nm14[rnd2] + nm18[rnd3];
	}else if(sTp < 4){
		rnd4 = Math.random() * nm15.length | 0;
		rnd5 = Math.random() * nm16.length | 0;
		while(rnd2 < 5 && rnd5 < 8){
			rnd5 = Math.random() * nm16.length | 0;
		}
		while(nm13[rnd] === nm15[rnd4] || nm15[rnd4] === nm18[rnd3]){
			rnd4 = Math.random() * nm15.length | 0;
		}
		if(sTp < 3){
			nSr = nm13[rnd] + nm14[rnd2] + nm15[rnd4] + nm16[rnd5] + nm18[rnd3];
		}else{
			rnd4 = Math.random() * nm17.length | 0;
			rnd6 = Math.random() * nm17.length | 0;
			rnd7 = Math.random() * nm16.length | 0;
			while(nm17[rnd6] === nm17[rnd4] || nm17[rnd6] === nm18[rnd3]){
				rnd6 = Math.random() * nm17.length | 0;
			}
			nSr = nm13[rnd] + nm14[rnd2] + nm17[rnd4] + nm16[rnd5] + nm17[rnd6] + nm16[rnd7] + nm18[rnd3];
		}
	}else{
		rnd = Math.random() * nm19.length | 0;
		nSr = nm19[rnd];
	}
	testSwear(nSr);
}