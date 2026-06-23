var nm1 = ["","","","","","","b","br","d","dr","g","gr","k","kr","l","m","n","r","sk","sz","v","w","z"];
var nm2 = ["a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","a","e","i","o","o","u","u","ia","ei","ae","ie","ai"];
var nm3 = ["br","bn","c","cn","cr","cd","cl","d","dn","dr","dl","dr","gr","gdr","gl","gm","gv","g","gn","kn","kr","kl","kv","lv","ld","lg","ls","l","lz","mr","mv","md","nr","nv","nl","ng","nd","rg","rd","rl","rv","rc","sl","sg","sn","ssn","ssr","ssl","sv","s","ss","vr","vl","vn","vk","v"];
var nm4 = ["e","i","o","u","e","i","o","u","e","i","o","u","e","i","o","u","e","i","o","u","e","i","o","u","e","i","o","u","e","i","o","u","e","i","o","u","e","i","o","u","e","i","o","u","e","i","o","u","e","i","o","u","e","i","o","u","a","a","a","ie","ee","ia"];
var nm5 = ["c","d","g","k","l","m","n","r","s","v","z"];
var nm6 = ["","","","","","d","g","h","l","m","n","s","t","y"];

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
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd3 = Math.random() * nm3.length | 0;
	rnd4 = Math.random() * nm4.length | 0;
	rnd5 = Math.random() * nm6.length | 0;
	if(i < 5){
		while(nm3[rnd3] === nm1[rnd] || nm3[rnd3] === nm6[rnd5]){
			rnd3 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm6[rnd5];
	}else{
		rnd6 = Math.random() * nm4.length | 0;
		rnd7 = Math.random() * nm5.length | 0;
		if(i < 8){
			while(nm3[rnd3] === nm5[rnd7] || nm5[rnd7] === nm6[rnd5]){
				rnd7 = Math.random() * nm5.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd7] + nm4[rnd6] + nm6[rnd5];
		}else{
			rnd8 = Math.random() * nm4.length | 0;
			rnd9 = Math.random() * nm5.length | 0;
			while(nm5[rnd9] === nm5[rnd7] || nm5[rnd9] === nm6[rnd5]){
				rnd9 = Math.random() * nm5.length | 0;
			}
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3] + nm4[rnd4] + nm5[rnd7] + nm4[rnd6] + nm5[rnd9] + nm4[rnd8] + nm6[rnd5];
		}
	}
	testSwear(nMs);
}