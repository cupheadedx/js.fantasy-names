
function nameGen(type){
	var nm1 = ["Ãzeyir","ÃÅrÃ¿f","Ãdalat","ÃlÃ¿sgÃ¿r","ÃlÉkbÉr","ÃliÅ","Ãmin","ÃnvÃ¿r","ÃsgÃ¿r","Ä°biÅ","Ä°brahim","Ä°lham","Ä°lkin","Ä°lqar","Ä°lyas","Ä°mam","Ä°mran","Ä°nqlab","Ä°ntiqam","Ä°sa","Ä°sgÃ¿ndÃ¿r","Ä°slam","Ä°smÉt","Ä°smayil","Ä°xtiyar","Ä°zzÃ¿t","ÅÃ¼kÃ¼r","ÅÃ¿fa","ÅÃ¿rÃ¿faddin","Åahin","Åamil","Åamxal","Åirin","Åirzad","Å°lvi","Å°mid","ÆbÅ±lhÉsÉn","ÆbdÅ±lÉli","Æhmad","ÆkbÉr","ÆliÉkrÉm","Æli","Æmir","ÆrtoÄrul","AÃ¼amÃ¿li","AÃ¼amusa","AÃ¼axan","AÄahadi","AÄasÉfa","Abbas","Abbasqulu","Adil","Agil","Akif","Allahverdi","Anar","Arif","Asif","Asiman","Aslan","Atabala","Aydin","AzÉr","Azad","BÃ¿haulla","BÃ¿hruz","BaÅir","Baba","Bahadur","Bakir","Bayram","Behbud","Bilal","CÉlal","CÉlil","CÉmil","Cabbar","Cahan","Cahangir","Cavad","Cavid","Ceymur","Ceyxun","Chingiz","DadaÅ","ElÃ§in","Elariz","EldÃ¿niz","Eldar","Elman","Elxan","Emin","Etibar","Eyyub","FÃ¼zuli","FÃ¿rid","FÃ¿rxad","FÃ¿yaz","FÉrman","FÉxri","Faiq","Famil","Fazil","FikrÃ¿t","Firudin","Fuad","GÃ¼laÃ¼a","GÃ¼ndÃ¼z","HÃ¼mbÉt","HÃ¼seyn","HÃ¼seynqulu","HÃ¿mid","HÉci","HÉsÉn","Hafiz","HaydÃ¿r","Israfil","KÃ¿rim","KÉmran","KÉnan","Kamal","Kamil","Karlen","Kaz","MÃ¼bariz","MÃ¼zÃ¿ffar","MÃ¿mmÃ¿d","MÉnaf","MÉnsur","Mahir","Maqsud","Mehdi","MikayÄ±l","MirÉli","MirzÃ¿","Murad","Musa","Muxtar","NÃ¼bar","NÃ¼rÃ¿ddin","NÃ¼srÉt","NÉcÉf","NÉrmin","NÉsimi","NaÄi","Namiq","Nazim","Nicat","Niyaz","Nizami","Novruz","Oqtay","Orxan","Orxun","Osman","PaÅa","Qabil","Qasim","Qiyas","QoÅqar","Qulam","RÃ¼fÉt","RÃ¼stÃ¿m","RÃ¿sul","RÉÅad","RÉÅid","RÉis","Rafael","Rafiq","Ramiz","Rasim","Riza","SÃ¼leyman","SÃ¿buhi","SÃ¿mÃ¿d","SÉlahÉddin","SÉlin","SÉrvÉr","SÉrvan","SÉrxan","Sabir","Sadix","Saleh","Salman","Samir","Seyfulla","Seyran","Surxey","TÃ¿rlan","Tahir","Taqor","TeymurÃ§in","Teymur","Teymuraz","Tofiq","Tunar","Tural","Turan","Urfan","Urxan","VÃ¼qar","VÃ¼sal","VÃ¿li","Vadim","Vahid","Valeh","Valid","Vaqif","Vasif","XÃ¿lil","Xalid","Xaliq","XankiÅi","Xanlar","YalÃ§Ä±n","Yunis","Yusif","Zakir","Zaman","Zamin","Zamir","Zaur","Zeynal","Zeynulla","Ziya"];
	var nm2 = ["Ãimnaz","ÃdibÃ¿","ÃdilÃ¿","ÃminÃ¿","Ä°lnarÉ","Ä°lqarÉ","Ä°narÉ","Ä°nayÉt","Ä°nna","Ä°ntiÅar","Ä°radÉ","Ä°rina","Ä°smÉt","Ä°zzÃ¿t","ÅÃ¼kÃ¼fÃ¿","ÅÃ¼kÃ¼r","ÅÃ¿fa","ÅÃ¿fiqÃ¿","ÅÉhrÉbanu","ÅÉmsiyyÉ","ÅÉrafÉt","Åirin","Å°lviyya","ÆcÉbnaz","ÆcmÉt","ÆntigÉ","Æsmar","AfÉt","Afaq","AidÉ","AliyÃ¿","Almas","ArifÃ¿","Arzu","AyÃ§iÃ§Ék","AyÃ¼un","AybÃ¿niz","AygÃ¼l","Ayla","Aynur","Aysel","Aysu","AytÃ¿kin","AytÃ¿n","BÉnÃ¶vÅÉ","BalaxanÄ±m","Brilyant","CÉmilÉ","Cahan","DÃ¼nya","DÃ¼nyamalÄ±","DÃ¼rdanÃ¿","DÃ¼rnisa","DilÅad","DilarÃ¿","Durna","Dursun","ElmirÃ¿","ElnarÃ¿","Esmeralda","Etiqad","FÃ¿xriyyÃ¿","FatihÃ¿","FatimÉ","Fatma","Fidan","FirÉngiz","FiruzÃ¿","FizzÃ¿","Flora","GÃ¼lÃ¼Å","GÃ¼lÃ¼stan","GÃ¼lÅÃ¿n","GÃ¼larÃ¿","GÃ¼lbala","GÃ¼lnarÃ¿","GÃ¼lnaz","GÃ¼ltÉkin","GÃ¼nay","GÅ±lsÅ±m","HÃ¶kÃ¼mÉ","HÉcÉr","JalÃ¿","KÃ¶nÃ¼l","KamalÉ","LÃ¿man","LÉtifÉ","LamiyÉ","Leyla","Liana","Lyudmila","MÃ¿dina","MÃ¿rziyya","MÉhÉbbÉt","MÉhru","MÉnsurÉ","MÉryam","MÉsmÉ","MÉtanÉt","MahirÃ¿","MaleykÉ","MehparÃ¿","Meyransa","MinurÉ","NÃ¼ÅabÃ¿","NÃ¼bar","NÃ¿rgiz","NÃ¿rminÃ¿","NÃ¿zakÃ¿t","NÉfisÉ","NÉriman","NÉsib","NahidÉ","NaibÃ¿","NailÉ","Nasreen","Nasrin","NatÉvan","Natalya","Natella","NazilÃ¿","Nazli","Nigar","NisÃ¿","Nonna","NurÅÃ¿rÃ¿f","NurastÃ¿","NurlanÃ¿","PÃ¿rvinÃ¿","PÉriÅan","PakizÉ","Qalina","Qumru","RÃ¼beyda","RÃ¼xÅarÃ¿","RÃ¿milÃ¿","RÃ¿na","RÉfiqÉ","RÉhilÉ","RÉsmiyyÉ","RÉxÅÉndÉ","RaifÉ","Reyhan","Roza","RuhÃ¿ngiz","RuhiyyÉ","SÃ¼keynÃ¿","SÃ¿bina","SÃ¿furÃ¿","SÃ¿idÃ¿","SÃ¿riyya","SÅ±reyyÉ","SÉdaqat","SÉhÉr","SÉmayÉ","SÉrÉncam","SabirÃ¿","SahibÃ¿","SamirÃ¿","Sara","Sevil","Sevinc","SidiqÉ","Sima","Solmaz","Sona","SuÃ¼ra","TÃ¼nzalÉ","TÃ¿rlan","TÉhminÉ","TÉranÉ","TamaÅa","Tamam","Tamara","Tamilla","Tinatin","Tuquyya","Tura","Turan","Ulduz","VÃ¼salÃ¿","VÃ¿fa","VahidÃ¿","ValidÃ¿","XÉdicÉ","XalidÃ¿","Xanim","XatirÉ","Yana","YeganÃ¿","ZÃ¶hrÉ","ZÃ¼leyxa","ZÃ¼lfiiyyÉ","ZÃ¼mrÃ¼d","ZÃ¿rifÃ¿","ZÃ¿rinÃ¿","ZÃ¿ynÃ¿gÃ¼l","ZÅ±beydÉ","ZÉhra","ZÉrnigar","ZaminÃ¿","ZarÉngiz","Zemfira","ZeynÉb","ZinÃ¿t"];
	var nm3 = ["Abbasguliyev","Abbasov","Abdulayev","Abdulin","Abdullayev","Abdulov","Abdurrahimov","Abdurrahmanov","Abiyev","Abulhasanov","Adigozalov","Afandiyev","Aghababayev","Aghakhanov","Aghamaliyev","Aghamedhiyev","Aghamirov","Aghamirzayev","Aghanazarov","Aghayev","Ahadov","Ahmadov","Akbarov","Alakbarov","Alasgarov","Aliyev","Aljanov","Allahverdiyev","Allahyarov","Amirbeyov","Arablinski","Asgarov","Aslanov","Babayev","Baghirov","Bahlulov","Baylarbayov","Behbudov","Dadashov","Farajov","Fattahov","Gajarov","Gambarov","Garakhanov","Garayev","Gasimov","Gayibov","Gaziyev","Gharabaghi","Guliyev","Gurbanov","Hagverdiyev","Hajibabayev","Hajibeyov","Hajiyev","Hasanov","Haziyev","Heybatov","Hidayatov","Humbatov","Huseynov","Ibragimov","Ibrahimbeyov","Ibrahimov","Iravani","Isgandarov","Ismayilov","Jabbarov","Jabiyev","Jabrayilov","Jafarov","Jahangirov","Jalilov","Jamalov","Jamilov","Jamshidov","Janaliyev","Javadov","Karimov","Kazimov","Khalilov","Khanmammadow","Magsudov","Mahammadov","Maharramov","Mahmudov","Majidov","Mamishov","Mammadaliyev","Mammadbeyov","Mammadguliyev","Mammadov","Mehdiuev","Mehraliyev","Mirgasimov","Mirjavadov","Mirzayev","Nabiyev","Naghiyev","Najafov","Narimanbeyov","Orujov","Panahov","Rahimov","Rajabov","Salahov","Salmanov","Samedov","Seyidov","Shahbazov","Sharifov","Taghiyev","Tahmazov","Topchubashov","Vahabov","Valiyev","Vazirov","Zadeh"];
	var nm4 = ["Abbasguliyeva","Abbasova","Abdulayeva","Abdulin","Abdullayeva","Abdulova","Abdurrahimova","Abdurrahmanova","Abiyeva","Abulhasanova","Adigozalova","Afandiyeva","Aghababayeva","Aghakhanova","Aghamaliyeva","Aghamedhiyeva","Aghamirova","Aghamirzayeva","Aghanazarova","Aghayeva","Ahadova","Ahmadova","Akbarova","Alakbarova","Alasgarova","Aliyeva","Aljanova","Allahverdiyeva","Allahyarova","Amirbeyova","Arablinski","Asgarova","Aslanova","Babayeva","Baghirova","Bahlulova","Baylarbayova","Behbudova","Dadashova","Farajova","Fattahova","Gajarova","Gambarova","Garakhanova","Garayeva","Gasimova","Gayibova","Gaziyeva","Gharabaghi","Guliyeva","Gurbanova","Hagverdiyeva","Hajibabayeva","Hajibeyova","Hajiyeva","Hasanova","Haziyeva","Heybatova","Hidayatova","Humbatova","Huseynova","Ibragimova","Ibrahimbeyova","Ibrahimova","Iravani","Isgandarova","Ismayilova","Jabbarova","Jabiyeva","Jabrayilova","Jafarova","Jahangirova","Jalilova","Jamalova","Jamilova","Jamshidova","Janaliyeva","Javadova","Karimova","Kazimova","Khalilova","Khanmammadow","Magsudova","Mahammadova","Maharramova","Mahmudova","Majidova","Mamishova","Mammadaliyeva","Mammadbeyova","Mammadguliyeva","Mammadova","Mehdiueva","Mehraliyeva","Mirgasimova","Mirjavadova","Mirzayeva","Nabiyeva","Naghiyeva","Najafova","Narimanbeyova","Orujova","Panahova","Rahimova","Rajabova","Salahova","Salmanova","Samedova","Seyidova","Shahbazova","Sharifova","Taghiyeva","Tahmazova","Topchubashova","Vahabova","Valiyeva","Vazirova","Zadeh"];
	var nm5 = ["oÄlu","lÄ±","li","lu","lÃ¼","gil","soy","zadÉ"];
	var nm6 = ["qÄ±zÄ±","lÄ±","li","lu","lÃ¼","gil","soy","zadÉ"];
	var nm7 = ["a","e","i","o","u","y","É","Ã¿"];
	var br = "";

	$('#placeholder').css('textTransform', 'capitalize');
	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		if(tp === 1){
			rnd = Math.floor(Math.random() * nm2.length);
			if(i < 5){
				rnd2 = Math.floor(Math.random() * nm4.length);
				names = nm2[rnd] + " " + nm4[rnd2];
				nm4.splice(rnd2, 1);
			}else{
				rnd2 = Math.floor(Math.random() * nm1.length);
				rnd3 = Math.floor(Math.random() * nm6.length);
				names = nm2[rnd] + " " + nm1[rnd2] + nm6[rnd3];
			}
			nm2.splice(rnd, 1);
		}else{
			rnd = Math.floor(Math.random() * nm1.length);
			if(i < 5){
				rnd2 = Math.floor(Math.random() * nm3.length);
				names = nm1[rnd] + " " + nm3[rnd2];
				nm3.splice(rnd2, 1);
			}else{
				rnd2 = Math.floor(Math.random() * nm1.length);
				rnd3 = Math.floor(Math.random() * nm5.length);
				for(j = 0; j <= nm7.length; j++){
					if(nm1[rnd2].substr(nm1[rnd2].length - 1) === j){
						while(rnd3 === 0){
							rnd3 = Math.floor(Math.random() * nm5.length);
						}
					}
				}
				names = nm1[rnd] + " " + nm1[rnd2] + nm5[rnd3];
			}
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