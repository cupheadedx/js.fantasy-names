if(typeof testSwear === 'undefined') {
	var testSwear = function(a){return a;};
}
var nmMFf = ["Ban","Bar","Dal","Dam","Dun","Dur","Fas","Fin","Kan","Kin","Kor","Lan","Lim","Lon","Man","Mar","Mas","Mid","Mor","Mur","Nam","Nor","Rad","Ran","Ras","Rod","San","Sin","Tor","Tum"];
var nmMFl = ["darras","darris","dommar","donnir","durrun","farran","fidden","garron","kammin","karran","lammir","larrin","mannor","marden","mennar","mennor","mindin","mirron","morrin","murrin","norren","norten","rammas","sammas","sannim","sarrin","sarris","sorran","tarrin","torrin"];
var nmMSf = ["Barrun","Burrin","Darras","Farran","Farrin","Fidden","Garrin","Harren","Harrun","Karrat","Karren","Ketten","Korrin","Larras","Lommir","Lorrin","Marrad","Mirren","Mirrun","Morrin","Parran","Purren","Tarris","Torren","Torrim","Turrus","Venner","Vunnar","Zakkan","Zarrak"];
var nmMSl = ["bar","bor","bun","das","din","dun","dur","fas","fum","gar","gun","kas","kin","las","lis","mar","mas","min","mur","nas","nim","nor","pan","rak","ras","tor","tur","zad","zim","zor"];
var nmFF = ["Allin","Ashin","Bunn","Dann","Darn","Diss","Enn","Eril","Fenn","Fert","Firr","Fiss","Genn","Grin","Kalk","Kenn","Kers","Krin","Lerm","Less","Linn","Lorr","Minn","Mirt","Mist","Nem","Niss","Shall","Shan","Shenn","Tarr","Taz","Tell","Tin","Tirr","Tris","Wenn","Zar","Zaz","Zell"];
var nmFL = ["ahai","akei","alin","amai","anai","annar","annas","arris","arrel","arresh","artish","asha","atish","elbis","embin","enna","ennash","entah","eris","erla","erlis","imai","imbel","imei","immesh","inah","inash","inda","inna","innem","irrah","ishai","issa","itas","onnes","onteh","orda","oren","oris","orren"];

function generator$dungeons_and_dragons$dndWildenNames(type){
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
		return nMs;
}

function nameFem(){
	rnd = Math.floor(Math.random() * nmFF.length);
	rnd2 = Math.floor(Math.random() * nmFL.length);
	nMs = nmFF[rnd] + nmFL[rnd2];
	testSwear(nMs);
}

function nameMas(){
	if(i < 5){
		rnd = Math.floor(Math.random() * nmMFf.length);
		rnd2 = Math.floor(Math.random() * nmMFl.length);
		nMs = nmMFf[rnd] + nmMFl[rnd2];
	}else{
		rnd = Math.floor(Math.random() * nmMSf.length);
		rnd2 = Math.floor(Math.random() * nmMSl.length);
		nMs = nmMSf[rnd] + nmMSl[rnd2];
	}
	testSwear(nMs);
}