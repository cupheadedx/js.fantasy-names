$(document).ready(function(){
	var gnd = "";	
	var bPlate = "on";
	var symShld = "off";
	var helm = "";
	var shldRight = "";
	var shldLeft = "";
	var chest = "";
	var wings = "";
	var legs = "";
	var cloak = "";
	var bcloak = "";
	var feet = "";
	var bfeet = "";
	var hands = "";
	var type = "plate";
		var canvas = document.getElementById("canvas");
		var context = canvas.getContext("2d");
	$(".armorSlct").click(function(){
		var slct = $(this).attr('id');
		$('#armorType > .armorSlct').removeClass('slctdType');
		$(this).addClass('slctdType');
		if(slct === "plate"){
			type = "plate";
			if(gnd === "male"){
				$(".armBg").each(function(i, obj){
					var curId = $(this).attr('id');
					var newUrl = "url('../images/armor/male/" + curId + ".png')";
					$(this).css("background-image", newUrl);
				});
			}else{
				$(".armBg").each(function(i, obj){
					var curId = $(this).attr('id');
					var newUrl = "url('../images/armor/female/" + curId + ".png')";
					$(this).css("background-image", newUrl);
				});
				if(bPlate === 'off'){
					$("#chestArm").css("background-image", "url('../images/armor/female/b" + chest + ".png')");
					$("#chestBg > .armBg").each(function(i, obj){
						var curId = $(this).attr('id');
						var newUrl = "url('../images/armor/female/b" + curId + ".png')";
						$(this).css("background-image", newUrl);
					});
				}
			}
		}else if(slct === "leather"){
			type = "leather";
			if(gnd === "male"){
				$(".armBg").each(function(i, obj){
					var curId = $(this).attr('id');
					var newUrl = "url('../images/armor/male/leather/" + curId + ".png')";
					$(this).css("background-image", newUrl);
				});
			}else{
				$(".armBg").each(function(i, obj){
					var curId = $(this).attr('id');
					var newUrl = "url('../images/armor/female/leather/" + curId + ".png')";
					$(this).css("background-image", newUrl);
				});
			}
		}else if(slct === "cloth"){
			type = "cloth";
			if(gnd === "male"){
				$(".armBg").each(function(i, obj){
					var curId = $(this).attr('id');
					var newUrl = "url('../images/armor/male/cloth/" + curId + ".png')";
					$(this).css("background-image", newUrl);
				});
			}else{
				$(".armBg").each(function(i, obj){
					var curId = $(this).attr('id');
					var newUrl = "url('../images/armor/female/cloth/" + curId + ".png')";
					$(this).css("background-image", newUrl);
				});
			}
		}
	});
	$(".selectionLeft").click(function(){
		var slct = $(this).attr('id');
		$('.slctnLeft > .selectionLeft').removeClass('activeTitleLeft');
		$(this).addClass('activeTitleLeft');
		$('.slctContLeft > .slctBgs').removeClass('activeContLeft');
		$("#" + slct + 'Bg').addClass('activeContLeft');
	});
	$(".selectionRight").click(function(){
		var slct = $(this).attr('id');
		$('.slctnRight > .selectionRight').removeClass('activeTitleRight');
		$(this).addClass('activeTitleRight');
		$('.slctContRight > .slctBgs').removeClass('activeContRight');
		$("#" + slct + 'Bg').addClass('activeContRight');
	});
	$("#save1").click(function(){
		localStorage.armorSet1Crown = crown;
		localStorage.armorSet1Wing = wings;
		localStorage.armorSet1Helm = helm;
		localStorage.armorSet1shldRight = shldRight;
		localStorage.armorSet1shldLeft = shldLeft;
		localStorage.armorSet1chest = chest;
		localStorage.armorSet1legs = legs;
		localStorage.armorSet1cloak = cloak;
		localStorage.armorSet1bcloak = bcloak;
		localStorage.armorSet1feet = feet;
		localStorage.armorSet1bfeet = bfeet;
		localStorage.armorSet1hands = hands
		localStorage.armorSet1Type = type;
		localStorage.armorSet1Gender = gnd;
		localStorage.armorSet1chestmargin = $("#chestArm").css("margin-left");
		localStorage.armorSet1chestheight = $("#chestArm").css("height");
		localStorage.armorSet1chestmargintop = $("#chestArm").css("margin-top");
		localStorage.armorSet1chestwidth = $("#chestArm").css("width");
		localStorage.armorSet1helmmargin = $("#helmArm").css("margin-top");
		localStorage.armorSet1helmheight = $("#helmArm").css("height");
		localStorage.armorSet1cloakwidth = $("#cloakArm").css("width");
		localStorage.armorSet1cloakheight = $("#cloakArm").css("height");
		localStorage.armorSet1cloakmargin = $("#cloakArm").css("margin-left");
		localStorage.armorSet1cloakmargintop = $("#cloakArm").css("margin-top");
		localStorage.armorSet1feetmargin = $("#feetArm").css("margin-left");
		localStorage.armorSet1bfeetmargin = $("#bfeetArm").css("margin-left");
	});
	$("#save2").click(function(){
		localStorage.armorSet2Crown = crown;
		localStorage.armorSet2Wing = wings;
		localStorage.armorSet2Helm = helm;
		localStorage.armorSet2shldRight = shldRight;
		localStorage.armorSet2shldLeft = shldLeft;
		localStorage.armorSet2chest = chest;
		localStorage.armorSet2legs = legs;
		localStorage.armorSet2cloak = cloak;
		localStorage.armorSet2bcloak = bcloak;
		localStorage.armorSet2feet = feet;
		localStorage.armorSet2bfeet = bfeet;
		localStorage.armorSet2hands = hands
		localStorage.armorSet2Type = type;
		localStorage.armorSet2Gender = gnd;
		localStorage.armorSet2chestmargin = $("#chestArm").css("margin-left");
		localStorage.armorSet2chestheight = $("#chestArm").css("height");
		localStorage.armorSet2chestmargintop = $("#chestArm").css("margin-top");
		localStorage.armorSet2chestwidth = $("#chestArm").css("width");
		localStorage.armorSet2helmmargin = $("#helmArm").css("margin-top");
		localStorage.armorSet2helmheight = $("#helmArm").css("height");
		localStorage.armorSet2cloakwidth = $("#cloakArm").css("width");
		localStorage.armorSet2cloakheight = $("#cloakArm").css("height");
		localStorage.armorSet2cloakmargin = $("#cloakArm").css("margin-left");
		localStorage.armorSet2cloakmargintop = $("#cloakArm").css("margin-top");
		localStorage.armorSet2feetmargin = $("#feetArm").css("margin-left");
		localStorage.armorSet2bfeetmargin = $("#bfeetArm").css("margin-left");
	});
	$("#save3").click(function(){
		localStorage.armorSet1Crown = crown;
		localStorage.armorSet1Wing = wings;
		localStorage.armorSet3Helm = helm;
		localStorage.armorSet3shldRight = shldRight;
		localStorage.armorSet3shldLeft = shldLeft;
		localStorage.armorSet3chest = chest;
		localStorage.armorSet3legs = legs;
		localStorage.armorSet3cloak = cloak;
		localStorage.armorSet3bcloak = bcloak;
		localStorage.armorSet3feet = feet;
		localStorage.armorSet3bfeet = bfeet;
		localStorage.armorSet3hands = hands
		localStorage.armorSet3Type = type;
		localStorage.armorSet3Gender = gnd;
		localStorage.armorSet3chestmargin = $("#chestArm").css("margin-left");
		localStorage.armorSet3chestheight = $("#chestArm").css("height");
		localStorage.armorSet3chestmargintop = $("#chestArm").css("margin-top");
		localStorage.armorSet3chestwidth = $("#chestArm").css("width");
		localStorage.armorSet3helmmargin = $("#helmArm").css("margin-top");
		localStorage.armorSet3helmheight = $("#helmArm").css("height");
		localStorage.armorSet3cloakwidth = $("#cloakArm").css("width");
		localStorage.armorSet3cloakheight = $("#cloakArm").css("height");
		localStorage.armorSet3cloakmargin = $("#cloakArm").css("margin-left");
		localStorage.armorSet3cloakmargintop = $("#cloakArm").css("margin-top");
		localStorage.armorSet3feetmargin = $("#feetArm").css("margin-left");
		localStorage.armorSet3bfeetmargin = $("#bfeetArm").css("margin-left");
	});
	$("#save4").click(function(){
		localStorage.armorSet4Crown = crown;
		localStorage.armorSet4Wing = wings;
		localStorage.armorSet4Helm = helm;
		localStorage.armorSet4shldRight = shldRight;
		localStorage.armorSet4shldLeft = shldLeft;
		localStorage.armorSet4chest = chest;
		localStorage.armorSet4legs = legs;
		localStorage.armorSet4cloak = cloak;
		localStorage.armorSet4bcloak = bcloak;
		localStorage.armorSet4feet = feet;
		localStorage.armorSet4bfeet = bfeet;
		localStorage.armorSet4hands = hands
		localStorage.armorSet4Type = type;
		localStorage.armorSet4Gender = gnd;
		localStorage.armorSet4chestmargin = $("#chestArm").css("margin-left");
		localStorage.armorSet4chestheight = $("#chestArm").css("height");
		localStorage.armorSet4chestmargintop = $("#chestArm").css("margin-top");
		localStorage.armorSet4chestwidth = $("#chestArm").css("width");
		localStorage.armorSet4helmmargin = $("#helmArm").css("margin-top");
		localStorage.armorSet4helmheight = $("#helmArm").css("height");
		localStorage.armorSet4cloakwidth = $("#cloakArm").css("width");
		localStorage.armorSet4cloakheight = $("#cloakArm").css("height");
		localStorage.armorSet4cloakmargin = $("#cloakArm").css("margin-left");
		localStorage.armorSet4cloakmargintop = $("#cloakArm").css("margin-top");
		localStorage.armorSet4feetmargin = $("#feetArm").css("margin-left");
		localStorage.armorSet4bfeetmargin = $("#bfeetArm").css("margin-left");
	});
	$(".loadBtn").click(function(){
		var slct = $(this).attr('id');
		if(slct === "load1"){
			crown =localStorage.getItem("armorSet1Crown");
			wings = localStorage.getItem("armorSet1Wing");
			type = localStorage.getItem("armorSet1Type");
			gnd = localStorage.getItem("armorSet1Gender");
			helm = localStorage.getItem("armorSet1Helm");
			shldRight = localStorage.getItem("armorSet1shldRight");
			shldLeft = localStorage.getItem("armorSet1shldLeft");
			chest = localStorage.getItem("armorSet1chest");
			legs = localStorage.getItem("armorSet1legs");
			cloak = localStorage.getItem("armorSet1cloak");
			bcloak = localStorage.getItem("armorSet1bcloak");
			feet = localStorage.getItem("armorSet1feet");
			bfeet = localStorage.getItem("armorSet1bfeet");
			hands = localStorage.getItem("armorSet1hands");
			$("#chestArm").css({"margin-left": localStorage.getItem("armorSet1chestmargin"), "height": localStorage.getItem("armorSet1chestheight"), "margin-top": localStorage.getItem("armorSet1chestmargintop"), "width": localStorage.getItem("armorSet1chestwidth")});
			$("#helmArm").css({"margin-top": localStorage.getItem("armorSet1helmmargin"), "height": localStorage.getItem("armorSet1helmheight")});
			$("#cloakArm").css({"width": localStorage.getItem("armorSet1cloakwidth"), "height": localStorage.getItem("armorSet1cloakheight"), "margin-left": localStorage.getItem("armorSet1cloakmargin"), "margin-top": localStorage.getItem("armorSet1cloakmargintop")});
			$("feetArm").css({"margin-left": localStorage.getItem("armorSet1feetmargin")});
			$("bfeetArm").css({"margin-left": localStorage.getItem("armorSet1bfeetmargin")});
		}else if(slct === "load2"){
			crown =localStorage.getItem("armorSet2Crown");
			wings = localStorage.getItem("armorSet2Wing");
			type = localStorage.getItem("armorSet2Type");
			gnd = localStorage.getItem("armorSet2Gender");
			helm = localStorage.getItem("armorSet2Helm");
			shldRight = localStorage.getItem("armorSet2shldRight");
			shldLeft = localStorage.getItem("armorSet2shldLeft");
			chest = localStorage.getItem("armorSet2chest");
			legs = localStorage.getItem("armorSet2legs");
			cloak = localStorage.getItem("armorSet2cloak");
			bcloak = localStorage.getItem("armorSet2bcloak");
			feet = localStorage.getItem("armorSet2feet");
			bfeet = localStorage.getItem("armorSet2bfeet");
			hands = localStorage.getItem("armorSet2hands");
			$("#chestArm").css({"margin-left": localStorage.getItem("armorSet2chestmargin"), "height": localStorage.getItem("armorSet2chestheight"), "margin-top": localStorage.getItem("armorSet2chestmargintop"), "width": localStorage.getItem("armorSet2chestwidth")});
			$("#helmArm").css({"margin-top": localStorage.getItem("armorSet2helmmargin"), "height": localStorage.getItem("armorSet2helmheight")});
			$("#cloakArm").css({"width": localStorage.getItem("armorSet2cloakwidth"), "height": localStorage.getItem("armorSet2cloakheight"), "margin-left": localStorage.getItem("armorSet2cloakmargin"), "margin-top": localStorage.getItem("armorSet2cloakmargintop")});
			$("feetArm").css({"margin-left": localStorage.getItem("armorSet2feetmargin")});
			$("bfeetArm").css({"margin-left": localStorage.getItem("armorSet2bfeetmargin")});
		}else if(slct === "load3"){
			crown =localStorage.getItem("armorSet3Crown");
			wings = localStorage.getItem("armorSet3Wing");
			type = localStorage.getItem("armorSet3Type");
			gnd = localStorage.getItem("armorSet3Gender");
			helm = localStorage.getItem("armorSet3Helm");
			shldRight = localStorage.getItem("armorSet3shldRight");
			shldLeft = localStorage.getItem("armorSet3shldLeft");
			chest = localStorage.getItem("armorSet3chest");
			legs = localStorage.getItem("armorSet3legs");
			cloak = localStorage.getItem("armorSet3cloak");
			bcloak = localStorage.getItem("armorSet3bcloak");
			feet = localStorage.getItem("armorSet3feet");
			bfeet = localStorage.getItem("armorSet3bfeet");
			hands = localStorage.getItem("armorSet3hands");
			$("#chestArm").css({"margin-left": localStorage.getItem("armorSet3chestmargin"), "height": localStorage.getItem("armorSet3chestheight"), "margin-top": localStorage.getItem("armorSet3chestmargintop"), "width": localStorage.getItem("armorSet3chestwidth")});
			$("#helmArm").css({"margin-top": localStorage.getItem("armorSet3helmmargin"), "height": localStorage.getItem("armorSet3helmheight")});
			$("#cloakArm").css({"width": localStorage.getItem("armorSet3cloakwidth"), "height": localStorage.getItem("armorSet3cloakheight"), "margin-left": localStorage.getItem("armorSet3cloakmargin"), "margin-top": localStorage.getItem("armorSet3cloakmargintop")});
			$("feetArm").css({"margin-left": localStorage.getItem("armorSet3feetmargin")});
			$("bfeetArm").css({"margin-left": localStorage.getItem("armorSet3bfeetmargin")});
		}else if(slct === "load4"){
			crown =localStorage.getItem("armorSet4Crown");
			wings = localStorage.getItem("armorSet4Wing");
			type = localStorage.getItem("armorSet4Type");
			gnd = localStorage.getItem("armorSet4Gender");
			helm = localStorage.getItem("armorSet4Helm");
			shldRight = localStorage.getItem("armorSet4shldRight");
			shldLeft = localStorage.getItem("armorSet4shldLeft");
			chest = localStorage.getItem("armorSet4chest");
			legs = localStorage.getItem("armorSet4legs");
			cloak = localStorage.getItem("armorSet4cloak");
			bcloak = localStorage.getItem("armorSet4bcloak");
			feet = localStorage.getItem("armorSet4feet");
			bfeet = localStorage.getItem("armorSet4bfeet");
			hands = localStorage.getItem("armorSet4hands");
			$("#chestArm").css({"margin-left": localStorage.getItem("armorSet4chestmargin"), "height": localStorage.getItem("armorSet4chestheight"), "margin-top": localStorage.getItem("armorSet4chestmargintop"), "width": localStorage.getItem("armorSet4chestwidth")});
			$("#helmArm").css({"margin-top": localStorage.getItem("armorSet4helmmargin"), "height": localStorage.getItem("armorSet4helmheight")});
			$("#cloakArm").css({"width": localStorage.getItem("armorSet4cloakwidth"), "height": localStorage.getItem("armorSet4cloakheight"), "margin-left": localStorage.getItem("armorSet4cloakmargin"), "margin-top": localStorage.getItem("armorSet4cloakmargintop")});
			$("feetArm").css({"margin-left": localStorage.getItem("armorSet4feetmargin")});
			$("bfeetArm").css({"margin-left": localStorage.getItem("armorSet4bfeetmargin")});
		}
		$("#crownArm").css("background-image", "url('../images/armor/" + crown + ".png')");
		$("#wingArm").css("background-image", "url('../images/armor/" + wings + ".png')");
		if(gnd === "male"){
			$("#gndArm").css("background-image", "url('../images/armor/male/body.png')");
			if(type === "plate"){
				$(".armBg").each(function(i, obj){
					var curId = $(this).attr('id');
					var newUrl = "url('../images/armor/male/" + curId + ".png')";
					$(this).css("background-image", newUrl);
				});
			}else if(type === "leather"){
				$(".armBg").each(function(i, obj){
					var curId = $(this).attr('id');
					var newUrl = "url('../images/armor/male/leather/" + curId + ".png')";
					$(this).css("background-image", newUrl);
				});
			}else if(type === "cloth"){
				$(".armBg").each(function(i, obj){
					var curId = $(this).attr('id');
					var newUrl = "url('../images/armor/male/cloth/" + curId + ".png')";
					$(this).css("background-image", newUrl);
				});
			}
			$("#helmArm").css("background-image", "url('../images/armor/male/" + helm + ".png')");
			$("#shldRightArm").css("background-image", "url('../images/armor/male/" + shldRight + ".png')");
			$("#shldLeftArm").css("background-image", "url('../images/armor/male/" + shldLeft + ".png')");
			$("#chestArm").css("background-image", "url('../images/armor/male/" + chest + ".png')");
			$("#legsArm").css("background-image", "url('../images/armor/male/" + legs + ".png')");
			$("#feetArm").css("background-image", "url('../images/armor/male/" + feet + ".png')");
			$("#bfeetArm").css("background-image", "url('../images/armor/male/" + bfeet + ".png')");
			$("#cloakArm").css("background-image", "url('../images/armor/male/" + cloak + ".png')");
			$("#bcloakArm").css("background-image", "url('../images/armor/male/" + bcloak + ".png')");
			$("#handsArm").css("background-image", "url('../images/armor/male/" + hands + ".png')");
		}else{
			$("#gndArm").css("background-image", "url('../images/armor/female/body.png')");
			if(type === "plate"){
				$(".armBg").each(function(i, obj){
					var curId = $(this).attr('id');
					var newUrl = "url('../images/armor/female/" + curId + ".png')";
					$(this).css("background-image", newUrl);
				});
			}else if(type === "leather"){
				$(".armBg").each(function(i, obj){
					var curId = $(this).attr('id');
					var newUrl = "url('../images/armor/female/leather/" + curId + ".png')";
					$(this).css("background-image", newUrl);
				});
			}else if(type === "cloth"){
				$(".armBg").each(function(i, obj){
					var curId = $(this).attr('id');
					var newUrl = "url('../images/armor/female/cloth/" + curId + ".png')";
					$(this).css("background-image", newUrl);
				});
			}
			$("#helmArm").css("background-image", "url('../images/armor/female/" + helm + ".png')");
			$("#shldRightArm").css("background-image", "url('../images/armor/female/" + shldRight + ".png')");
			$("#shldLeftArm").css("background-image", "url('../images/armor/female/" + shldLeft + ".png')");
			$("#chestArm").css("background-image", "url('../images/armor/female/" + chest + ".png')");
			$("#legsArm").css("background-image", "url('../images/armor/female/" + legs + ".png')");
			$("#feetArm").css("background-image", "url('../images/armor/female/" + feet + ".png')");
			$("#bfeetArm").css("background-image", "url('../images/armor/female/" + bfeet + ".png')");
			$("#cloakArm").css("background-image", "url('../images/armor/female/" + cloak + ".png')");
			$("#bcloakArm").css("background-image", "url('../images/armor/female/" + bcloak + ".png')");
			$("#handsArm").css("background-image", "url('../images/armor/female/" + hands + ".png')");
			if(type === "plate"){
				if(bPlate === 'off'){
					$("#chestArm").css("background-image", "url('../images/armor/female/b" + chest + ".png')");
					$("#chestBg > .armBg").each(function(i, obj){
						var curId = $(this).attr('id');
						var newUrl = "url('../images/armor/female/b" + curId + ".png')";
						$(this).css("background-image", newUrl);
					});
				}
			}
		}
		if(type === "plate"){
			$("#plate").addClass("slctdType");
			$("#leather").removeClass("slctdType");
			$("#cloth").removeClass("slctdType");
		}else if(type === "leather"){
			$("#leather").addClass("slctdType");
			$("#plate").removeClass("slctdType");
			$("#cloth").removeClass("slctdType");
		}else{
			$("#cloth").addClass("slctdType");
			$("#leather").removeClass("slctdType");
			$("#plate").removeClass("slctdType");
		}
		if(gnd === "male"){
			$("#male").addClass("slctdGender");
			$("#female").removeClass("slctdGender");
		}else{
			$("#female").addClass("slctdGender");
			$("#male").removeClass("slctdGender");
		}
	});
	$(".genderSlct").click(function(){
		gnd = $(this).attr('id');
		$('#gender > .genderSlct').removeClass('slctdGender');
		$(this).addClass('slctdGender');
		if(gnd === 'male'){
			$("#gndArm").css("background-image", "url('../images/armor/male/body.png')");
			if(type === "plate"){
				$(".armBg").each(function(i, obj){
					var curId = $(this).attr('id');
					var newUrl = "url('../images/armor/male/" + curId + ".png')";
					$(this).css("background-image", newUrl);
				});
			}else if(type === "leather"){
				$(".armBg").each(function(i, obj){
					var curId = $(this).attr('id');
					var newUrl = "url('../images/armor/male/leather/" + curId + ".png')";
					$(this).css("background-image", newUrl);
				});
			}else if(type === "cloth"){
				$(".armBg").each(function(i, obj){
					var curId = $(this).attr('id');
					var newUrl = "url('../images/armor/male/cloth/" + curId + ".png')";
					$(this).css("background-image", newUrl);
				});
			}
			$("#helmArm").css("background-image", "url('../images/armor/male/" + helm + ".png')");
			$("#shldRightArm").css("background-image", "url('../images/armor/male/" + shldRight + ".png')");
			$("#shldLeftArm").css("background-image", "url('../images/armor/male/" + shldLeft + ".png')");
			$("#chestArm").css("background-image", "url('../images/armor/male/" + chest + ".png')");
			$("#legsArm").css("background-image", "url('../images/armor/male/" + legs + ".png')");
			$("#feetArm").css("background-image", "url('../images/armor/male/" + feet + ".png')");
			$("#bfeetArm").css("background-image", "url('../images/armor/male/" + bfeet + ".png')");
			$("#cloakArm").css("background-image", "url('../images/armor/male/" + cloak + ".png')");
			$("#bcloakArm").css("background-image", "url('../images/armor/male/" + bcloak + ".png')");
			$("#handsArm").css("background-image", "url('../images/armor/male/" + hands + ".png')");
		}else{
			$("#gndArm").css("background-image", "url('../images/armor/female/body.png')");
			if(type === "plate"){
				$(".armBg").each(function(i, obj){
					var curId = $(this).attr('id');
					var newUrl = "url('../images/armor/female/" + curId + ".png')";
					$(this).css("background-image", newUrl);
				});
			}else if(type === "leather"){
				$(".armBg").each(function(i, obj){
					var curId = $(this).attr('id');
					var newUrl = "url('../images/armor/female/leather/" + curId + ".png')";
					$(this).css("background-image", newUrl);
				});
			}else if(type === "cloth"){
				$(".armBg").each(function(i, obj){
					var curId = $(this).attr('id');
					var newUrl = "url('../images/armor/female/cloth/" + curId + ".png')";
					$(this).css("background-image", newUrl);
				});
			}
			$("#helmArm").css("background-image", "url('../images/armor/female/" + helm + ".png')");
			$("#shldRightArm").css("background-image", "url('../images/armor/female/" + shldRight + ".png')");
			$("#shldLeftArm").css("background-image", "url('../images/armor/female/" + shldLeft + ".png')");
			$("#chestArm").css("background-image", "url('../images/armor/female/" + chest + ".png')");
			$("#legsArm").css("background-image", "url('../images/armor/female/" + legs + ".png')");
			$("#feetArm").css("background-image", "url('../images/armor/female/" + feet + ".png')");
			$("#bfeetArm").css("background-image", "url('../images/armor/female/" + bfeet + ".png')");
			$("#cloakArm").css("background-image", "url('../images/armor/female/" + cloak + ".png')");
			$("#bcloakArm").css("background-image", "url('../images/armor/female/" + bcloak + ".png')");
			$("#handsArm").css("background-image", "url('../images/armor/female/" + hands + ".png')");
			if(type === "plate"){
				if(bPlate === 'off'){
					$("#chestArm").css("background-image", "url('../images/armor/female/b" + chest + ".png')");
					$("#chestBg > .armBg").each(function(i, obj){
						var curId = $(this).attr('id');
						var newUrl = "url('../images/armor/female/b" + curId + ".png')";
						$(this).css("background-image", newUrl);
					});
				}
			}
		}
	});
	$("#bPlateOn").click(function(){
		bPlate = "on";
		$("#bPlateOn").css('display', 'none');
		$("#bPlateOff").css('display', 'inline');
		if(gnd === "female" && type === "plate"){
			$("#chestArm").css("background-image", "url('../images/armor/female/" + chest + ".png')");
			$("#chestBg > .armBg").each(function(i, obj){
				var curId = $(this).attr('id');
				var newUrl = "url('../images/armor/female/" + curId + ".png')";
				$(this).css("background-image", newUrl);
			});
		}
	});
	$("#bPlateOff").click(function(){
		bPlate = "off";
		$("#bPlateOff").css('display', 'none');
		$("#bPlateOn").css('display', 'inline');
		if(gnd === "female" && type === "plate"){
			$("#chestArm").css("background-image", "url('../images/armor/female/b" + chest + ".png')");
			$("#chestBg > .armBg").each(function(i, obj){
				var curId = $(this).attr('id');
				var newUrl = "url('../images/armor/female/b" + curId + ".png')";
				$(this).css("background-image", newUrl);
			});
		}
	});
	$("#symShldOn").click(function(){
		symShld = "on";
		$("#symShldOn").css('display', 'none');
		$("#symShldOff").css('display', 'inline');
	});
	$("#symShldOff").click(function(){
		symShld = "off";
		$("#symShldOff").css('display', 'none');
		$("#symShldOn").css('display', 'inline');
	});
	$("#shldLeftBg > .armBg").click(function(){
		nshldLeft = $(this).attr('id');
		fshldLeft = "leather/" + $(this).attr('id');
		cshldLeft = "cloth/" + $(this).attr('id');
		if(nshldLeft === shldLeft || fshldLeft === shldLeft || cshldLeft === shldLeft){
			if(symShld === "on"){
				$("#shldRightArm").css('background-image', 'none');
				$("#shldLeftArm").css('background-image', 'none');
				 shldRight = "";
				 shldLeft = "";
			}else{
				$("#shldLeftArm").css('background-image', 'none');
				 shldLeft = "";
			}
		}else{
			var slct = $(this).css('background-image');
			if(symShld === "on"){
				$("#shldRightArm").css('background-image', slct);
				$("#shldLeftArm").css('background-image', slct);
				if(type === "plate"){
					shldLeft = nshldLeft;
					shldRight = nshldLeft;
				}else if(type === "leather"){
					shldLeft = "leather/" + nshldLeft;
					shldRight = "leather/" + nshldLeft;
				}else if(type === "cloth"){
					shldLeft = "cloth/" + nshldLeft;
					shldRight = "cloth/" + nshldLeft;
				}
			}else{
				$("#shldLeftArm").css('background-image', slct);
				if(type === "plate"){
					shldLeft = nshldLeft;
				}else if(type === "leather"){
					shldLeft = "leather/" + nshldLeft;
				}else if(type === "cloth"){
					shldLeft = "cloth/" + nshldLeft;
				}
			}	
		}	
	});
	$("#shldRightBg > .armBg").click(function(){
		nshldRight = $(this).attr('id');
		fshldRight = "leather/" + $(this).attr('id');
		cshldRight = "cloth/" + $(this).attr('id');
		if(nshldRight === shldRight || fshldRight === shldRight || cshldRight === shldRight){
			if(symShld === "on"){
				$("#shldRightArm").css('background-image', 'none');
				$("#shldLeftArm").css('background-image', 'none');
				 shldRight = "";
				 shldLeft = "";
			}else{
				$("#shldRightArm").css('background-image', 'none');
				 shldRight = "";
			}
		}else{
			var slct = $(this).css('background-image');
			if(symShld === "on"){
				$("#shldRightArm").css('background-image', slct);
				$("#shldLeftArm").css('background-image', slct);
				if(type === "plate"){
					shldLeft = nshldRight;
					shldRight = nshldRight;
				}else if(type === "leather"){
					shldLeft = "leather/" + nshldRight;
					shldRight = "leather/" + nshldRight;
				}else if(type === "cloth"){
					shldLeft = "cloth/" + nshldRight;
					shldRight = "cloth/" + nshldRight;
				}
			}else{
				$("#shldRightArm").css('background-image', slct);
				if(type === "plate"){
					shldRight = nshldRight;
				}else if(type === "leather"){
					shldRight = "leather/" + nshldRight;
				}else if(type === "cloth"){
					shldRight = "cloth/" + nshldRight;
				}
			}	
		}
	});
	$("#clearAll").click(function(){
		$("#armor > .armorPieces > .armPiece").css('background-image', 'none');
		helm = "";
		shldRight = "";
		shldLeft = "";
		chest = "";
		legs = "";
		cloak = "";
		bcloak = "";
		feet = "";
		bfeet = "";
		hands = "";
	});
	$("#chestBg > .armBg").click(function(){
		nchest = $(this).attr('id');
		lchest = "leather/" + nchest;
		cchest = "cloth/" + nchest;
		if(nchest === chest || lchest === chest || cchest === chest){
			$("#chestArm").css('background-image', 'none');
			chest = "";
		}else{
			var slct = $(this).css('background-image');
			$("#chestArm").css('background-image', slct);
			if(type === "plate"){
				$("#chestArm").css({"margin-left": "231px", "height": "135px", "margin-top": "177px", "width": "135px"});
				chest = nchest;
			}else if(type === "leather"){
				$("#chestArm").css({"margin-left": "230px", "height": "166px", "margin-top": "177px", "width": "135px"});
				chest = "leather/" + nchest;
			}else if(type === "cloth"){
				$("#chestArm").css({"margin-left": "222px", "height": "300px", "margin-top": "183px", "width": "155px"});
				chest = "cloth/" + nchest;
			}
		}
	});
	$("#feetBg > .armBg").click(function(){
		nfeet = $(this).attr('id');
		lfeet = "leather/" + $(this).attr('id');
		cfeet = "cloth/" + $(this).attr('id');
		var slct = $(this).css('background-image');
		if(nfeet === feet || feet === lfeet || feet === cfeet){
			$("#feetArm").css('background-image', 'none');
			$("#bfeetArm").css('background-image', 'none');
			feet = "";
			bfeet = "";
		}else{
			var slct = $(this).css('background-image');
			$("#feetArm").css('background-image', slct);
			if(type === "plate"){
				$("#feetArm").css({"margin-left": "239px"});
				$("#bfeetArm").css({"margin-left": "239px"});
				feet = nfeet;
				bfeet = "b" + nfeet;
			}else if(type === "leather"){
				$("#feetArm").css({"margin-left": "239px"});
				$("#bfeetArm").css({"margin-left": "239px"});
				feet = "leather/" + nfeet;
				bfeet = "leather/b" + nfeet;
			}else if(type === "cloth"){
				$("#feetArm").css({"margin-left": "238px"});
				$("#bfeetArm").css({"margin-left": "238px"});
				feet = "cloth/" + nfeet;
				bfeet = "cloth/bfeet01";
			}
			var ffeet = "url('../images/armor/female/" + bfeet + ".png')";
			var mfeet = "url('../images/armor/male/" + bfeet + ".png')";
			if(gnd === 'male'){
				$("#bfeetArm").css('background-image', mfeet);
			}else{
				$("#bfeetArm").css('background-image', ffeet);
			}
		}
	});
	$(".cloakSepOne > .armBg").click(function(){
		ncloak = $(this).attr('id');
		fcloak = "leather/" + $(this).attr('id');
		ccloak = "cloth/" + $(this).attr('id');
		if(ncloak === cloak || cloak === fcloak || cloak === ccloak){
			$("#cloakArm").css('background-image', 'none');
			 cloak = "";
		}else{
			var slct = $(this).css('background-image');
			$("#cloakArm").css('background-image', slct);
			if(type === "plate"){
				$("#cloakArm").css({"width": "90px", "height": "90px", "margin-left": "254px", "margin-top": "164px"});
				cloak = ncloak;
			}else if(type === "leather"){
				$("#cloakArm").css({"width": "130px", "height": "110px", "margin-left": "235px", "margin-top": "164px"});
				cloak = "leather/" + ncloak;
			}else if(type === "cloth"){
				$("#cloakArm").css({"width": "90px", "height": "95px", "margin-left": "255px", "margin-top": "188px"});
				cloak = "cloth/" + ncloak;
			}
		}
	});
	$(".cloakSepTwo > .armBg").click(function(){
		nbcloak = $(this).attr('id');
		fbcloak = "leather/" + $(this).attr('id');
		cbcloak = "cloth/" + $(this).attr('id');
		if(nbcloak === bcloak || fbcloak === bcloak || cbcloak === bcloak){
			$("#bcloakArm").css('background-image', 'none');
			bcloak = "";
		}else{
			var slct = $(this).css('background-image');
			$("#bcloakArm").css('background-image', slct);
			if(type === "plate"){
				bcloak = nbcloak;
			}else if(type === "leather"){
				bcloak = "leather/" + nbcloak;
			}else if(type === "cloth"){
				bcloak = "cloth/" + nbcloak;
			}
		}
	});
	$("#helmBg > .armBg, #crownBg > .armBgs").click(function(){
		$("#crownArm").css('background-image', 'none');
		crown = "";
		nhelm = $(this).attr('id');
		fhelm = "leather/" + $(this).attr('id');
		chelm = "cloth/" + $(this).attr('id');
		if(nhelm === helm || helm === fhelm || helm === chelm){
			$("#helmArm").css('background-image', 'none');
			helm = "";
		}else{
			var slct = $(this).css('background-image');
			$("#helmArm").css('background-image', slct);
			if(type === "plate"){
				$("#helmArm").css({"margin-top": "105px", "height": "100px"});
				helm = nhelm;
			}else if(type === "leather"){
				$("#helmArm").css({"margin-top": "112px", "height": "100px"});
				helm = "leather/" + nhelm;
			}else if(type === "cloth"){
				$("#helmArm").css({"margin-top": "106px", "height": "120px"});
				helm = "cloth/" + nhelm;
			}
		}
	});
	$("#crownBg > .armBgs").click(function(){
		ncrown = $(this).attr('id');
		$("#helmArm").css('background-image', 'none');
		helm = "";
		if(ncrown === crown){
			$("#crownArm").css('background-image', 'none');
			crown = "";
		}else{
			var slct = $(this).css('background-image');
			$("#crownArm").css('background-image', slct);
			crown = ncrown;
		}
	});
	$("#legsBg > .armBg").click(function(){
		nlegs = $(this).attr('id');
		flegs = "leather/" + $(this).attr('id');
		clegs = "cloth/" + $(this).attr('id');
		if(nlegs === legs || flegs === legs || clegs === legs){
			$("#legsArm").css('background-image', 'none');
			legs = "";
		}else{
			var slct = $(this).css('background-image');
			$("#legsArm").css('background-image', slct);
			if(type === "plate"){
				legs = nlegs;
			}else if(type === "leather"){
				legs = "leather/" + nlegs;
			}else if(type === "cloth"){
				legs = "cloth/" + nlegs;
			}
		}
	});
	$("#wingBg > .armBgs").click(function(){
		nwings = $(this).attr('id');
		if(nwings === wings){
			$("#wingArm").css('background-image', 'none');
			wings = "";
		}else{
			var slct = $(this).css('background-image');
			$("#wingArm").css('background-image', slct);
			wings = nwings;
		}
	});
	$("#glovesBg > .armBg").click(function(){
		nhands = $(this).attr('id');
		fhands = "leather/" + $(this).attr('id');
		chands = "cloth/" + $(this).attr('id');
		if(nhands === hands || hands === fhands || hands === chands){
			$("#handsArm").css('background-image', 'none');
			hands = "";
		}else{
			var slct = $(this).css('background-image');
			$("#handsArm").css('background-image', slct);
			if(type === "plate"){
				hands = nhands;
			}else if(type === "leather"){
				hands = "leather/" + nhands;
			}else if(type === "cloth"){
				hands = "cloth/" + nhands;
			}
		}
	});
	$("#toPic").click(function(){ 
		context.clearRect(0, 0, canvas.width, canvas.height);
		$("#canvas").css({"display": "inline"});
		$($(".armPiece").get().reverse()).each(function(){
			imgTop = $(this).css("margin-top").replace('px','');
			imgLeft = $(this).css("margin-left").replace('px','');
			imgWd = $(this).css("width").replace('px','');
			imgHt = $(this).css("height").replace('px','');
			var img = new Image();
			img.src = $(this).css("background-image").replace('url(\"','').replace('\")','');
			if($(this).attr('id') === "shldLeftArm"){
				rotobj = rotateAndCache(img);
				context.drawImage(rotobj, imgLeft, imgTop, imgWd, imgHt);
			}else{
				context.drawImage(img, imgLeft, imgTop, imgWd, imgHt);
			}
		});
	});
});
rotateAndCache = function(image) {				
			var offscreenCanvas = document.createElement('canvas');
			var offscreenCtx = offscreenCanvas.getContext('2d');
			offscreenCanvas.width = imgWd;
			offscreenCanvas.height = imgHt;
			offscreenCtx.scale(-1, 1);
			offscreenCtx.drawImage(image, 0, 0, imgWd * -1, imgHt);
			return offscreenCanvas;
}