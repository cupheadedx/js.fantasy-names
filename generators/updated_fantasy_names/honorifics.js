var nm1 = ["Master","Mister","Sir","Gentleman","Sire","Lord","Patron","Count","Duke","Father","Academic","Acclaimed","All-Knower","All-Seeing","Altruist","Ancient One","Arcanist","Austere One","Blossom","Celebrated","Champion","Chancellor","Chief","Chosen One","Commander","Compassionate One","Courted","Creator","Crowned","Dean","Defeater","Designer","Desired","Developed","Director","Divider","Doctor","Elevated One","Eminence","Enchanted One","Enlightened One","Equal","Esquire","Esteemed","Eternal One","Ethereal One","Exalted One","Exemplary","Excellence","Excellency","Expert","Faithful","Favored","Fortunate","Free One","Friend","Generosity","Gifted One","Gilded","Grand One","Greatness","Hallowedness","Heavenly","High Aspect","High Bravery","High Charity","High Chosen","High Courage","High Creator","High Developed","High Favored","High Grace","High Harmony","High Holiness","High Honorable","High Judgment","High Justice","High Loyalty","High Marked","High Power","High Pristine","High Radiance","High Royal","High Serenity","High Truth","High Vessel","Your Honesty","Honorable","Invincibility","Jewel","Jubilance","Judgment","Knower","Leadership","Luminance","Magnificence","Majesty","Master","Most Celebrated","Most Honorable","Most Reverend","Patriot","Perfection","Persevered","Primal One","Primordial One","Professor","Provost","Radiance","Rector","Regent","Respected","Royal","Scholar","Seniority","Serene","Serenity","Sinless","Specialist","Spirited","Studied One","Superiority","Surveyor","Timeless One","Trusted One","Unbounded","Unbreakable","Vessel","Victor","Warden","Warmhearted","Watcher","Welcome One","Wisdom","Worthy","Your Austerity","Your Beautitude","Your Bravery","Your Brilliance","Your Clarity","Your Curiosity","Your Diligence","Your Ecstasy","Your Eminent Highness","Your Esteemed","Your Excellency","Your Exuberance","Your Fortune","Your Generosity","Your Glory","Your Grace","Your Highness","Your Holiness","Your Honor","Your Humility","Your Illustrious","Your Immaculance","Your Independence","Your Industrious","Your Innocence","Your Intelligence","Your Justice","Your Kindness","Your Loyalty","Your Mercy","Your Opulence","Your Peace","Your Power","Your Righteousness","Your Significance","Your Valiance","Your Vibrancy","Your Worship"];
var nm2 = ["Academic","Acclaimed","All-Knower","All-Seeing","Altruist","Ancient One","Arcanist","Austere One","Blossom","Celebrated","Champion","Chancellor","Chief","Chosen One","Commander","Compassionate One","Countess","Courted","Creator","Crowned","Dame","Dean","Defeater","Designer","Desired","Developed","Director","Divider","Doctor","Duchess","Elevated One","Eminence","Enchanted One","Enlightened One","Equal","Esquire","Esteemed","Eternal One","Ethereal One","Exalted One","Exemplary","Excellence","Excellency","Expert","Faithful","Favored","Fortunate","Free One","Friend","Generosity","Gentlewoman","Gifted One","Gilded","Grand One","Greatness","Hallowedness","Heavenly","High Aspect","High Bravery","High Charity","High Chosen","High Courage","High Creator","High Developed","High Favored","High Grace","High Harmony","High Holiness","High Honorable","High Judgment","High Justice","High Loyalty","High Marked","High Power","High Pristine","High Radiance","High Royal","High Serenity","High Truth","High Vessel","Your Honesty","Honorable","Invincibility","Jewel","Jubilance","Judgment","Knower","Lady","Leadership","Luminance","Ma'am","Madam","Magnificence","Majesty","Master","Matron","Miss","Misses","Mistress","Most Celebrated","Most Honorable","Most Reverend","Mother","Patriot","Perfection","Persevered","Primal One","Primordial One","Professor","Provost","Radiance","Rector","Regent","Respected","Royal","Scholar","Seniority","Serene","Serenity","Sinless","Specialist","Spirited","Studied One","Superiority","Surveyor","Timeless One","Trusted One","Unbounded","Unbreakable","Vessel","Victor","Warden","Warmhearted","Watcher","Welcome One","Wisdom","Worthy","Your Austerity","Your Beautitude","Your Bravery","Your Brilliance","Your Clarity","Your Curiosity","Your Diligence","Your Ecstasy","Your Eminent Highness","Your Esteemed","Your Excellency","Your Exuberance","Your Fortune","Your Generosity","Your Glory","Your Grace","Your Highness","Your Holiness","Your Honor","Your Humility","Your Illustrious","Your Immaculance","Your Independence","Your Industrious","Your Innocence","Your Intelligence","Your Justice","Your Kindness","Your Loyalty","Your Mercy","Your Opulence","Your Peace","Your Power","Your Righteousness","Your Significance","Your Valiance","Your Vibrancy","Your Worship"];

var br ="";

function nameGen(type){
	var tp = type;
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id","result");
	
	for(i = 0; i < 10; i++){
		if(tp === 1){
			rnd = Math.random() * nm2.length | 0;
			nMs = nm2[rnd];
		}else if(tp === 2){
			rnd = Math.random() * nm1.length | 0;
			while(rnd < 10){
				rnd = Math.random() * nm1.length | 0;
			}
			nMs = nm1[rnd];
		}else{
			rnd = Math.random() * nm1.length | 0;
			nMs = nm1[rnd];
		}
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(nMs));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}