function nameGen(type){
	var tp = type;
	var nm1 = ["ÃÃ°hÃ¤m","ÃÄlÃ¤metdin","ÃkhmÃ¤t","ÃkrÃ¤metdin","Ãmir","Ãmirkhan","ÃnÃ¼Ã¤r","ÃnwÃ¤r","ÃxkÃ¤m","ÃxmÃ¤t","ÃxmÃ¤tzÃ¤ki","ÄÃ¤bizÌ¦Ulla","ÄÃ¤li","ÄÃ¤lim","ÄÃ¤limyÃ¤n","ÄÃ¤ziz","ÄÃ¶bÃ¤yÃ°ulla","ÄÃ¶bÃ¤yzÌ¦Ulla","ÄÃ¼mÃ¤r","Äaysa","Äilemdar","ÅÃ¤hit","ÅÃ¤rif","AÄiÃ°el","Afzaletdin","Airat","Almas","Altynbay","Anuar","AryÅlan","AyÃ°ar","Aybulat","Aydar","Aygiz","Ayrat","Azamat","BÃ¤Äiz","BÃ¼re","Bariy","BayÄÃ¶tdin","Bikbulat","Borxan","Bulat","DawÃ¯t","Dawit","Dayan","Dim","Dinislam","FÃ¤rit","FÃ¤yzulla","Fazulla","GÃ¤whÃ¤r","Gotbetdin","HazÌ¦Iy","Husayn","Ibrahim","Ilyas","IrÃ¤ndek","Irek","IskÃ¤ndÃ¤r","IslamÄÃ¤li","IslambÃ¤k","Islametdin","IzÌ¦El","Kamaletdin","Khamza","Khasan","MÃ¤jit","MÃ¤xmÃ¼t","MÃ¶xÃ¤mÃ¤tÄÃ¤bdelxÃ¤y","MÃ¶xÃ¤mmÃ¤tÅ¡a","MÃ¶xÃ¤mmÃ¤t","Marvan","MinhaÅ¾etdin","Mintimer","Mirgayaz","MirxÃ¤yzÌ¦Ãr","MortazÌ¦A","MuÅarif","Muhammad","MullayÃ¤n","Musa","NÃ¤Å¾ip","NÃ¶gÃ¶Å","Nagim","NiÄmÃ¤t","NiÄmÃ¤ttulla","NiÄmÃ¤tulla","Nil","RÃ¤Åit","RÃ¤mil","RÃ¤sÃ¼l","RÃ¤wef","RÃ¶stÃ¤m","RamazÌ¦An","RiÅ¡at","Rif","RifqÃ¤t","Rinat","Ruslan","SÃ¤Äit","SÃ¤limÃ¤","SÃ¤lim","SÃ¤yet","SÃ¯Ã±ÄÃ¯Ã°","SÃ¶lÃ¤ymÃ¤n","Sabir","Sabit","Salawat","Sayed","ShÃ¤yxislam","Shaikhzada","SiÃ±ÄizÌ¦","TÃ¤lÄÃ¤t","TÃ¶lkÃ¶","Tagir","TalÄat","Talxa","Tashtemir","Tayfur","TaymaÃ§","Tufan","Tulqyn","Ural","UyÃ¯ldan","Uyildan","VÃ¤xit","Vener","Vildan","XÃ¤bibulla","XÃ¤bir","XÃ¤mzÃ¤","XÃ¤sÃ¤n","XÃ¤ydÃ¤r","XÃ¶sÃ¤yen","XozÌ¦AybirgÃ¤n","YÃ¤hÃ¼zÌ¦Ã","YÃ¤mil","YÃ¤wÃ°Ã¤t","YÃ¤wzÌ¦Ãt","Yahya","Yakhya","Yaqup","Yaxya","Yomabay","Yosop","Yulay","Yusuf","ZÃ¤ki","ZÃ¤kiryÃ¤n","ZÃ¤ynulla","ZÃ¶fÃ¤r","Zagir","Zahir"];
	var nm2 = ["ÃlfiÃ¤","ÃliÃ¤","ÃminÃ¤","ÃnisÃ¤","ÃyÅ¡Ã¤","ÃmmÃ¶xÃ¤bibÃ¤","ÄÃ¤yÅ¡Ã¤","Å Ã¤wrÃ¤","AigÃ¶l","AlbinÃ¤","AlmabikÃ¤","AsiÃ¤","Asiya","AybikÃ¤","AygÃ¶l","BÃ¤kirÃ¤","BÃ¤zÌ¦Ãr","BanÄ±Åµ","Banat","Baniw","BayrambikÃ¤","Bibi","ElvirÃ¤","EmeÅbikÃ¤","FÃ¤nÃ¼nÃ¤","FÃ¤rizÌ¦Ã","Fatima","FirÃ¼zÃ¤","Flyura","GÃ¤whÃ¤r","GÃ¶lbanÃ¯w","GÃ¶lsinÃ¤","GÃ¼zÃ¤l","GÃ¼zÃ¤liÃ¤","HÃ¤diÃ¤","Jamila","LÃ¤ysÃ¤n","Laysan","LiliÃ¤","MÃ¤Ã°inÃ¤","MÃ¤dinÃ¤","MÃ¤ryÃ¤m","MÃ¤ymÃ¼nÃ¤","MenÃ¤wrÃ¤","MilÃ¤wÅÃ¤","MilÃ¤wÅ¡Ã¤","MuyylbikÃ¤","NÃ¤Å¾ibÃ¤","NÃ¤rkÃ¤s","RÃ¤milÃ¤","RÃ¤mzilÃ¤","RÃ¤yxana","Reyhane","Rezeda","Rezida","SÃ¤Ã¼dÃ¤","SÃ¤bilÃ¤","SÃ¤kinÃ¤","SÃ¤limÃ¤","SÃ¤riÃ¤","SÃ¤yÃ¤bikÃ¤","Sabira","Saniya","Sara","ShÃ¤wrÃ¤","Sulpan","TaÃ±hÃ¯lÃ¯w","TaÃ±hiliw","XÃ¤zÌ¦IsÃ¤","Xafasa","YÃ¤milÃ¤","YÃ¼vÃ¤yriÃ¤","YomabikÃ¤","ZÃ¤birÃ¤","ZÃ¤ynÃ¤b","ZÃ¤ynÃ¤p","ZÃ¤ytÃ¼nÃ¤","ZÃ¶hrÃ¤","ZÃ¶lÃ¤ykha","ZÃ¶lÃ¤yxÃ¤","ZÃ¶lÃ¤yxa","ZÃ¶lfiÃ¤","ZÃ¶lxizÃ¤","Zamira","ZemfÃ­ra","Zemfira","Zeyneb","Zifa","ZiliÃ¤","Zulaikha","Zulfiya"];
	var br = "";
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		if(tp === 1){
			rnd = Math.random() * nm2.length | 0;
			names = nm2[rnd];
			nm2.splice(rnd, 1);
		}else{
			rnd = Math.random() * nm1.length | 0;
			names = nm1[rnd];
			nm1.splice(rnd, 1);
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