var nm1 = ["b","br","h","n","p","pr","r","w","wh"];
var nm2 = ["enny","eehy","eeny","eny","inny","iny","iehy","ieny","oohy","oony"];
var nm3 = ["a","e","aa","ee","i","ie","ia"];

var br = "";

function nameGen(){
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		rnd = Math.random() * nm1.length | 0;
		rnd2 = Math.random() * nm2.length | 0;
		rnd3 = Math.random() * nm1.length | 0;
		rnd4 = Math.random() * nm2.length | 0;
		rnd5 = Math.random() * nm1.length | 0;
		rnd6 = Math.random() * nm2.length | 0;
		rnd7 = Math.random() * nm1.length | 0;
		rnd8 = Math.random() * nm2.length | 0;
		rnd9 = Math.random() * nm3.length | 0;
		while(nm1[rnd3] === nm1[rnd5] || nm1[rnd3] === nm1[rnd]){
			rnd3 = Math.random() * nm1.length | 0;
		}
		while(nm1[rnd7] === nm1[rnd5]){
			rnd7 = Math.random() * nm1.length | 0;
		}
		names = nm1[rnd] + nm2[rnd2] + "-" + nm1[rnd3] + nm2[rnd4] + "-" + nm1[rnd5] + nm2[rnd6] + "-" + nm1[rnd7] + nm2[rnd8] + "-h" + nm3[rnd9] + "h";
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(names));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}