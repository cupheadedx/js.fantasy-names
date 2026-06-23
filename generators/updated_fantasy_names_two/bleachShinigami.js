
function nameGen(type){
	var nm1 = ["A","Bai","Be","Bo","Bu","Chi","Da","Dai","Ei","Fu","Ga","Ge","Gi","Go","Ha","Hei","Hi","Ho","Hyo","I","Ie","Jo","Ju","Ka","Ke","Kei","Ki","Ko","Ku","Kyu","Ma","Mi","Mo","Mu","Na","Nao","Ni","No","O","Ri","Ro","Ryo","Ryu","Sa","Se","Sei","Shi","Sho","Shu","So","Su","Ta","Te","Tei","To","Tsu","U","Wa","Ya","Yo","Yu"];
	var nm2 = ["bumi","buro","buru","chemon","chi","chiro","chiyo","chizo","dayu","deki","do","fu","fumi","gobei","goro","hari","haru","hide","hiko","hira","hiro","hisa","hito","ji","jio","jiro","juro","kado","kan","kao","karu","kazu","kei","ki","kichi","kin","kio","kira","ko","koto","kuchu","kudo","kumi","kuni","kusai","kushi","kusho","kuzo","mane","maro","masu","matsu","mei","miaki","michi","mio","mitsu","mon","mori","moru","moto","mune","nabu","naga","nari","nji","njiro","nkei","nko","nobu","nori","noru","noto","noye","npaku","nshiro","ntaro","nzo","rata","rei","ro","roji","roshi","ru","sada","sake","saku","sami","samu","sashi","sato","seki","setsu","shashi","shi","shige","shiko","shiro","sho","shushu","soshi","su","suke","suki","ta","tada","taka","tane","tari","taro","taru","toki","toku","tomo","tora","toshi","tsu","tsugu","tsumi","tsuna","tsune","tsuta","tsuyo","tzumi","wane","yaki","yasu","yori","yoshi","yuki","zane","zo","zuka","zuki","zuko","zuma","zumi","zumo","zushi"];
	var nm3 = ["A","Ai","Be","Chi","E","Ei","Fu","Ge","Ha","Hai","Hi","Ho","I","Jo","Ka","Kae","Ki","Ko","Ku","Ma","Mae","Me","Mi","Mo","Mu","Na","Nao","Ni","No","O","Rai","Rei","Ri","Ro","Ru","Sa","Sai","Se","Shi","Su","Ta","Te","To","Tsu","U","Wa","Ya","Yae","Yo","Yu"];
	var nm4 = ["bari","chi","chiha","chiho","chiko","cho","deko","doka","fumi","fuyu","gino","gusa","haru","hiro","ho","hoko","homi","hori","jiko","ka","kage","kako","kami","kane","kari","karu","kaze","ki","kichi","kiko","kina","kio","kira","ko","koto","kuko","kuma","kuro","kyo","maki","mako","mari","maya","meka","meko","mi","miho","mika","miki","miko","mina","miri","miya","mugi","na","nae","nai","nako","nami","natsu","neka","neko","niko","no","noka","nomi","noue","nu","nuko","nuye","nuyo","ra","rako","rante","rari","rea","ri","rika","riko","rime","rimi","rino","risa","risu","rize","ro","roe","roko","romi","roshi","ru","rui","ruka","ruko","rumi","sa","sae","sahi","saji","saki","sako","sami","samu","sano","sato","se","shi","shiko","shiyo","soko","sono","suka","suki","sumi","suzu","taba","tako","taru","to","tomi","tomo","tose","toshi","tsu","tsue","tsuka","tsuko","tsumi","tsune","tsuyo","yaka","yako","yame","yano","yeko","yo","yu","yuka","yuki","yuko","yume","yumi","yuri","zami","zu","zue","zuki","zuko","zumi","zuru","zusa"];
	var nm5 = ["Aba","Ai","Aku","Ama","Ao","Ara","Aya","Ayu","Chi","De","Do","Ei","Ena","Enji","Ere","Fu","Fuku","Furu","Go","Gyo","Hama","Haru","Hi","Hide","Hiki","Hina","Hiro","Hitsu","Hori","Hyo","Hyu","I","Ichi","Ie","Ike","Ikka","Isa","Iwa","Ka","Kajo","Kata","Kawa","Ken","Ki","Kio","Kisa","Ko","Koma","Konu","Kotsu","Kuchi","Kuro","Kuru","Kusa","Kyo","Mada","Mago","Masa","Masu","Matsu","Mi","Mori","Naga","Nai","Nari","Ni","O","Oga","Ogi","Oki","Ona","Oshi","Ro","Sae","Sai","Saio","Saka","Sasa","Se","Shi","Shu","Su","Ta","Taka","Tani","To","Toga","Tsu","Tsubo","Tsuka","Ua","Uchi","Uki","Ume","Uno","Ura","Waka","Ya","Yasu","Yu"];
	var nm6 = ["ba","baki","bara","bata","bira","bishi","bune","chi","da","dachi","dama","dani","de","do","fune","gai","gawa","gaya","hana","hara","hoshi","ji","jima","jishi","ka","kaga","kagi","ki","kiba","kibe","kida","kiri","ko","kuda","kura","kushi","madani","maki","mano","maru","matsu","maya","miya","moda","mori","moto","mura","nagi","nji","nkai","no","nose","numa","nyo","pachi","rada","ragi","rai","raishi","raku","rame","rashi","ri","rigae","rino","riuchi","sada","sagi","saki","sari","sato","se","shi","shido","shige","shima","shimo","shita","su","sube","sumi","take","tani","tara","toya","tsami","tsu","tsuchi","wa","yama","yashi","yoshi","yosu","yumi","zaka","zaki","zato","zawa","zuke","zumi"];
	
	var br = "";
	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		rnd3 = Math.random() * nm5.length | 0;
		rnd4 = Math.random() * nm6.length | 0;
		if(tp === 1){
			rnd = Math.random() * nm3.length | 0;
			rnd2 = Math.random() * nm4.length | 0;
			names = nm5[rnd3] + nm6[rnd4] + " " + nm3[rnd] + nm4[rnd2];
			nm3.splice(rnd, 1);
			nm4.splice(rnd2, 1);
		}else{
			rnd = Math.random() * nm1.length | 0;
			rnd2 = Math.random() * nm2.length | 0;
			names = nm5[rnd3] + nm6[rnd4] + " " + nm1[rnd] + nm2[rnd2];
			nm1.splice(rnd, 1);
			nm2.splice(rnd2, 1);
		}
		nm5.splice(rnd3, 1);
		nm6.splice(rnd4, 1);
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(names));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}