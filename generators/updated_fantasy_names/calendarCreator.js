
	var ttlMonth = 4;
	var weekDays = 3;
	var ttlDays = 365;
	var usdDays = 0;
	var allDays = 1;
	var curLeft = 0;
	var lastLeft = 0;
	var firstLeft = 0;
	var dstr = ["15","61","62","63","65","67","68","69"];
	var moonDays = 0;
	var moonCycle = 0;
	var halfCycle = 0;
	var quartCycle = 0;
	var disaster = 0;
	var thirdCycle = 0;
	var yearNr = 2000;
$(document).ready(function(){
	
	$("#monthOpt").change(function(){
		var newVal = $(this).val();
		ttlMonth = parseInt(newVal);
		$("#monthCont .monthCust").remove();
		for(i = 1; i <= newVal; i++){
			$("#monthCont").append("<div class=\"monthCust\" id=\"monthCust" + i + "\"><input type=\"text\" class=\"calNames\" id=\"monthOpt" + i + "\" placeholder=\"Name of month " + i + "\"><input type=\"text\" class=\"calNames\" id=\"monthDays" + i + "\" placeholder=\"Days in month " + i + "\"></div>");
		}
	});
	
	$("#yearNr").change(function(){
		yearNr = parseInt($(this).val());
	});
	$("#weekOpt").change(function(){
		var newVal = $(this).val();
		weekDays = parseInt(newVal);
		$("#weekCont .monthCust").remove();
		for(i = 1; i <= newVal; i++){
			$("#weekCont").append("<div class=\"monthCust\" id=\"weekCust" + i + "\"><input type=\"text\" class=\"weekNames\" id=\"weekOpt" + i + "\" placeholder=\"Name of day " + i + "\"></div>");
			$("#dayOptions").html("<div class=\"optTitle\">Day Options</div>Start year on day: <input type=\"number\" class=\"calNrs\" id=\"dayOpt\" min=\"1\" max=\"" + newVal + "\"> Length of moon cycle: <input type=\"number\" class=\"calNrs\" id=\"moonOpt\"> Chance of natural disaster: <input type=\"number\" class=\"calNrs\" id=\"dstrOpt\" min=\"0\" max=\"100\">");
		}
	});
	$("#calCanvas").on('click', '.dayIcon', function(){
		if($(this).hasClass("selected")){
			$(this).removeClass("selected");
		}else{
			$(this).addClass("selected");
		}
	});
	$(".dateIcon").click(function(){
		var bg = $(this).css('background-image'); 
		$(".selected").css('background-image', bg);
	});
	$("#save1, #save2, #save3, #save4").click(function(){
		var ttlDivs = $(".day").length;
		var ttlMonths = $(".calNames").length / 2;
		var ttlDay = $(".calNames").length;
		var nm = $(this).attr("name");
		for(i = 1; i <= ttlDivs; i++){
			window.localStorage.setItem('dayText' + nm + i, $("#dayText" + i).val());
		}
		for(j = 1; j <= ttlMonths; j++){
			window.localStorage.setItem('monthNames' + nm + j, $("#monthOpt" + j).val());
			window.localStorage.setItem('monthDays' + nm + j, $("#monthDays" + j).val());
		}
		for(k = 1; k <= ttlDay; k++){
			window.localStorage.setItem('weekNames' + nm + k, $("#weekOpt" + k).val());
		}
		window.localStorage.setItem('calCanvas' + nm, $("#calCanvas").html());
		window.localStorage.setItem('monthOpt' + nm, $("#monthOpt").val());
		window.localStorage.setItem('yearNr' + nm, $("#yearNr").val());
		window.localStorage.setItem('weekOpt' + nm, $("#weekOpt").val());
		window.localStorage.setItem('dayOpt' + nm, $("#dayOpt").val());
		window.localStorage.setItem('moonOpt' + nm, $("#moonOpt").val());
		window.localStorage.setItem('totalMonths' + nm, $("#monthCont").html());
		window.localStorage.setItem('totalDays' + nm, $("#weekCont").html());
	});
	$("#load1, #load2, #load3, #load4").click(function(){
		var nm = $(this).attr("name");
		$("#monthOpt").val(window.localStorage["monthOpt" + nm]);
		$("#weekOpt").val(window.localStorage["weekOpt" + nm]);
		$("#dayOpt").val(window.localStorage["dayOpt" + nm]);
		$("#moonOpt").val(window.localStorage["moonOpt" + nm]);
		$("#yearNr").val(window.localStorage["yearNr" + nm]);
		$("#calCanvas").html(window.localStorage["calCanvas" + nm]);
		$("#monthCont").html(window.localStorage["totalMonths" + nm]);
		$("#weekCont").html(window.localStorage["totalDays" + nm]);
		var ttlDivs = $(".day").length;
		var ttlMonths = $(".calNames").length / 2;
		var ttlDay = $(".calNames").length;
		for(i = 0; i <= ttlDivs; i++){
			$("#dayText" + i).val(window.localStorage["dayText" + nm + i]);
		}
		for(j = 0; j <= ttlMonths; j++){
			$("#monthOpt" + j).val(window.localStorage["monthNames" + nm + j]);
			$("#monthDays" + j).val(window.localStorage["monthDays" + nm + j]);
		}
		for(k = 0; k <= ttlDays; k++){
			$("#weekOpt" + k).val(window.localStorage["weekNames" + nm + k]);
		}
	});
});

	var createCal = function(year){
		var newYear = year;
		allDays = 1;
		usdDays = 0;
		moonDays = 0;
		disaster = $("#dstrOpt").val();
		moonCycle = parseInt($("#moonOpt").val());
		halfCycle = Math.floor(moonCycle / 2);
		quartCycle = Math.floor(moonCycle / 4);
		thirdCycle = halfCycle + quartCycle;
		if(moonCycle === NaN || moonCycle < 0){
			moonCycle = 0;
		}
		curLeft = 0;
		curLeft = ($("#dayOpt").val() -1) % weekDays;
		if(curLeft === NaN || curLeft < 0){
			curLeft = 0;
		}
		if(newYear === 2){
			curLeft = lastLeft;
			yearNr = yearNr + 1;
		}else if(newYear === 1){
			yearNr = yearNr - 1;
			var dayStart = $("#monthNm1").children("tbody").children(".week").first().children(".day").length;
			for(i = ttlMonth; i > 0; i--){
				var daysMin = weekDays - dayStart;
				var days = $("#monthDays" + i).val() - daysMin;
				var daysLeft = days % weekDays;
				curLeft = weekDays - daysLeft;
				if(curLeft < 0){
					curleft = curleft + weekDays;
				}
				if(curLeft === weekDays){
					curLeft = 0;
				}
				dayStart = daysLeft;
			}
		}
		$("#calCanvas").html("");
		$("#yearNr").val(yearNr);
		for(i = 1; i <= ttlMonth; i++){
			var monthNm = "month" + i;
			var month = $("#monthOpt" + i).val();
			if(month === ""){
				month = "Month " + i;
				$("#monthOpt" + i).val(month);
			}
			$("#calCanvas").append("<table class=\"month\" id=\"monthNm" + i + "\"><caption class=\"monthNm\" id=\"monthNm" + i + "\">" + month + "</caption><tr class=\"weekDays\" id=\"weekDays" + i + "\"></tr></table");
			for(j = 1; j <= weekDays; j++){
				var weekNm = $("#weekOpt" + j).val();
				if(weekNm === ""){
					weekNm = "Day " + j;
					$("#weekOpt" + j).val(weekNm);
				}
				$("#weekDays" + i).append("<td class=\"day\">" + weekNm + "</td>");
			}
			var ttlDays = $("#monthDays" + i).val();
			var ttlDaysPlus = parseInt($("#monthDays" + i).val()) + curLeft;
			var ttlWeeks = Math.ceil(ttlDaysPlus / weekDays);
			if(ttlDays === 0 || ttlDays === NaN){
				ttlWeeks = 0;
			}
			for(k = 1; k <= ttlWeeks ; k++){
				$("#monthNm" + i).append("<tr class=\"week\" id=\"week" + k + monthNm + "\"></tr>");
				for(l = 1; l <= weekDays; l++){
					if(usdDays < ttlDays){
						if(curLeft > 0){
							curLeft--;
							$("#week" + k + monthNm).append("<td class=\"dayEmpty\"></td>");
						}else{
							moonDays = moonDays + 1;
							var ds = Math.random() * 100;
							var dayNm = $("#weekOpt" + l).val();
							if(moonDays === moonCycle){
								$("#week" + k + monthNm).append("<td class=\"day\"><div class=\"dayIcon\" style=\"background-image: url('../images/timelineIcons/fullMoon.png');\" id=\"dayIcon" + allDays + "\"></div>Day " + allDays + "<textarea id=\"dayText" + allDays + "\"></textarea></td>");
								moonDays = 0;
							}else if(moonDays === halfCycle){
								$("#week" + k + monthNm).append("<td class=\"day\"><div class=\"dayIcon\" style=\"background-image: url('../images/timelineIcons/noMoon.png');\" id=\"dayIcon" + allDays + "\"></div>Day " + allDays + "<textarea id=\"dayText" + allDays + "\"></textarea></td>");
							}else if(moonDays === quartCycle){
								$("#week" + k + monthNm).append("<td class=\"day\"><div class=\"dayIcon\" style=\"background-image: url('../images/timelineIcons/halfMoonRev.png');\" id=\"dayIcon" + allDays + "\"></div>Day " + allDays + "<textarea id=\"dayText" + allDays + "\"></textarea></td>");
							}else if(moonDays === thirdCycle){
								$("#week" + k + monthNm).append("<td class=\"day\"><div class=\"dayIcon\" style=\"background-image: url('../images/timelineIcons/halfMoon.png');\" id=\"dayIcon" + allDays + "\"></div>Day " + allDays + "<textarea id=\"dayText" + allDays + "\"></textarea></td>");
							}else if(ds <= disaster){
								var dst = (Math.random() * dstr.length | 0);
								$("#week" + k + monthNm).append("<td class=\"day\"><div class=\"dayIcon\" style=\"background-image: url('../images/timelineIcons/icon" + dstr[dst] + ".png');\" id=\"dayIcon" + allDays + "\"></div>Day " + allDays + "<textarea id=\"dayText" + allDays + "\"></textarea></td>");
							}else{
								$("#week" + k + monthNm).append("<td class=\"day\"><div class=\"dayIcon\" id=\"dayIcon" + allDays + "\"></div>Day " + allDays + "<textarea id=\"dayText" + allDays + "\"></textarea></td>");
							}
							usdDays = usdDays + 1;
							allDays = allDays + 1;
						}
					}
				}
			}
			curLeft = ttlDaysPlus % weekDays;
			lastLeft = curLeft;
			usdDays = 0;
		}
	};