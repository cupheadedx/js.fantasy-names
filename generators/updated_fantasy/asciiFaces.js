var symArms = [["Â¯\\","/Â¯"],["Â¯\\_","_/Â¯"],["Æª","Ê"],["É³","É²"],["Ê","Ê"],["Îµ","Ð·"],["Î¶","á¶"],["Ñ","Ñ"],["Ù©","Û¶"],["à«®","á"],["à­§","à­¨"],["á","á"],["á","á"],["á¦","á¤"],["â","Â¬"],["â","â"],["â","â"],["â","=â"],["â","â"],["â","â"],["ã½","ï¾"],["ã¾","ï¾"],["ä¹","ã"],["(\\/)","(\\/)"],["\\","/"],["\\,,/","\\,,/"],["\\m/","\\m/"],["~","~"],["/","\\"]];
var rArms = [["Â¬","Â¬"],["É²","É²"],["Ê","Ê"],["Ð·","Ð·"],["Ñ","Ñ"],["Û¶","Û¶"],["à«®","à«®"],["à­¨","à­¨"],["à¸","à¸"],["á","á"],["á¤","á¤"],["á¶","á¶"],["â©","â"],["â","â"],["â","â"],["ã£","ã£"],["ã¥","ã¥"],["ã","ã"],["ã","ã"],["ã","ã"],["/","/"],["=â","=â"],["~","~"]];
var lArms = [["Æª","Æª"],["É³","É³"],["Ê","Ê"],["Îµ","Îµ"],["Î¶","Î¶"],["à«®","à«®"],["à­§","à­§"],["á","á"],["á¦","á¦"],["á","á"],["á¦","á¦"],["â","â"],["â","â"],["â","â"],["â","â"],["ã","ã"],["ã","ã"],["ã½","ã½"],["ä¹","ä¹"],["\\","\\"],["~","~"]];
var armFaces = [["(",")"],["[","]"],["ï´¾","ï´¿"],["|","|"],["((","))"],["à¼¼","à¼½"]];
var faces = [["",""],["Ê","Ê"],["ï´¾","ï´¿"],["|","|"],["|(",")|"],["á","á"],["ê°","ê±"],["((","))"],["[","]"],["|[","]|"],["{","}"],["<",">"],["Ê¢","Ê¡"],["[","]"],["á","á"],["á³","á²"],["à­§","à­¨"],["à­¨","à­§"],["â¬â´â¬â´â¤",")ââ¬â´â¬â´"],["â¬â´â¬â´â¤(","ââ¬â´â¬â´"],["â§","â¦"],["à¼¼","à¼½"]];
var eyes = [["Â¬","Â¬"],["Â°","Â°"],["Â°","o"],["Â´","`"],["Âº","Â°"],["Âº","Âº"],["Ã¬","Ã­"],["ÆÍ","ÆÍ"],["È","È"],["È","Å"],["È","È"],["Ê","Ê"],["Ë","Ë"],["Í","Í"],["Í Â°","Â°"],["Í Â°","Í Â°"],["Í¡Â°","Í¡Â°"],["Í¡â","Í¡â"],["Í¡","Í¡"],["Ï","Ï"],["Ø¨","Ø¨"],["Ü","Ü"],["à° ","à° "],["à² ","à² "],["à²¥","à²¥"],["à²°","à²°"],["à·","à·"],["à¹Ì¯Í¡","à¹Ì¯Í¡"],["àº","àº"],["á","á"],["á","á"],["á´","á´"],["áµ","áµ"],["á½","á½"],["â¢Ì","â¢Ì"],["â¢","â¢"],["â¼","â"],["â","â¼"],["â","â"],["â","â"],["â","â"],["ââ ","â Â¬"],["â","â"],["â","â"],["â¤","â¤"],["â","â"],["â","â"],["â","â"],["â¹","â¹"],["â ","â "],["â°","â°"],["â¶","â"],["â¾","â¾"],["â","â"],["â","â"],["â","â"],["â","â"],["â","â"],["â¥","â¤"],["â¯","â¯"],["â¥","â¥"],["â","â"],["âÍ ","âÍ  "],["â","â"],["â§","â§"],["â¿","â¿"],["â","â"],["â","â"],["â","â"],["â¨±","â¨±"],["â¨´","â¨µ"],["â¨¶","â¨¶"],["â©¹","â©º"],["â©º","â©¹"],["â©¿","âª"],["âª¦","âª§"],["âª§","âª¦"],["âª¨","âª©"],["âª©","âª¨"],["âª°","âª¯"],["â«","â«"],["â±º","â±º"],["â¸","â¸"],["ã»","ã»"],["ä¸","ä¸"],["ê¸","ê¸"],["ê","ê"],["ê","ê"],["ê ","ê "],["ê","ê"],["ï¸¶","ï¸¶"],["ï¾","ï¾"],["ï¿£","ï¿£"],["'Ì","'Ì"],["-","-"],[".","."],["<",">"],[">","á"],[">","<"],["T","T"],["^","^"],["`","Â´"],["o","Â°"],["o","o"],["x","x"]];
var eyeEffects = [["",""],["Â´","`"],["Ë","Ë"],["á¦","á¦"],["á","á"],["áµ","áµ"],["â§","â¦"],["â°","â°"],["âª","âª"],["ã£","Ï"],["ï½¡","ï½¡"],["","Â´"],["","Ê"],["","Ë"],["","á"],["","â¶"],["","â"],["","â§"],["","â¿"],["","ê¦"],["","\""],["","*ï¾"],["",";"],["","`"],["=","="],["`","Â´"]];
var mids = ["Â³","Â·","Ä¹Ì¯","ÊÌ¯","ÍÊ","Íã¤","ÍÊ","ÍÙÍ","Îµ","Ï","Ï","Ð","Ð´","Ñ ","Ñ½","ÙÍ","Ú¡","à±ª","à´","à·´","á²","á","á","á©","á¨","á´","á´¥","â¸","â¿â¿","â¿","â","â","â","â","â","â­â®","â¡","âà±ªâ","â¡","ã­","ã®","äºº","ç","ê","ê¢","í¸","ï¸¿","ï¹","!","-",".","V","_","o","v","~"];
var symEffects = [["",""],["âª","âª"],["(.o. )ï¸µ","ï¸µ( .o.ï¼"],["â»ââ»ï¸µ","ï¸µâ»ââ»"],["â¿","â¿"],["â»ââ»ã","å½¡â»ââ»"],["(.o. )ã","å½¡( .o.)"],["( .â¡.ï¼\\ã","å½¡/(.â¡. ï¼"],["ï½¡","ï½¡"],["ï½¡ã","ãï½¡"],["ç±","ç±"],["â¿ï¸µâ¿ï¸µâ¿","â¿ï¸µâ¿ï¸µâ¿"],["â","â"],["ã","ã"],["â","â"]];
var rightEffects = ["","ï¸µâ»ââ»","ï¸µ( .o.)","ï¸µ/(.â¡. ï¼","â","å½¡â»ââ»","å½¡( .o.)","â¿","å½¡/(.â¡. ï¼","â¬âââ¬","ç±","*:ï½¥ï¾â§","âªâª âª","âªâª","âª"];
var leftEffects = ["","â»ââ»ï¸µ","(.o. )ï¸µ","( .â¡.ï¼\\ï¸µ","â","â»ââ»ã","(.o. )ã","â¿","( .â¡.ï¼\\ã","â¬âââ¬","ç±","â§ï¾ï½¥:*","âªâª âª","âªâª","âª"];

