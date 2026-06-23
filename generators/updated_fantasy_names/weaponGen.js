$(document).ready(function(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	$(".armorSlct").click(function(){
		var slct = $(this).attr('id');
		slct = slct.slice(0, -4);
		$('.armorSlct').removeClass('slctdType');
		$(this).addClass('slctdType');
		$('#slct > .slctBgs').removeClass('activeCont');
		$("#" + slct).addClass('activeCont');
	});
	$("#hilts > .armBg, #bowtip > .btipBg, #bow > .bowBg, #bowhandle > .swordBg, #staff > .staffBg, #staffbtm > .sbtmBg, #stafftop > .armBg, #pommels > .pommelBg, #crossguards > .armBg, #blade > .swordBg, #handle > .armBg, #axe > .armBg, #mace > .armBg, #hammer > .armBg").click(function(){
		var slct = $(this).attr('id');
		var pSlct = $(this).parent().attr("id");
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$("#" + pSlct + "Img").css({"background-image": "none"});
		}else{
			$("#" + pSlct + " > .armBg, #" + pSlct + " > .pommelBg, #" + pSlct + " > .swordBg, #" + pSlct + " > .staffBg, #" + pSlct + " > .bowBg, #" + pSlct + " > .btipBg").removeClass('active');
			$(this).addClass('active');
			$("#" + pSlct + "Img").css({"background-image": "url(\"../images/weapons/" + slct + ".png\")"});
		}
	});
	$("#save1, #save2, #save3, #save4").click(function(){
		var nm = $(this).attr("name");
		window.localStorage.setItem('weaponSave' + nm, $("#armor").html());
	});
	$("#load1, #load2, #load3, #load4").click(function(){
		var nm = $(this).attr("name");
		$("#armor").html(window.localStorage["weaponSave" + nm]);
	});
	$("#clearAll").click(function(){
		$("#armor > .armPiece").css({"background-image": "none"});
	});
	$("#togRes").click(function(){
		$(".armPiece").resizable();
	});
	$("#toPic").click(function(){ 
		context.clearRect(0, 0, canvas.width, canvas.height);
		$("#canvas").css({"display": "inline"});
		$($(".armPiece").get()).each(function(){
			imgTop = $(this).css("margin-top").replace('px','');
			console.log(imgTop);
			imgLeft = $(this).css("margin-left").replace('px','');
			var img = new Image();
			img.src = $(this).css("background-image").replace('url(\"','').replace('\")','');
			imgWd = img.naturalWidth;
			imgHt = img.naturalHeight;
			context.drawImage(img, imgLeft, imgTop, imgWd, imgHt);
		});
	});
});