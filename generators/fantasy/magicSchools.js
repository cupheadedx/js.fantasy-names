var names1 = ["a","e","i","o","u","","","","","","","","","","","","","","","","","","","","","","","","",""];
var names2 = ["b","d","k","l","m","n","p","r","s","t","b","d","f","g","h","k","l","m","n","p","r","s","t","v","w","y","z","br","dr","gr","kr","pr","str","tr","bl","cl","fl","gl","kl","pl","sl"];
var names3 = ["a","e","i","o","u","a","e","i","o","u","ae","ea","ou","au","a","e","o"];
var names4 = ["d","f","g","k","l","m","n","p","r","s","t","x"];
var names5 = ["w","n","s","m","r","","","","","","",""];
var names6 = ["any","arry","arth","arths","arts","elts","erra","erry","erth","eth","iams","ia","iara","ine","inns","iths","iton","ity","onia","ons","ora","ore","orth","orths","ose","yce"];
var names7 = ["Academy of Sorcery","Academy of Spells","Academy of Magics","Academy of Witchcraft","Academy of Wizardry","Academy of the Arcane","Institute of Magics","Institute of Wizardy","Institute of the Arcane","School of Magics","School of Sorcery","School of Witchcraft","School of Wizardry","School of Wizards","School of the Arcane"];
function generator$fantasy$magicSchools(){
	i = Math.floor(Math.random() * 10);

	rnd = Math.random() * names1.length | 0;
		rnd2 = Math.random() * names2.length | 0;
		rnd3 = Math.random() * names3.length | 0;
		rnd4 = Math.random() * names4.length | 0;
		rnd5 = Math.random() * names5.length | 0;
		rnd6 = Math.random() * names6.length | 0;
		rnd7 = Math.random() * names7.length | 0;
		if(i < 5){
			names = names1[rnd] + names2[rnd2] + names3[rnd3] + names4[rnd4] + names5[rnd5] + names6[rnd6];
		}else{
			names = names1[rnd] + names2[rnd2] + names3[rnd3] + names4[rnd4] + names5[rnd5] + names6[rnd6] + ", " + names7[rnd7];
		}
		return names;
}