var nm1 = ["","","","c","ch","g","h","k","kr","n","q","qh","r","sk","sq","skr","t","v","z"];
var nm2 = ["a'a","ee'a","e'a","i'a","o'","ee","ia","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o","a","e","i","o"];
var nm3 = ["k'r","p'r","w'p","w'k","w'n","b","c","cr","fr","k","kr","l","lk","ln","lr","n","nr","ns","pr","r","rh","rm","rr","sm","sr","sk","skr"];
var nm4 = ["i'","a'","e'","a","i","a","i","a","i","e","e","a","i","a","i","a","i","e","e","a","i","a","i","a","i","e","e"];
var nm5 = ["d","h","r","s","sh","y","z"];
var nm6 = ["ae","oo","ee","ia","ei","aa","a","a","a","i","i","e","e","y","y","a","a","a","i","i","e","e","y","y"];
var nm7 = ["","","","k","l","n","s","sh","th"];

var br = "";

function nameGen(){
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		nameMas();
		while(nMs === ""){
			nameMas();
		}
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
	nTp = Math.random () * 3 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm4.length | 0;
	rnd5 = Math.random() * nm7.length | 0;
	if(rnd2 < 5){
		while(rnd3 < 5){
			rnd3 = Math.random() * nm3.length | 0;
		}
		while(rnd4 < 3){
			rnd4 = Math.random() * nm4.length | 0;
		}
	}
	if(rnd3 < 5){
		while(rnd4 < 3){
			rnd4 = Math.random() * nm4.length | 0;
		}
	}
	while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm7[rnd5]){
		rnd3 = Math.random() * nm3.length | 0;
	}
	if(nTp < 2){
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm7[rnd5];
	}else{
		rnd6 = Math.random() * nm6.length | 0;
		rnd7 = Math.random() * nm5.length | 0;
		while(nm3[rnd3] === nm5[rnd7] || nm5[rnd7] === nm7[rnd5]){
			rnd7 = Math.random() * nm5.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm6[rnd6] + nm5[rnd7] + nm4[rnd4] + nm7[rnd5];
	}
	testSwear(nMs);
}