var br = "";

	var faceLeft = "";
	var faceRight = "";
	var eyeLeft = "";
	var eyeRight = "";
	var armRight = "";
	var armLeft = "";
	var armInRight = "";
	var armInLeft = "";
	var extraLeft = "";
	var extraRight = "";
	var mid = "";
	var effectLeft = "";
	var effectRight = "";
function nameGens(type){

	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 8; i++){
		if(i < 2){
			rnd = Math.random() * symArms.length | 0;
			rnd2 = Math.random() * armFaces.length | 0;
			rnd3 = Math.random() * eyes.length | 0;
			rnd4 = Math.random() * mids.length | 0;
			rnd7 = Math.random() * 5 | 0;
			rnd8 = Math.random() * 3 | 0;
			if(rnd7 === 0){
				rnd5 = Math.random() * symEffects.length | 0;
			}else{
				rnd5 = 0;
			}
			if(rnd8 === 0){
				rnd6 = Math.random() * eyeEffects.length | 0;
			}else{
				rnd6 = 0;
			}
			names = symEffects[rnd5][0] + symArms[rnd][0] + armFaces[rnd2][0] + eyeEffects[rnd6][0] + eyes[rnd3][0] + mids[rnd4] + eyes[rnd3][1] + eyeEffects[rnd6][1] + armFaces[rnd2][1] + symArms[rnd][1] + symEffects[rnd5][1];
		}else if(i < 4){
			rnd9 = Math.random() * lArms.length | 0;
			rnd10 = Math.random() * armFaces.length | 0;
			rnd11 = Math.random() * eyes.length | 0;
			rnd12 = Math.random() * mids.length | 0;
			rnd13 = Math.random() * 6 | 0;
			rnd14 = Math.random() * 8 | 0;
			if(rnd13 === 0){
				rnd15 = Math.random() * leftEffects.length | 0;
			}else{
				rnd15 = 0;
			}
			if(rnd14 === 0){
				rnd16 = Math.random() * eyeEffects.length | 0;
			}else{
				rnd16 = 0;
			}
			names = leftEffects[rnd15] + lArms[rnd9][0] + armFaces[rnd10][0] + eyeEffects[rnd16][0] + eyes[rnd11][0] + mids[rnd12] + eyes[rnd11][1] + eyeEffects[rnd16][1] + lArms[rnd9][1] + armFaces[rnd10][1];
		}else if(i < 6){
			rnd17 = Math.random() * rArms.length | 0;
			rnd18 = Math.random() * armFaces.length | 0;
			rnd19 = Math.random() * eyes.length | 0;
			rnd20 = Math.random() * mids.length | 0;
			rnd21 = Math.random() * 6 | 0;
			rnd22 = Math.random() * 8 | 0;
			if(rnd21 === 0){
				rnd23 = Math.random() * rightEffects.length | 0;
			}else{
				rnd23 = 0;
			}
			if(rnd22 === 0){
				rnd24 = Math.random() * eyeEffects.length | 0;
			}else{
				rnd24 = 0;
			}
			names = armFaces[rnd18][0] + rArms[rnd17][0] + eyeEffects[rnd24][0] + eyes[rnd19][0] + mids[rnd20] + eyes[rnd19][1] + eyeEffects[rnd24][1] + armFaces[rnd18][1] + rArms[rnd17][1] + rightEffects[rnd23];

		}else{
			rnd25 = Math.random() * faces.length | 0;
			rnd26 = Math.random() * eyes.length | 0;
			rnd27 = Math.random() * mids.length | 0;
			rnd28 = Math.random() * 8 | 0;
			rnd29 = Math.random() * 8 | 0;
			if(rnd28 === 0){
				rnd30 = Math.random() * symEffects.length | 0;
			}else{
				rnd30 = 0;
			}
			if(rnd29 === 0){
				rnd31 = Math.random() * eyeEffects.length | 0;
			}else{
				rnd31 = 0;
			}
			names = symEffects[rnd30][0] + faces[rnd25][0] + eyeEffects[rnd29][0] + eyes[rnd26][0] + mids[rnd27] + eyes[rnd26][1] + eyeEffects[rnd29][1] + faces[rnd25][1] + symEffects[rnd30][1];
		}
		br = document.createElement('br');
		element.appendChild(document.createTextNode(names));
		element.appendChild(br);
		}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
};
$(document).ready(function(){

	$("#facesL, #eyesLeft, #eyesRight, #symArmsR, #symArmsL, #rArms, #lArms, #mids, #lExtras, #rExtras, #rEffects, #lEffects, #facesR").click(function(){
		$(".fcPc").css("display", "none");
		$(this).children(".fcPc").css("display", "block");
	});
	$(".fcPc").click(function(){
		if($(this).hasClass("faceR")){
			if($(this).hasClass("selected")){
				$("#facesR > .fcPc").removeClass("selected");
				faceRight = "";
			}else{
				$("#facesR > .fcPc").removeClass("selected");
				$(this).addClass("selected");
				faceRight = $(this).html();
			}
		}else if($(this).hasClass("faceL")){
			if($(this).hasClass("selected")){
				$("#facesL > .fcPc").removeClass("selected");
				faceLeft = "";
			}else{
				$("#facesL > .fcPc").removeClass("selected");
				$(this).addClass("selected");
				faceLeft = $(this).html();
			}
		}else if($(this).hasClass("eyesR")){
			if($(this).hasClass("selected")){
				$("#eyesRight > .fcPc").removeClass("selected");
				eyeRight = "";
			}else{
				$("#eyesRight > .fcPc").removeClass("selected");
				$(this).addClass("selected");
				eyeRight = $(this).html();
			}
		}else if($(this).hasClass("eyesL")){
			if($(this).hasClass("selected")){
				$("#eyesLeft > .fcPc").removeClass("selected");
				eyeLeft = "";
			}else{
				$("#eyesLeft > .fcPc").removeClass("selected");
				$(this).addClass("selected");
				eyeLeft = $(this).html();
			}
		}else if($(this).hasClass("symArmR")){
			if($(this).hasClass("selected")){
				$("#symArmsR > .fcPc").removeClass("selected");
				armRight = "";
			}else{
				$("#symArmsR > .fcPc").removeClass("selected");
				$(this).addClass("selected");
				armRight = $(this).html();
				armInRight = "";
			}
		}else if($(this).hasClass("symArmL")){
			if($(this).hasClass("selected")){
				$("#symArmsL > .fcPc").removeClass("selected");
				armLeft = "";
			}else{
				$("#symArmsL > .fcPc").removeClass("selected");
				$(this).addClass("selected");
				armLeft = $(this).html();
				armInLeft = "";
			}
		}else if($(this).hasClass("rArm")){
			if($(this).hasClass("selected")){
				$("#rArms > .fcPc").removeClass("selected");
				armInRight = "";
			}else{
				$("#rArms > .fcPc").removeClass("selected");
				$(this).addClass("selected");
				armInRight = $(this).html();
				armRight = "";
			}
		}else if ($(this).hasClass("lArm")){
			if($(this).hasClass("selected")){
				$("#lArms > .fcPc").removeClass("selected");
				armInLeft = "";
			}else{
				$("#lArms > .fcPc").removeClass("selected");
				$(this).addClass("selected");
				armInLeft = $(this).html();
				armLeft = "";
			}
		}else if($(this).hasClass("mids")){
			if($(this).hasClass("selected")){
				$("#mids > .fcPc").removeClass("selected");
				mid = "";
			}else{
				$("#mids > .fcPc").removeClass("selected");
				$(this).addClass("selected");
				mid = $(this).html();
			}
		}else if($(this).hasClass("extrasR")){
			if($(this).hasClass("selected")){
				$("#rExtras > .fcPc").removeClass("selected");
				extraRight = "";
			}else{
				$("#rExtras > .fcPc").removeClass("selected");
				$(this).addClass("selected");
				extraRight = $(this).html();
			}
		}else if($(this).hasClass("extrasL")){
			if($(this).hasClass("selected")){
				$("#lExtras > .fcPc").removeClass("selected");
				extraLeft = "";
			}else{
				$("#lExtras > .fcPc").removeClass("selected");
				$(this).addClass("selected");
				extraLeft = $(this).html();
			}
		}else if($(this).hasClass("rEffect")){
			if($(this).hasClass("selected")){
				$("#rEffects > .fcPc").removeClass("selected");
				effectRight = "";
			}else{
				$("#rEffects > .fcPc").removeClass("selected");
				$(this).addClass("selected");
				effectRight = $(this).html();
			}
		}else if($(this).hasClass("lEffect")){
			if($(this).hasClass("selected")){
				$("#lEffects > .fcPc").removeClass("selected");
				effectLeft = "";
			}else{
				$("#lEffects > .fcPc").removeClass("selected");
				$(this).addClass("selected");
				effectLeft = $(this).html();
			}
		}
		$("#faceCons").html(effectLeft + armLeft + faceLeft + armInLeft + extraLeft + eyeLeft + mid + eyeRight + extraRight + armInRight + faceRight + armRight + effectRight);
	});
	
	$("#faceCons").click(function(){
		if (document.selection) { 
			var range = document.body.createTextRange();
			range.moveToElementText(document.getElementById("faceCons"));
			range.select().createTextRange();
			document.execCommand("Copy"); 
			window.getSelection().empty();
		} else if (window.getSelection) {
			var range = document.createRange();
			 range.selectNode(document.getElementById("faceCons"));
			 window.getSelection().addRange(range);
			 document.execCommand("Copy");
			window.getSelection().empty();
		}
		$("#copied").fadeIn(500).delay(500).fadeOut(500);
	});
});