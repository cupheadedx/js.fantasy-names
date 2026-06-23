var nm1 = ["b","f","g","gr","k","m","n","r","s","sl","sn","z","zl","zn"];
var nm2 = ["ie","ei","ee","a","i","o","u","a","i","o","u","a","i","o","u","a","i","o","u"];
var nm3 = ["b","bl","bbl","br","bg","d","dl","ddl","gl","ggl","gg","gr","ggr","kr","kl","lk","lv","lz","lb","ld","lg","vr","vv","vl","vvl","zz","zr","zl","zzl"];
var nm4 = ["","","","","","b","bb","g","gg","k","m","n","pp","r","rt","t","z"];
var nm5 = ["bad","best","big","bleak","bold","bone","bright","broad","clean","cold","dim","dull","faint","false","far","fast","fat","first","flat","free","full","funny","glass","glum","gold","good","grand","grim","gross","half","hard","jumbo","keen","knot","last","lazy","lone","long","lost","low","lucky","mad","mild","mold","new","numb","odd","old","one","plain","poor","prime","proud","real","right","round","same","sharp","silent","skull","slim","slow","small","soft","stale","steep","strong","sweet","tall","thin","torn","twin","two","warm"];
var nm6 = ["bristle","bristles","candle","chisel","claw","dip","ear","eye","eyes","flame","fringe","fur","hat","helm","mop","nose","pick","snouth","tail","teeth","toe","tooth","torch","tuft","wax","whisker","whiskers","wick"];

var br = "";

function nameGen(type){
	var tp = type;
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		nameMas();
		while(nMs === ""){
			nameMas();
		}
		rnd = Math.random() * nm5.length | 0;
		rnd2 = Math.random() * nm6.length | 0;
		while(nm5[rnd] === nm6[rnd2]){
			rnd2 = Math.random() * nm6.length | 0;
		}
		nMs = nMs + " " + nm5[rnd] + nm6[rnd2];
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(nMs));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}

function nameMas(){
	nTp = Math.random() * 2 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd5 = Math.random() * nm4.length | 0;
	while(nm1[rnd] === nm4[rnd5]){
		rnd = Math.random() * nm1.length | 0;
	}
	if(nTp === 0){
		nMs = nm1[rnd] + nm2[rnd2] + nm4[rnd5];
	}else{
		rnd3 = Math.random() * nm3.length | 0;
		rnd4 = Math.random() * nm2.length | 0;
		while(rnd2 < 3 && rnd4 < 3){
			rnd2 = Math.random() * nm2.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm2[rnd4] + nm4[rnd5];
	}
	testSwear(nMs);
}