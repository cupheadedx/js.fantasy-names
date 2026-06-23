bg = $("#nameGen").css("background-image");

var aang = function(){
	$('#placeholder').css('textTransform', 'inherit');
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	for(i = 0; i < 10; i++){
		if(i < 2){
			if(i === 0){
				nMs = "Names are cool and all, but y'know what's really cool?";
			}else if(i === 1){
				nMs = "Airbending tricks! Check this out!";
			}
			element.appendChild(document.createTextNode(nMs));
		}
		if(i === 9){
			nMs = "(Ah, you found an Easter Egg. There's many more!)";
			element.appendChild(document.createTextNode(nMs));
		}
		br = document.createElement('br');	
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
	$("#nameGen").css("background-image", "url('../images/backgrounds/avatarAang.jpg')");
	triggered = 1;
	reset = 1;
}

var gyatso = function(){
	$('#placeholder').css('textTransform', 'inherit');
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	for(i = 0; i < 10; i++){
		if(i < 5){
			if(i === 0){
				nMs = "There are many names to be found among Air Nomads.";
			}else if(i === 1){
				nMs = "There's Pasang, Tashi, Aang..";
			}else if(i === 2){
				nMs = "..";
			}else if(i === 3){
				nMs = "Would you like to try one of my cakes?";
			}else if(i === 4){
				nMs = "I use an ancient technique to get them just right.";
			}
			element.appendChild(document.createTextNode(nMs));
		}
		if(i === 9){
			nMs = "(Ah, you found an Easter Egg. There's many more!)";
			element.appendChild(document.createTextNode(nMs));
		}
		br = document.createElement('br');	
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
	$("#nameGen").css("background-image", "url('../images/backgrounds/avatarGyatso.jpg')");
	triggered = 1;
	reset = 1;
}
var tenzin = function(){
	$('#placeholder').css('textTransform', 'inherit');
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	for(i = 0; i < 10; i++){
		if(i < 4){
			if(i === 0){
				nMs = "If you want, I can show you some ancient Air Nomad scrolls.";
			}else if(i === 1){
				nMs = "They're full of rich traditions and names of old masters.";
			}else if(i === 2){
				nMs = "My father, Aang, and I found many of these on our travels.";
			}else if(i === 3){
				nMs = "They're among my most precious memories." ;
			}
			element.appendChild(document.createTextNode(nMs));
		}
		if(i === 9){
			nMs = "(Ah, you found an Easter Egg. There's many more!)";
			element.appendChild(document.createTextNode(nMs));
		}
		br = document.createElement('br');	
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
	$("#nameGen").css("background-image", "url('../images/backgrounds/avatarTenzin.jpg')");
	triggered = 1;
	reset = 1;
}