var nm1 = ["","","","","","","","","","","","b","d","g","h","l","m","n","s","v","w","y","z"];
var nm2 = ["a","e","i","o"];
var nm3 = ["d","g","l","ll","m","n","nn","ph","r","rr","s","sh","ss","v","z"];
var nm4 = ["","","","","f","h","l","n","ph","s","th"];


var br = "";

function nameGen(){
	var nm5 = ["Act","Ad","Age","Appeal","Article","Artistry","Aspect","Attitude","Awe","Balance","Basis","Beam","Beat","Benefit","Bonus","Border","Brass","Brave","Bravery","Breath","Brilliance","Buddy","Burst","Call","Candle","Canvas","Care","Cause","Chapter","Chart","Child","Choice","Clarity","Click","Cloud","Contact","Count","Courage","Course","Creation","Curiosity","Curtain","Cycle","Dance","Data","Design","Desire","Discovery","Divide","Dream","Edge","Edition","Emerald","Emotion","Emphasis","Error","Escape","Eternity","Event","Experience","Facet","Factor","Fascination","Feast","Feature","Figure","Flame","Flight","Flock","Flow","Fluke","Force","Forever","Fortune","Frame","Freedom","Friend","Future","Gift","Giggle","Grace","Green","Guest","Guide","Harmony","Heart","History","Holiday","Honesty","Honor","Image","Imagine","Impulse","Intent","Jade","Jewel","Journey","Justice","Know","Knowledge","Laugh","Laughter","Leaf","League","Lesson","Liberty","Light","Limit","Locket","Loyalty","Luck","Lucky","Luxury","Magic","Mask","Match","Matter","Measure","Memory","Mercy","Message","Method","Mirror","Mission","Mode","Moment","Motion","Music","Network","Night","Number","Omen","Option","Orange","Outcome","Part","Passage","Passenger","Passion","Patch","Path","Pause","Peace","Peak","Period","Phase","Pitch","Platform","Pocket","Poem","Position","Power","Presence","Present","Pressure","Price","Procedure","Project","Purpose","Quiet","Red","Repeat","Reply","Requiem","Riddle","Risk","Sapphire","Scale","Scene","Scent","Score","Scratch","Script","Secret","Self","Sense","Session","Shade","Shadow","Shape","Shift","Sign","Signal","Simple","Sky","Smile","Snow","Solution","Song","Source","Space","Spark","Spell","Spirit","Split","State","Status","Still","Storm","Story","Stranger","Strategy","Stretch","Strike","Style","Survey","Switch","Texture","Theory","Thought","Thrill","Thunder","Ticket","Tolerance","Track","Trail","Treat","Trouble","Trust","Truth","Turn","Twist","Union","Visit","Visitor","Voice","Volume","Voyage","Watch","Window","Wisdom","Wish","Wit","Wonder"];
	
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		if(i < 5){
			nameMas();
			while(nMs === ""){
				nameMas();
			}
		}else{
			rnd = Math.random() * nm5.length | 0;
			nMs = nm5[rnd];
			nm5.splice(rnd, 1);
		}
		nNr = Math.random() * 3 | 0;
		if(nNr === 0){
			nr = Math.random() * 15 | 0;
			nMs = nMs + "-" + nr;
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

function nameMas(){
	var nTp = Math.random() * 3 | 0;
	rnd = Math.random() * nm1.length | 0;
	rnd2 = Math.random() * nm2.length | 0;
	rnd4 = Math.random() * nm2.length | 0;
	rnd5 = Math.random() * nm3.length | 0;
	rnd3 = Math.random() * nm4.length | 0;
	if(nTp < 2){
		while(nm1[rnd] === nm3[rnd5] || nm3[rnd5] === nm4[rnd3]){
			rnd5 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd5] + nm2[rnd4] + nm4[rnd3];
	}else{
		rnd6 = Math.random() * nm3.length | 0;
		rnd7 = Math.random() * nm2.length | 0;
		while(nm3[rnd6] === nm3[rnd5] || nm3[rnd6] === nm4[rnd3]){
			rnd6 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd5] + nm2[rnd4] + nm3[rnd6] + nm2[rnd7] + nm4[rnd3];
	}
	testSwear(nMs);
}