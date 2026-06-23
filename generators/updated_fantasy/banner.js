
	  window["nitroAds"] = window["nitroAds"] || {
		createAd: function() {
		  window.nitroAds.queue.push(["createAd", arguments]);
		},
		queue: []
	  };
  
  

var adScript = document.createElement('script');
adScript.src = 'https://s.nitropay.com/ads-291.js?f';
adScript.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(adScript);

$(document).ready(function(){
	document.body.className = "site-fantasynamegenerators"
	$("<link/>", {
	   rel: "stylesheet",
	   type: "text/css",
	   href: "https://fonts.googleapis.com/css?family=Ribeye"
	}).appendTo("head");
	$.ajax({
	  url: "//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/1.0.9/cookieconsent.min.js",
	  dataType: "script"
	});
		if($("#shareGen p")){
		  $("#shareGen p").html("Feel free to share");
		}
		window.cookieconsent_options = {"message":"This website uses cookies to ensure you get the best experience on this site.","dismiss":"Okay.","learnMore":"More info here.","link":"http://fantasynamegenerators.com/cookies.php","theme":"dark-top"};

	$(window).resize((function () {
		if(window.innerWidth < 855){
			$("#sideimageLarge").html("").css({"background-image": "none"});
		}else if(window.innerWidth > 855){
			$("#longBanner").html("");
		}
		})
	);
});