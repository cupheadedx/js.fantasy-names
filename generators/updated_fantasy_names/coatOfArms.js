$(document).ready(function(){	
	var fourPc = "disabled";
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var bgData = "";	
	var resize = "off";
	var drag = "off";
	c = document.getElementById("coatColor");
	ctx = c.getContext("2d");
	$("#fourCrest").on('click', '.fourCrest', function(){
		if($(this).attr('id') === "selected"){
			$(".fourCrest").attr('id', 'none');
		}else{
			$(".fourCrest").attr('id','none');
			$(this).attr('id','selected');
		}
	});
	$("#enableFour").click(function(){
		$("#enableFour, #disableFour, #fourCrest").toggle();
		fourPc = "enabled";
	});
	$("#disableFour").click(function(){
		$("#enableFour, #disableFour, #fourCrest").toggle();
		fourPc = "disabled";
	});
	$("#enableDrag").click(function(){
		$("#enableDrag").css("display", "none");
		$("#disableDrag").css("display", "inline");
		$(".fourCrest").draggable();
		$("#coatCrest").draggable();
		$(".fourCrest").draggable('enable');
		$("#coatCrest").draggable('enable');
		drag = "on";
	});
	$("#disableDrag").click(function(){
		$("#disableDrag").css("display", "none");
		$("#enableDrag").css("display", "inline");
		$(".fourCrest").draggable('disable');
		$("#coatCrest").draggable('disable');
		drag = "off";
	});
	$("#toggleResizeOn, #toggleResizeOff").click(function(){
		$("#toggleResizeOn, #toggleResizeOff").toggle();
		var clk = $(this).attr('id');
		if(clk === "toggleResizeOn"){
			resize = "on";
			$(".fourCrest").resizable({disabled: false, aspectRatio: true, handles: "n, e, s, w"});
		}else{
			resize = "off"
			$(".fourCrest").resizable({disabled: true, aspectRatio: true});
		}
	});
	$("#resetMain").click(function(){
			$('#coatCrest').css("background-image", "none");
	});
	$("#resetSelect").click(function(){
			$('#selected').remove();
	});
	$(".mainOption").click(function(){
		$("#optionMain > .mainOption").removeClass('activeTitle');
		$(this).addClass('activeTitle');
		$('#optionMain > .mainOptions').removeClass('activeSlide');
		var clicked = $(this).attr('id');
		$('.' + clicked).addClass('activeSlide');
	});
	$(".subOption").click(function(){
		$(".mainOptions > .subOption").removeClass('activeSubTitle');
		$(this).addClass('activeSubTitle');
		$('.mainOptions > .subOptions').removeClass('activeSubSlide');
		var clicked = $(this).attr('id');
		$('.' + clicked).addClass('activeSubSlide');
	});
	$(".subOption2").click(function(){
		$(".mainOptions > .subOption2").removeClass('activeSubTitle2');
		$(this).addClass('activeSubTitle2');
		$('.mainOptions > .subOptions2').removeClass('activeSubSlide2');
		var clicked = $(this).attr('id');
		$('.' + clicked).addClass('activeSubSlide2');
	});
	$(".subOption3").click(function(){
		$(".mainOptions > .subOption3").removeClass('activeSubTitle3');
		$(this).addClass('activeSubTitle3');
		$('.mainOptions > .subOptions3').removeClass('activeSubSlide3');
		var clicked = $(this).attr('id');
		$('.' + clicked).addClass('activeSubSlide3');
	});
	$(".subIcon").click(function(){
		var bg = $(this).css("background-image");
		$('#coatShield').css("background-image", bg);
	});
	$(".subIconTwo").click(function(){
		var bgs = $(this).css("background-image");
		var bg = $(this).css("background-image").replace('url(\"','').replace('\")','');
		if(fourPc === "enabled"){
			var img = new Image();
			img.src = bg;
			width = img.naturalWidth * 0.5;
			height = img.naturalHeight * 0.5;
			$("<div class=\"fourCrest\" style=\"height:" + height + "px; width: " + width + "px;\"></div>").css("background-image", bgs).appendTo("#fourCrest");
			if(resize === "on"){
				$(".fourCrest").resizable({disabled: false, aspectRatio: true, handles: "n, e, s, w"});
			}
			if(drag === "on"){
				$(".fourCrest").draggable();
				$(".fourCrest").draggable('enable');
			}
		}else{
			$('#coatCrest').css("background-image", bgs);
		}
	});
	$("#coatColorOne").change(function(){
		var clr = $(this).val();
		$('.stroke1').css('stroke', clr);
	});
	$("#coatColorTwo").change(function(){
		var clrs = $(this).val();
		$('.stroke2').css('stroke', clrs);
	});
	$(".subIconThree").click(function(){
		var pick = parseInt($(this).attr('id'));
		var blk = $('#coatColorOne').val();
		var wht = $('#coatColorTwo').val();
		width = $("#coatColor").width();
		height = $("#coatColor").height();
		c.fillStyle="#ffffff";
		ctx.fillRect(0, 0, width, height);
		switch(pick){
			case 0:
				stroke(wht, 0,  0.28, 0.28, 0, 190);
				stroke(wht, 0,  0.80, 0.80, 0, 190);
				stroke(blk, 0,  1.54, 1.54, 0, 190);
			break;
			case 1:
				stroke(wht, 0,  0.40, 0.40, 0, 150);
				stroke(blk, 0,  0.86, 0.86, 0, 150);
				stroke(wht, 0,  1.54, 1.54, 0, 150);
			break;
			case 2:
				stroke(blk, 0,  0.20, 0.20, 0, 100);
				stroke(wht, 0,  0.58, 0.58, 0, 100);
				stroke(blk, 0,  1.00, 1.00, 0, 100);
				stroke(wht, 0,  1.50, 1.50, 0, 100);
			break;
			case 3:
				stroke(blk, 0,  0.12, 0.12, 0, 80);
				stroke(wht, 0,  0.44, 0.44, 0, 80);
				stroke(blk, 0,  0.88, 0.88, 0, 80);
				stroke(wht, 0,  1.20, 1.20, 0, 80);
				stroke(blk, 0,  1.60, 1.60, 0, 80);
			break;
			case 4:
				stroke(wht, 0,  0.04, 0.04, 0, 55);
				stroke(blk, 0,  0.35, 0.35, 0, 65);
				stroke(wht, 0,  0.68, 0.68, 0, 65);
				stroke(blk, 0,  1.01, 1.01, 0, 65);
				stroke(wht, 0,  1.34, 1.34, 0, 65);
				stroke(blk, 0,  1.67, 1.67, 0, 65);
			break;
			case 5:
				stroke(blk, 0,  0.00, 0.00, 0, 55);
				stroke(wht, 0,  0.29, 0.29, 0, 55);
				stroke(blk, 0,  0.58, 0.58, 0, 55);
				stroke(wht, 0,  0.86, 0.86, 0, 55);
				stroke(blk, 0,  1.15, 1.15, 0, 55);
				stroke(wht, 0,  1.43, 1.43, 0, 55);
				stroke(blk, 0,  1.72, 1.72, 0, 55);
			break;
			case 6:
				stroke(wht, 0,  0.00, 0.00, 0, 48);
				stroke(blk, 0,  0.25, 0.25, 0, 48);
				stroke(wht, 0,  0.50, 0.50, 0, 48);
				stroke(blk, 0,  0.75, 0.75, 0, 48);
				stroke(wht, 0,  1.00, 1.00, 0, 48);
				stroke(blk, 0,  1.25, 1.25, 0, 48);
				stroke(wht, 0,  1.50, 1.50, 0, 48);
				stroke(blk, 0,  1.75, 1.75, 0, 48);
				stroke(wht, 0,  2.00, 2.00, 0, 48);
			break;
			case 7:
				stroke(wht, 0,  0.24, 0.24, 0, 48);
				stroke(blk, 0,  0.46, 0.46, 0, 48);
				stroke(wht, 0,  0.68, 0.68, 0, 48);
				stroke(blk, 0,  0.90, 0.90, 0, 48);
				stroke(wht, 0,  1.12, 1.12, 0, 48);
				stroke(blk, 0,  1.34, 1.34, 0, 48);
				stroke(wht, 0,  1.56, 1.56, 0, 48);
				stroke(blk, 0,  1.78, 1.78, 0, 48);
			break;
			case 8:
				stroke(wht, 0,  0.00, 0.00, 0, 38);
				stroke(blk, 0,  0.20, 0.20, 0, 38);
				stroke(wht, 0,  0.40, 0.40, 0, 38);
				stroke(blk, 0,  0.60, 0.60, 0, 38);
				stroke(wht, 0,  0.80, 0.80, 0, 38);
				stroke(blk, 0,  1.00, 1.00, 0, 38);
				stroke(wht, 0,  1.20, 1.20, 0, 38);
				stroke(blk, 0,  1.40, 1.40, 0, 38);
				stroke(wht, 0,  1.60, 1.60, 0, 38);
				stroke(blk, 0,  1.80, 1.80, 0, 38);
			break;
			case 9:
				stroke(blk, 0,  0.02, 0.02, 0, 35);
				stroke(wht, 0,  0.20, 0.20, 0, 35);
				stroke(blk, 0,  0.38, 0.38, 0, 35);
				stroke(wht, 0,  0.56, 0.56, 0, 35);
				stroke(blk, 0,  0.74, 0.74, 0, 35);
				stroke(wht, 0,  0.92, 0.92, 0, 35);
				stroke(blk, 0,  1.10, 1.10, 0, 35);
				stroke(wht, 0,  1.28, 1.28, 0, 35);
				stroke(blk, 0,  1.46, 1.46, 0, 35);
				stroke(wht, 0,  1.64, 1.64, 0, 35);
				stroke(blk, 0,  1.82, 1.82, 0, 35);
			break;
			case 10:
				stroke(wht, 0,  0.08, 0.08, 0, 35);
				stroke(blk, 0,  0.24, 0.24, 0, 35);
				stroke(wht, 0,  0.40, 0.40, 0, 35);
				stroke(blk, 0,  0.56, 0.56, 0, 35);
				stroke(wht, 0,  0.72, 0.72, 0, 35);
				stroke(blk, 0,  0.88, 0.88, 0, 35);
				stroke(wht, 0,  1.04, 1.04, 0, 35);
				stroke(blk, 0,  1.20, 1.20, 0, 35);
				stroke(wht, 0,  1.36, 1.36, 0, 35);
				stroke(blk, 0,  1.52, 1.52, 0, 35);
				stroke(wht, 0,  1.68, 1.68, 0, 35);
				stroke(blk, 0,  1.84, 1.84, 0, 35);
			break;
			case 11:
				stroke(wht, 0,  0.10, 0.10, 0, 35);
				stroke(blk, 0,  0.24, 0.24, 0, 35);
				stroke(wht, 0,  0.38, 0.38, 0, 35);
				stroke(blk, 0,  0.52, 0.52, 0, 35);
				stroke(wht, 0,  0.66, 0.66, 0, 35);
				stroke(blk, 0,  0.80, 0.80, 0, 35);
				stroke(wht, 0,  0.94, 0.94, 0, 35);
				stroke(blk, 0,  1.08, 1.08, 0, 35);
				stroke(wht, 0,  1.22, 1.22, 0, 35);
				stroke(blk, 0,  1.36, 1.36, 0, 35);
				stroke(wht, 0,  1.50, 1.50, 0, 35);
				stroke(blk, 0,  1.64, 1.64, 0, 35);
				stroke(wht, 0,  1.78, 1.78, 0, 35);
			break;
			case 12:
				stroke(blk, 0.00, 0.00, 0.00, 1.00, 280);
				stroke(wht, 1.00, 0.00, 1.00, 1.00, 244);
			break;
			case 13:
				stroke(blk, 0.00, 0.00, 0.00, 1.00, 125);
				stroke(wht, 0.50, 0.00, 0.50, 1.00, 125);
				stroke(blk, 1.00, 0.00, 1.00, 1.00, 121);
			break;
			case 14:
				stroke(blk, 0.00, 0.00, 0.00, 1.00, 90);
				stroke(wht, 0.33, 0.00, 0.33, 1.00, 65);
				stroke(blk, 0.66, 0.00, 0.66, 1.00, 86);
				stroke(wht, 1.00, 0.00, 1.00, 1.00, 90);
			break;
			case 15:
				stroke(blk, 0.00, 0.00, 0.00, 1.00, 70);
				stroke(wht, 0.25, 0.00, 0.25, 1.00, 70);
				stroke(blk, 0.50, 0.00, 0.50, 1.00, 70);
				stroke(wht, 0.75, 0.00, 0.75, 1.00, 70);
				stroke(blk, 1.00, 0.00, 1.00, 1.00, 64);
			break;
			case 16:
				stroke(blk, 0.00, 0.00, 0.00, 1.00, 57);
				stroke(wht, 0.20, 0.00, 0.20, 1.00, 57);
				stroke(blk, 0.40, 0.00, 0.40, 1.00, 57);
				stroke(wht, 0.60, 0.00, 0.60, 1.00, 57);
				stroke(blk, 0.80, 0.00, 0.80, 1.00, 57);
				stroke(wht, 1.00, 0.00, 1.00, 1.00, 53);
			break;
			case 17:
				stroke(blk, 0.00, 0.00, 0.00, 1.00, 47);
				stroke(wht, 0.165, 0.00, 0.165, 1.00, 47);
				stroke(blk, 0.33, 0.00, 0.33, 1.00, 47);
				stroke(wht, 0.495, 0.00, 0.495, 1.00, 47);
				stroke(blk, 0.66, 0.00, 0.66, 1.00, 47);
				stroke(wht, 0.825, 0.00, 0.825, 1.00, 47);
				stroke(blk, 1.00, 0.00, 1.00, 1.00, 42);
			break;
			case 18:
				stroke(blk, 0.00, 0.00, 0.00, 1.00, 40);
				stroke(wht, 0.14, 0.00, 0.14, 1.00, 40);
				stroke(blk, 0.28, 0.00, 0.28, 1.00, 40);
				stroke(wht, 0.42, 0.00, 0.42, 1.00, 40);
				stroke(blk, 0.56, 0.00, 0.56, 1.00, 40);
				stroke(wht, 0.70, 0.00, 0.70, 1.00, 40);
				stroke(blk, 0.84, 0.00, 0.84, 1.00, 40);
				stroke(wht, 0.96, 0.00, 0.96, 1.00, 40);
			break;
			case 19:
				stroke(blk, 0.00, 0.00, 0.00, 1.00, 35);
				stroke(wht, 0.125, 0.00, 0.125, 1.00, 35);
				stroke(blk, 0.25, 0.00, 0.25, 1.00, 35);
				stroke(wht, 0.375, 0.00, 0.375, 1.00, 35);
				stroke(blk, 0.50, 0.00, 0.50, 1.00, 35);
				stroke(wht, 0.625, 0.00, 0.625, 1.00, 35);
				stroke(blk, 0.75, 0.00, 0.75, 1.00, 35);
				stroke(wht, 0.875, 0.00, 0.875, 1.00, 35);
				stroke(blk, 1.00, 0.00, 1.00, 1.00, 35);
			break;
			case 20:
				stroke(blk, 0.00, 0.00, 0.00, 1.00, 32);
				stroke(wht, 0.11, 0.00, 0.11, 1.00, 32);
				stroke(blk, 0.22, 0.00, 0.22, 1.00, 32);
				stroke(wht, 0.33, 0.00, 0.33, 1.00, 32);
				stroke(blk, 0.44, 0.00, 0.44, 1.00, 32);
				stroke(wht, 0.55, 0.00, 0.55, 1.00, 32);
				stroke(blk, 0.66, 0.00, 0.66, 1.00, 32);
				stroke(wht, 0.77, 0.00, 0.77, 1.00, 32);
				stroke(blk, 0.88, 0.00, 0.88, 1.00, 32);
				stroke(wht, 1.00, 0.00, 1.00, 1.00, 32);
			break;
			case 21:
				stroke(wht, 0.00, 0.00, 0.00, 1.00, 28);
				stroke(blk, 0.10, 0.00, 0.10, 1.00, 28);
				stroke(wht, 0.20, 0.00, 0.20, 1.00, 28);
				stroke(blk, 0.30, 0.00, 0.30, 1.00, 28);
				stroke(wht, 0.40, 0.00, 0.40, 1.00, 28);
				stroke(blk, 0.50, 0.00, 0.50, 1.00, 28);
				stroke(wht, 0.60, 0.00, 0.60, 1.00, 28);
				stroke(blk, 0.70, 0.00, 0.70, 1.00, 28);
				stroke(wht, 0.80, 0.00, 0.80, 1.00, 28);
				stroke(blk, 0.90, 0.00, 0.90, 1.00, 28);
				stroke(wht, 1.00, 0.00, 1.00, 1.00, 28);
			break;
			case 22:
				stroke(blk, 0.00, 0.00, 0.00, 1.00, 28);
				stroke(wht, 0.09, 0.00, 0.09, 1.00, 28);
				stroke(blk, 0.18, 0.00, 0.18, 1.00, 28);
				stroke(wht, 0.27, 0.00, 0.27, 1.00, 28);
				stroke(blk, 0.36, 0.00, 0.36, 1.00, 28);
				stroke(wht, 0.45, 0.00, 0.45, 1.00, 28);
				stroke(blk, 0.54, 0.00, 0.54, 1.00, 28);
				stroke(wht, 0.63, 0.00, 0.63, 1.00, 28);
				stroke(blk, 0.72, 0.00, 0.72, 1.00, 28);
				stroke(wht, 0.81, 0.00, 0.81, 1.00, 28);
				stroke(blk, 0.90, 0.00, 0.90, 1.00, 28);
				stroke(wht, 0.99, 0.00, 0.99, 1.00, 28);
			break;
			case 23:
				stroke(blk, 0.00, 0.00, 0.00, 1.00, 28);
				stroke(wht, 0.08, 0.00, 0.08, 1.00, 28);
				stroke(blk, 0.16, 0.00, 0.16, 1.00, 28);
				stroke(wht, 0.25, 0.00, 0.25, 1.00, 28);
				stroke(blk, 0.33, 0.00, 0.33, 1.00, 28);
				stroke(wht, 0.41, 0.00, 0.41, 1.00, 28);
				stroke(blk, 0.50, 0.00, 0.50, 1.00, 28);
				stroke(wht, 0.58, 0.00, 0.58, 1.00, 28);
				stroke(blk, 0.66, 0.00, 0.66, 1.00, 28);
				stroke(wht, 0.75, 0.00, 0.75, 1.00, 28);
				stroke(blk, 0.82, 0.00, 0.82, 1.00, 28);
				stroke(wht, 0.90, 0.00, 0.90, 1.00, 28);
				stroke(blk, 0.98, 0.00, 0.98, 1.00, 28);
			break;
			case 24:
				stroke(blk, 0.00, 0.00, 0.00, 1.00, 28);
				stroke(wht, 0.07, 0.00, 0.07, 1.00, 28);
				stroke(blk, 0.15, 0.00, 0.15, 1.00, 28);
				stroke(wht, 0.22, 0.00, 0.22, 1.00, 28);
				stroke(blk, 0.30, 0.00, 0.30, 1.00, 28);
				stroke(wht, 0.37, 0.00, 0.37, 1.00, 28);
				stroke(blk, 0.45, 0.00, 0.45, 1.00, 28);
				stroke(wht, 0.52, 0.00, 0.52, 1.00, 28);
				stroke(blk, 0.60, 0.00, 0.60, 1.00, 28);
				stroke(wht, 0.67, 0.00, 0.67, 1.00, 28);
				stroke(blk, 0.75, 0.00, 0.75, 1.00, 28);
				stroke(wht, 0.82, 0.00, 0.82, 1.00, 28);
				stroke(blk, 0.90, 0.00, 0.90, 1.00, 28);
				stroke(wht, 0.98, 0.00, 0.98, 1.00, 28);
			break;
			case 25:
				stroke(blk, 0.00, 0.00, 1.00, 0.00, 145);
				stroke(wht, 0.00, 1.00, 1.00, 1.00, 290);
			break;
			case 26:
				stroke(blk, 0.00, 0.00, 1.00, 0.00, 145);
				stroke(wht, 0.00, 0.50, 1.00, 0.50, 145);
				stroke(blk, 0.00, 1.00, 1.00, 1.00, 145);
			break;
			case 27:
				stroke(blk, 0.00, 0.00, 1.00, 0.00, 95);
				stroke(wht, 0.00, 0.33, 1.00, 0.33, 95);
				stroke(blk, 0.00, 0.66, 1.00, 0.66, 95);
				stroke(wht, 0.00, 1.00, 1.00, 1.00, 95);
			break;
			case 28:
				stroke(blk, 0.00, 0.00, 1.00, 0.00, 70);
				stroke(wht, 0.00, 0.25, 1.00, 0.25, 70);
				stroke(blk, 0.00, 0.50, 1.00, 0.50, 70);
				stroke(wht, 0.00, 0.75, 1.00, 0.75, 70);
				stroke(blk, 0.00, 1.00, 1.00, 1.00, 70);
			break;
			case 29:
				stroke(blk, 0.00, 0.00, 1.00, 0.00, 57);
				stroke(wht, 0.00, 0.20, 1.00, 0.20, 57);
				stroke(blk, 0.00, 0.40, 1.00, 0.40, 57);
				stroke(wht, 0.00, 0.60, 1.00, 0.60, 57);
				stroke(blk, 0.00, 0.80, 1.00, 0.80, 57);
				stroke(wht, 0.00, 1.00, 1.00, 1.00, 57);
			break;
			case 30:
				stroke(blk, 0.00, 0.00, 1.00, 0.00, 50);
				stroke(wht, 0.00, 0.165, 1.00, 0.165, 50);
				stroke(blk, 0.00, 0.33, 1.00, 0.33, 50);
				stroke(wht, 0.00, 0.495, 1.00, 0.495, 50);
				stroke(blk, 0.00, 0.66, 1.00, 0.66, 50);
				stroke(wht, 0.00, 0.825, 1.00, 0.825, 50);
				stroke(blk, 0.00, 1.00, 1.00, 1.00, 50);
			break;
			case 31:
				stroke(blk, 0.00, 0.00, 1.00, 0.00, 40);
				stroke(wht, 0.00, 0.14, 1.00, 0.14, 40);
				stroke(blk, 0.00, 0.28, 1.00, 0.28, 40);
				stroke(wht, 0.00, 0.42, 1.00, 0.42, 40);
				stroke(blk, 0.00, 0.56, 1.00, 0.56, 40);
				stroke(wht, 0.00, 0.70, 1.00, 0.70, 40);
				stroke(blk, 0.00, 0.84, 1.00, 0.84, 40);
				stroke(wht, 0.00, 0.96, 1.00, 0.96, 40);
			break;
			case 32:
				stroke(blk, 0.00, 0.00, 1.00, 0.00, 35);
				stroke(wht, 0.00, 0.125, 1.00, 0.125, 35);
				stroke(blk, 0.00, 0.25, 1.00, 0.25, 35);
				stroke(wht, 0.00, 0.375, 1.00, 0.375, 35);
				stroke(blk, 0.00, 0.50, 1.00, 0.50, 35);
				stroke(wht, 0.00, 0.625, 1.00, 0.625, 35);
				stroke(blk, 0.00, 0.75, 1.00, 0.75, 35);
				stroke(wht, 0.00, 0.875, 1.00, 0.875, 35);
				stroke(blk, 0.00, 1.00, 1.00, 1.00, 35);
			break;
			case 33:
				stroke(blk, 0.00, 0.00, 1.00, 0.00, 32);
				stroke(wht, 0.00, 0.11, 1.00, 0.11, 32);
				stroke(blk, 0.00, 0.22, 1.00, 0.22, 32);
				stroke(wht, 0.00, 0.33, 1.00, 0.33, 32);
				stroke(blk, 0.00, 0.44, 1.00, 0.44, 32);
				stroke(wht, 0.00, 0.55, 1.00, 0.55, 32);
				stroke(blk, 0.00, 0.66, 1.00, 0.66, 32);
				stroke(wht, 0.00, 0.77, 1.00, 0.77, 32);
				stroke(blk, 0.00, 0.88, 1.00, 0.88, 32);
				stroke(wht, 0.00, 1.00, 1.00, 1.00, 32);
			break;
			case 34:
				stroke(wht, 0.00, 0.00, 1.00, 0.00, 29);
				stroke(blk, 0.00, 0.10, 1.00, 0.10, 29);
				stroke(wht, 0.00, 0.20, 1.00, 0.20, 29);
				stroke(blk, 0.00, 0.30, 1.00, 0.30, 29);
				stroke(wht, 0.00, 0.40, 1.00, 0.40, 29);
				stroke(blk, 0.00, 0.50, 1.00, 0.50, 29);
				stroke(wht, 0.00, 0.60, 1.00, 0.60, 29);
				stroke(blk, 0.00, 0.70, 1.00, 0.70, 29);
				stroke(wht, 0.00, 0.80, 1.00, 0.80, 29);
				stroke(blk, 0.00, 0.90, 1.00, 0.90, 29);
				stroke(wht, 0.00, 1.00, 1.00, 1.00, 29);
			break;
			case 35:
				stroke(blk, 0.00, 0.00, 1.00, 0.00, 29);
				stroke(wht, 0.00, 0.09, 1.00, 0.09, 29);
				stroke(blk, 0.00, 0.18, 1.00, 0.18, 29);
				stroke(wht, 0.00, 0.27, 1.00, 0.27, 29);
				stroke(blk, 0.00, 0.36, 1.00, 0.36, 29);
				stroke(wht, 0.00, 0.45, 1.00, 0.45, 29);
				stroke(blk, 0.00, 0.54, 1.00, 0.54, 29);
				stroke(wht, 0.00, 0.63, 1.00, 0.63, 29);
				stroke(blk, 0.00, 0.72, 1.00, 0.72, 29);
				stroke(wht, 0.00, 0.81, 1.00, 0.81, 29);
				stroke(blk, 0.00, 0.90, 1.00, 0.90, 29);
				stroke(wht, 0.00, 0.99, 1.00, 0.99, 29);
			break;
			case 36:
				stroke(blk, 0.00, 0.00, 1.00, 0.00, 28);
				stroke(wht, 0.00, 0.08, 1.00, 0.08, 28);
				stroke(blk, 0.00, 0.16, 1.00, 0.16, 28);
				stroke(wht, 0.00, 0.25, 1.00, 0.25, 28);
				stroke(blk, 0.00, 0.33, 1.00, 0.33, 28);
				stroke(wht, 0.00, 0.41, 1.00, 0.41, 28);
				stroke(blk, 0.00, 0.50, 1.00, 0.50, 28);
				stroke(wht, 0.00, 0.58, 1.00, 0.58, 28);
				stroke(blk, 0.00, 0.66, 1.00, 0.66, 28);
				stroke(wht, 0.00, 0.75, 1.00, 0.75, 28);
				stroke(blk, 0.00, 0.82, 1.00, 0.82, 28);
				stroke(wht, 0.00, 0.90, 1.00, 0.90, 28);
				stroke(blk, 0.00, 0.98, 1.00, 0.98, 28);
			break;
			case 37:
				stroke(blk, 0.00, 0.00, 1.00, 0.00, 28);
				stroke(wht, 0.00, 0.07, 1.00, 0.07, 28);
				stroke(blk, 0.00, 0.15, 1.00, 0.15, 28);
				stroke(wht, 0.00, 0.22, 1.00, 0.22, 28);
				stroke(blk, 0.00, 0.30, 1.00, 0.30, 28);
				stroke(wht, 0.00, 0.37, 1.00, 0.37, 28);
				stroke(blk, 0.00, 0.45, 1.00, 0.45, 28);
				stroke(wht, 0.00, 0.52, 1.00, 0.52, 28);
				stroke(blk, 0.00, 0.60, 1.00, 0.60, 28);
				stroke(wht, 0.00, 0.67, 1.00, 0.67, 28);
				stroke(blk, 0.00, 0.75, 1.00, 0.75, 28);
				stroke(wht, 0.00, 0.82, 1.00, 0.82, 28);
				stroke(blk, 0.00, 0.90, 1.00, 0.90, 28);
				stroke(wht, 0.00, 0.98, 1.00, 0.98, 28);
			break;
		}
	});
	$("#toPic").click(function(){ 
		context.clearRect(0, 0, canvas.width, canvas.height);
		$("#canvas").css({"display": "inline"});
		context.drawImage(c, 0, 0, 248, 275);
		$($("#coatCrest").get().reverse()).each(function(){
			var img = new Image();
			img.src = $(this).css("background-image").replace('url(\"','').replace('\")','');
			fullWd = $(this).width();
			fullHt = $(this).height();
			imgWd = img.naturalWidth;
			imgHt = img.naturalHeight;
			imgLeft = (fullWd - imgWd) / 2 + parseInt($(this).css("left"));
			imgTop = (fullHt - imgHt) / 2 + parseInt($(this).css("top"));
			context.drawImage(img, imgLeft, imgTop, imgWd, imgHt);
		});
		$($("#coatShield").get().reverse()).each(function(){
			var img = new Image();
			img.src = $(this).css("background-image").replace('url(\"','').replace('\")','');
			fullWd = $(this).width();
			fullHt = $(this).height();
			imgWd = img.naturalWidth;
			imgHt = img.naturalHeight;
			imgLeft = (fullWd - imgWd) / 2;
			imgTop = (fullHt - imgHt) / 2;
			context.drawImage(img, imgLeft, imgTop, imgWd, imgHt);
		});
		$($(".fourCrest").get()).each(function(){
			imgPos = $(this).position();
			imgWd = $(this).css("width").replace('px','');
			imgHt = $(this).css("height").replace('px','');
			var img = new Image();
			img.src = $(this).css("background-image").replace('url(\"','').replace('\")','');
			context.drawImage(img, imgPos.left, imgPos.top, imgWd, imgHt);
		});
	});
});

stroke = function(clr, x1, y1, x2, y2, strk){
	ctx.beginPath();
	ctx.strokeStyle=clr;
	ctx.moveTo(width * x1, height * y1);
	ctx.lineWidth=strk;
	ctx.lineTo(width * x2, height * y2);
	ctx.stroke();
}