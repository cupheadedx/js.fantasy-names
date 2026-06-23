var nm1 = ["bh","dh","gh","kh","qh","rh","th","vh","wh","xh","zh"];
var nm2 = ["Ã¢","Ã´","Ã»"];
var nm3 = ["b","d","g","h","m","n","r","v","z"];
var nm4 = ["a","e","o","u"];
var nm5 = ["d","m","n","r","v","z"];
var nm6 = ["a","i","o","u"];

var br = "";

function nameGen(){
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		rnd = Math.random() * nm1.length | 0;
		rnd2 = Math.random() * nm2.length | 0;
		rnd3 = Math.random() * nm3.length | 0;
		rnd4 = Math.random() * nm4.length | 0;
		rnd5 = Math.random() * nm5.length | 0;
		rnd6 = Math.random() * nm6.length | 0;
		while(nm3[rnd3] === nm5[rnd5]){
			rnd3 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + "n-" + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm6[rnd6] + "-" + nm1[rnd] + nm2[rnd2] + "n";
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(nMs));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}