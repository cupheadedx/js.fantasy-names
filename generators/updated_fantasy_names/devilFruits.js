
function nameGen(type){
	var nm1 = [["Ame","Rain"],["Arashi","Storm"],["Ari","Ant"],["Baku","Bomb (Bakudan)"],["Bijon","Vision"],["Buta","Pig"],["Chika","Underground"],["Chikara","Strength"],["DÅbu","Animal (DÅbutsu)"],["Eki","Liquid (Ekitai)"],["Gama","Toad"],["Gasu","Gas"],["Gin","Silver"],["HÄto","Heart"],["Ha","Blade"],["Ha","Tooth"],["Haga","Steel (Hagane)"],["Hana","Flower"],["Hansha","Reflex"],["Hebi","Snake"],["HeikÅ","Equilibrium/Balance"],["HensÅ","Disguise"],["Hi","Day"],["Hi","Fire"],["Hika","Light (Hikari)"],["Himi","Secret (Himitsu)"],["Himo","Cord"],["Hokori","Dust"],["HyÅ","Leopard"],["Ika","Squid"],["Ikari","Anger"],["Iki","Breath"],["Iki","Creature (Ikimono)"],["Inku","Ink"],["Inu","Dog"],["Itami","Pain"],["Iwa","Rock"],["Jigo","Hell (Jigoku)"],["Jikan","Time"],["KÅri","Ice"],["KÅ«ki","Air"],["Kaba","Hippopotamus"],["Kabu","Beetle (Kabutomushi)"],["Kaeru","Frog"],["Kage","Shadow"],["Kagi","Key"],["Kaku","Cactus (Kakutasu)"],["Kaori","Scent"],["Kara","Crow (Karasu)"],["Kaze","Wind"],["Kemo","Beast (Kemono)"],["Kemuri","Smoke"],["KesshÅ","Crystal"],["Ketsue","Blood (Ketsueki)"],["Ki","Tree"],["KibÅ","Wish"],["Kiba","Fang"],["Kin","Gold"],["Kugi","Spike"],["Kuma","Bear"],["Kumo","Cloud"],["Kumo","Spider"],["Kusari","Chain"],["Kyo","Giant (Kyojin)"],["Kyojin","Giant"],["Maindo","Mind"],["Mame","Bean"],["Me","Eye"],["Mizu","Water"],["Mushi","Insect"],["NÅ","Brain"],["Nama","Lead (Namari)"],["Nawa","Rope"],["Neko","Cat"],["Netsu","Heat"],["Nezu","Rat/Mouse (Nezumi)"],["NingyÅ","Doll"],["Odo","Surprise (Odoroki)"],["Onsei","Voice"],["Osore","Fear"],["Oto","Sound"],["RyÅ«","Dragon"],["Saru","Monkey"],["Seishin","Spirit"],["Shi","Death"],["Shi","Lion (Shishi)"],["Shimo","Frost"],["Shinpi","Mystery"],["Shita","Tongue"],["Shoku","Appetite (Shokuyoku)"],["Sokudo","Speed"],["Sora","Sky"],["Suji","Muscle"],["Suna","Sand"],["TaihÅ","Cannon"],["TaiyÅ","Sun"],["Taka","Hawk"],["Tako","Octopus"],["Tamai","Boulder (Tamaishi)"],["Tatsu","Dragon"],["Ten","Heaven (Tengoku)"],["Tenki","Weather"],["Tetsu","Iron"],["Tobu","Fly"],["Tora","Tiger"],["Tori","Bird"],["Tsuba","Wing (Tsubasa)"],["Tsuchi","Earth/Ground"],["Tsuki","Moon"],["Uma","Horse"],["Un","Luck"],["Uta","Song"],["YÅ«rei","Ghost"],["Yoku","Desire (YokubÅ)"],["Yoro","Pleasure (Yourokobi)"],["Yoru","Night"],["Yu","Hot Water"],["Yuge","Steam"],["Yuki","Snow"],["ZÅ","Elephant"]];

	var br = "";

	$('#placeholder').css('textTransform', 'capitalize');
	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		rnd = Math.floor(Math.random() * nm1.length);
		names = nm1[rnd][0] + " " + nm1[rnd][0] + " no Mi (" + nm1[rnd][1] + ")";
		nm1.splice(rnd, 1);
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(names));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}