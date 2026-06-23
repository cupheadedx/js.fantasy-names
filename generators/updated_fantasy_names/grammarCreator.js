$(document).ready(function(){
	$("#verb").change(function(){
		var change = $("#verb").val();
		$(".verb").val(change);
	});
	$("#fps").change(function(){
		var change = $("#fps").val();
		$(".fps").val(change);
	});
	$("#sps").change(function(){
		var change = $("#sps").val();
		$(".sps").val(change);
	});
	$("#tps").change(function(){
		var change = $("#tps").val();
		$(".tps").val(change);
	});
	$("#tps2").change(function(){
		var change = $("#tps2").val();
		$(".tps2").val(change);
	});
	$("#tps3").change(function(){
		var change = $("#tps3").val();
		$(".tps3").val(change);
	});
	$("#fpp").change(function(){
		var change = $("#fpp").val();
		$(".fpp").val(change);
	});
	$("#fpp2").change(function(){
		var change = $("#fpp2").val();
		$(".fpp2").val(change);
	});
	$("#spp").change(function(){
		var change = $("#spp").val();
		$(".spp").val(change);
	});
	$("#tpp").change(function(){
		var change = $("#tpp").val();
		$(".tpp").val(change);
	});
	$(".conjugateBtn").click(function(){
		var curCon = $(this).parent().parent();
		var firstCon = curCon.find("#prs1").val() + curCon.find("#add1").val() +curCon.find("#verb1").val() + curCon.find("#add2").val();
		var secCon = curCon.find("#prs2").val() + curCon.find("#add3").val() + curCon.find("#verb2").val() + curCon.find("#add4").val();
		var thirCon = curCon.find("#prs3").val() + curCon.find("#add5").val() + curCon.find("#verb3").val() + curCon.find("#add6").val();
		var thirCon2 = curCon.find("#prs7").val() + curCon.find("#add13").val() + curCon.find("#verb7").val() + curCon.find("#add14").val();
		var thirCon3 = curCon.find("#prs8").val() + curCon.find("#add15").val() + curCon.find("#verb8").val() + curCon.find("#add16").val();
		var fouCon = curCon.find("#prs4").val() +curCon.find("#add7").val() + curCon.find("#verb4").val() + curCon.find("#add8").val();
		var fouCon2 = curCon.find("#prs9").val() +curCon.find("#add17").val() + curCon.find("#verb9").val() + curCon.find("#add18").val();
		var fifCon = curCon.find("#prs5").val() + curCon.find("#add9").val() + curCon.find("#verb5").val() + curCon.find("#add10").val();
		var sixCon = curCon.find("#prs6").val() + curCon.find("#add11").val() + curCon.find("#verb6").val() + curCon.find("#add12").val();
		curCon.find(".translated").html("<tr><td>" + firstCon + "</td></tr><tr><td>" + secCon + "</td></tr><tr><td>" + thirCon + "</td></tr><tr><td>" + thirCon2 + "</td></tr><tr><td>" + thirCon3 + "</td></tr><tr><td>" + fouCon + "</td></tr><tr><td>" + fouCon2 + "</td></tr><tr><td>" + fifCon + "</td></tr><tr><td>" + sixCon + "</tr></td>");
	});
});