$(document).ready(function(){
	var ttl = 0;
	var tglWidth = "off";
	var margin = -25;
	var slctTln = "timeline1";
	var reset = function(){
		$('.dateIcon').click(function(){
			var clicked = $(this).css("background-image");
			$("<div class=\"resFix\"><div class=\"addedIcon\" id=\"" + ttl + "\"></div></div>").css({"background-image": clicked, "margin-left": margin}).appendTo("#" + slctTln);
			$(".resFix").draggable({axis: "x"});
			$(".addedIcon").resizable();
			if(slctTln === "timeline1"){
				$("<div class=\"dInfCont\" id=\"date" + ttl + "\"><div class=\"inputImg inputImg" + ttl + "\"></div><input placeholder=\"Title\" type=\"text\" class=\"dateTitle\" id=\"dateTitle" + ttl + "\"><div class=\"inputImg inputImg" + ttl + "\"></div><input placeholder=\"Date\" type=\"text\" class=\"date\" id=\"dates" + ttl + "\"><textarea placeholder=\"Description\" class=\"dateInfo\" id=\"dateInfo" + ttl + "\"></textarea></div>").appendTo("#dInfCont");
			}else if(slctTln === "timeline2"){
				$("<div class=\"dInfCont\" id=\"date" + ttl + "\"><div class=\"inputImg inputImg" + ttl + "\"></div><input placeholder=\"Title\" type=\"text\" class=\"dateTitle\" id=\"dateTitle" + ttl + "\"><div class=\"inputImg inputImg" + ttl + "\"></div><input placeholder=\"Date\" type=\"text\" class=\"date\" id=\"dates" + ttl + "\"><textarea placeholder=\"Description\"  class=\"dateInfo\" id=\"dateInfo" + ttl + "\"></textarea></div>").appendTo("#dInfCont2");
			}
			$(".inputImg" + ttl).css({"background-image": clicked});
			ttl++;
		});
		$("#timeline1, #timeline2").on('click', '.addedIcon', function(){
			var clkTln = $(this).parent().parent().attr("id");
			var clicked = $(this).attr("id");
			$('#dInfCont > .dInfCont, #dInfCont, #dInfCont2, #dInfCont2 > .dInfCont').removeClass("showClicked");
			$("#date" + clicked).addClass("showClicked");
			if(clkTln === "timeline1"){
				$("#dInfCont").addClass("showClicked");
			}else if(clkTln === "timeline2"){
				$("#dInfCont2").addClass("showClicked");
			}
			if($(this).hasClass("selIcon")){
				$(this).removeClass("selIcon");
			}else{
				$(".addedIcon").removeClass("selIcon");
				$(this).addClass("selIcon");
			}
		});
		$("#tlnbtn1, #tlnbtn2").click(function(){
			$("#tlnbtn1, #tlnbtn2").removeClass("selected");
			$(this).addClass("selected");
			var clicked = $(this).attr('id');
			if(clicked === "tlnbtn1"){
				slctTln = "timeline1";
			}else if(clicked === "tlnbtn2"){
				slctTln = "timeline2";
			}
		});
		$("#printWidth").click(function(){
			if(tglWidth === "off"){
				$("#mainContainer").addClass("printWidth");
				$("#mainContainer").addClass("printWidth");
				tglWidth = "on";
			}else{
				$("#mainContainer").removeClass("printWidth");
				tglWidth = "off";
			}
		});
		$("#save1, #save2, #save3, #save4").click(function(){
			var ttlDivs = $(".dInfCont").length;
			var nm = $(this).attr("name");
			for(i = 0; i <= ttlDivs; i++){
				window.localStorage.setItem('dateTitle' + nm + i, $("#dateTitle" + i).val());
				window.localStorage.setItem('dates' + nm + i, $("#dates" + i).val());
				window.localStorage.setItem('dateInfo' + nm + i, $("#dateInfo" + i).val());
			}
			window.localStorage.setItem('timelineSave' + nm, $("#timeline").html());
			window.localStorage.setItem('dInfContSave' + nm, $("#dInfCont").html());
			window.localStorage.setItem('dInfCont2Save' + nm, $("#dInfCont2").html());
		});
		$("#load1, #load2, #load3, #load4").click(function(){
			var ttlDivs = $(".dInfCont").length;
			var nm = $(this).attr("name");
			$("#timeline").html(window.localStorage["timelineSave" + nm]);
			$("#dInfCont").html(window.localStorage["dInfContSave" + nm]);
			$("#dInfCont2").html(window.localStorage["dInfCont2Save" + nm]);
			$(".resFix").draggable({axis: "x"});
			$(".addedIcon").resizable();
			for(i = 0; i <= ttlDivs; i++){
				$("#dateTitle" + i).val(window.localStorage["dateTitle" + nm + i]);
				$("#dates" + i).val(window.localStorage["dates" + nm + i]);
				$("#dateInfo" + i).val(window.localStorage["dateInfo" + nm + i]);
			}
			reset();
		});
		$("#delSel").click(function(){
			var clId = $(".selIcon").attr('id');
			console.log(clId);
			$(".selIcon").parent().remove();
			$("#date" + clId + ", #dateTitle" + clId + ", #dates" + clId).remove();
		});
	}
	reset();
});