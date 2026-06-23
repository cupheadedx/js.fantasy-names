

function generator$bleach$bleachQuincy(type){
	i = Math.floor(Math.random() * 10);


	var nm1 = ["Aar","Abr","Ach","Adal","Adr","Alb","Alw","Andr","Arn","Bald","Ben","Bened","Beren","Clem","Dan","Diet","Domin","Drisc","Duar","Eber","Eck","Edm","Egg","El","Elin","Eman","Emmer","Erw","Ferd","Friedr","Geor","Ger","Gerh","Germ","Gerw","Grem","Guen","Gunt","Hann","Har","Hein","Hel","Helg","Henn","Heram","Herb","Hug","Ing","Jak","Jann","Jer","Joach","Jul","Kil","Kol","Konr","Kun","Laur","Lenn","Leon","Lin","Lor","Luc","Luis","Magn","Manfr","Mar","Mark","Max","Melch","Mich","Nikl","Nikol","Oliv","Osc","Patr","Paul","Petr","Phil","Raim","Ral","Raph","Reinh","Rich","Rob","Rol","Rud","Ruper","Sam","Sanad","Sebas","Sigis","Silev","Sok","Stanis","Theod","Tilam","Tiris","Tiz","Toreb","Torst","Uler","Vinc","Waled","Wened","Wenz","Wolef","Yan","Yann"];

	var nm2 = ["aak","ach","ael","aham","ald","am","amin","ander","ang","ann","ant","antin","ar","ard","ardt","art","aus","az","eas","echt","ed","einz","elm","emar","end","enn","er","ert","es","etan","ex","ian","ias","ic","ich","ick","ict","id","ied","ig","ik","ikt","ill","in","ius","ix","ol","olf","oll","oman","ome","ons","oph","uel","uin","und","unz","ur","urt","ut"];

	var nm3 = ["Ad","Adel","Ang","Ann","Bar","Beren","Beret","Bir","Brig","Cand","Catar","Chris","Corin","Dan","Dorot","El","Elen","Elis","Emil","Er","Eugen","Ev","Evel","Feliz","Fin","Fion","Frid","Gaber","Gerel","Ges","Gis","Gret","Han","Hannel","Inger","Iren","Ivon","Jan","Jen","Jes","Jess","Joseph","Jul","Kan","Kar","Karol","Kat","Katar","Kir","Kirst","Lar","Laris","Len","Leon","Lian","Lies","Liesel","Lil","Lill","Lin","Luc","Mad","Madel","Magd","Marel","Margar","Marik","Marin","Melin","Men","Mich","Nad","Nat","Neel","Nic","Oliv","Pater","Rach","Ramon","Ren","Rol","Ros","Sandr","Sask","Sel","Seraf","Sibyl","Sof","Steph","Theres","Tin","Valent","Valer","Veron","Vict","Walb","Waltr","Wilhelm","Yasm","Yvonn"];

	var nm4 = ["ae","alia","anda","ara","atha","ea","el","ela","ele","elia","elin","ell","ella","elle","ena","es","eth","eva","eve","heid","ia","ianca","ica","ice","icia","id","ie","iede","iela","ika","ilde","ilia","ilie","ily","ina","inas","ind","inde","ine","inne","ira","is","ise","ita","ith","ix","ola","olin","oline","onne","ora","ore","otte","otto","ude","ula","unde","uste"];

	var nm5 = ["Ab","Abendr","Achl","Ackn","Adelm","Aich","Alb","Alterm","Amm","Apfel","Arn","Auer","Bachm","Bart","Baum","Bech","Berc","Berl","Bern","Beutl","Bind","Blatt","Blumb","Born","Boum","Braun","Braunl","Brenn","Brunk","Corc","Cossm","Cullm","Dahm","Dal","Domin","Edelm","Egn","Ehm","Ehrenf","Eichen","Elsn","Erl","Ettl","Faehlm","Fahr","Feilh","Fein","Fench","Fisch","Frenz","Fresen","Furr","Gabr","Gessn","Gew","Grimm","Grub","Guizb","Hahn","Hart","Haschw","Heidl","Hell","Henl","Hinr","Hon","Hornb","Kahl","Kat","Kelln","Kinl","Kistl","Kohr","Krun","Lamp","Land","Lerh","Lex","Madel","Math","Mold","Nessel","Nied","Nothn","Ohlend","Op","Our","Plessn","Preisn","Radn","Ramb","Ratz","Reinm","Rosenb","Rottm","Row","Sann","Seml","Senn","Shell","Sperl","Stern","Surm","Tegel","Thoum","Vett","Visch","Wagn","Wegn","Weidm","Weiz","Wern"];

	var nm6 = ["ach","aire","al","ald","all","alt","and","ann","ardt","arth","att","au","aud","auer","aum","ea","eaux","eier","eimer","ein","eld","eler","elier","ell","elle","end","enn","ent","er","erd","erer","erger","erle","es","esse","ette","ia","ie","iel","ielli","ien","ier","ies","ind","ing","ios","ipp","iri","irth","iss","itt","ohl","oir","ol","old","on","one","orth","oth","oux","ul","urg","uss"];

	

	var tp = type;

	rnd3 = Math.random() * nm5.length | 0;

		rnd4 = Math.random() * nm6.length | 0;

		if(tp === 1){

			rnd = Math.random() * nm3.length | 0;

			rnd2 = Math.random() * nm4.length | 0;

			names =  nm3[rnd] + nm4[rnd2] + " " + nm5[rnd3] + nm6[rnd4];

			nm3.splice(rnd, 1);

			nm4.splice(rnd2, 1);

		}else{

			rnd = Math.random() * nm1.length | 0;

			rnd2 = Math.random() * nm2.length | 0;

			names = nm1[rnd] + nm2[rnd2] + " " + nm5[rnd3] + nm6[rnd4];

			nm1.splice(rnd, 1);

			nm2.splice(rnd2, 1);

		}

		nm5.splice(rnd3, 1);

		nm6.splice(rnd4, 1);

		return names;

}