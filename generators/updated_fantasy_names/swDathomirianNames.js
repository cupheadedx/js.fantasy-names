var nm1 = ["Aberrant","Abhorrent","Agonizing","Agony","Animal","Antipathy","Archaic","Atrocious","Barbaric","Barbarous","Beast","Beastial","Beastly","Berserk","Berserker","Bestial","Bloodthirsty","Brutal","Brute","Brutish","Bully","Coarse","Crazed","Crude","Cruel","Cruelty","Curse","Cursed","Damned","Death","Demon","Demoniac","Devil","Devilish","Diabolical","Dread","Dreadful","Enmity","Enraged","Evil","Fell","Feral","Ferine","Ferocious","Fiend","Fiendish","Fierce","Fiery","Flagrant","Foul","Frantic","Fume","Fuming","Ghastly","Ghoul","Ghoulish","Grave","Grim","Grisly","Grotesque","Gruesome","Haggard","Harsh","Hateful","Hatred","Heartless","Heinous","Hell","Hellion","Hellish","Hideous","Horrid","Horror","Hysterical","Imp","Impetuous","Infernal","Inflamed","Infuriated","Intense","Ire","Loathe","Loathing","Loathsome","Lupine","Macabre","Mad","Maddened","Malevolence","Malevolent","Malice","Malicious","Malign","Maniac","Maniacal","Merciless","Monster","Monstrosity","Monstrous","Morbid","Mortuary","Murder","Murderous","Nasty","Nefarious","Odious","Ominous","Pest","Pitiless","Rabid","Rage","Raging","Rancor","Ravening","Relentless","Riot","Riotous","Rough","Ruthless","Sadist","Sadistic","Sanguinary","Savage","Spite","Storm","Temper","Terrible","Tough","Turbulent","Unmerciful","Unrelenting","Unrestrained","Untamed","Vehement","Vengeance","Vengeful","Venom","Vex","Vicious","Vile","Villain","Villainous","Violence","Violent","Wild","Wraith","Wrath"];

var nm2 = ["","","","","ch","h","j","l","n","r","s","sh","t","th","tr","y","z"];
var nm3 = ["a","e","u","a","e","u","a","e","u","a","e","u","o","i","i","a","e","u","a","e","u","ie","ei","ue","ui"];
var nm4 = ["ch","hj","hs","hv","g","j","jh","l","ln","lm","ls","lz","mj","mz","ns","nj","nz","rj","rv","rs","rz","s"];
var nm5 = ["a","i","a","i","a","i","a","i","a","i","e","u","a","i","a","i","a","i","a","i","a","i","e","e","u","u","ie","ee","ua","ea","ai","ia","ii"];
var nm6 = ["c","ch","j","l","ls","lsh","lz","n","ns","nj","nz","s","ss","sh","z","zz","zh","zs"];
var nm7 = ["","","","","","d","g","j","jj","m","n","nn","s","sh","v","z"];

var nm8 = ["","","","ch","dj","g","j","k","n","r","v","y","z"];
var nm9 = ["a","e","o","a","e","o","a","e","o","a","e","o","i","i","u"];
var nm10 = ["d","dd","dr","g","gr","ggr","k","kr","l","ll","ls","lr","ld","lz","nt","nr","nv","nz","ns","nsh","ntr","pr","tr","v","vv","vr","z","zs","zr","zd"];
var nm11 = ["","","","","","d","j","l","q","s","sh","ss","t","z","zz"];

var br = "";

function nameGen(type){
	var tp = type;
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
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
			rnd = Math.random() * nm1.length | 0;
			nMs = nm1[rnd];
			nm1.splice(rnd, 0);
		}
		names = nMs + " " + nSr;
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(names));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}

function nameFem(){
	rnd = Math.random() * nm2.length | 0;
	rnd2 = Math.random() * nm3.length | 0;
	rnd3 = Math.random() * nm7.length | 0;
	if(i < 3){
		while(nm2[rnd] === ""){
			rnd = Math.random() * nm2.length | 0;
		}
		while(nm7[rnd3] === nm2[rnd] || nm7[rnd3] === ""){
			rnd3 = Math.random() * nm7.length | 0;
		}
		nMs = nm2[rnd] + nm3[rnd2] + nm7[rnd3];
	}else{
		rnd5 = Math.random() * nm4.length | 0;
		rnd6 = Math.random() * nm5.length | 0;
		while(nm4[rnd5] === nm2[rnd] || nm4[rnd5] === nm7[rnd3]){
			rnd5 = Math.random() * nm4.length | 0;
		}
		if(i < 7){
			nMs = nm2[rnd] + nm3[rnd2] + nm4[rnd5] + nm5[rnd6] + nm7[rnd3];
		}else{
			rnd7 = Math.random() * nm6.length | 0;
			rnd8 = Math.random() * nm5.length | 0;
			while(nm6[rnd7] === nm7[rnd3] || nm6[rnd7] === nm4[rnd5]){
				rnd7 = Math.random() * nm6.length | 0;
			}
			nMs = nm2[rnd] + nm3[rnd2] + nm4[rnd5] + nm5[rnd6] + nm6[rnd7] + nm5[rnd8] + nm7[rnd3];
		}
	}
	testSwear(nMs);
}
function nameSur(){
	rnd = Math.random() * nm8.length | 0;
	rnd2 = Math.random() * nm9.length | 0;
	rnd3 = Math.random() * nm10.length | 0;
	rnd4 = Math.random() * nm9.length | 0;
	rnd5 = Math.random() * nm11.length | 0;
	while(nm10[rnd3] === nm8[rnd] || nm10[rnd3] === nm11[rnd5]){
		rnd3 = Math.random() * nm10.length | 0;
	}
	nSr = nm8[rnd] + nm9[rnd2] + nm10[rnd3] + nm9[rnd4] + nm11[rnd5];
	testSwear(nSr);
}