var nm1 = ["b","ch","d","h","k","l","m","n","r","p","t","s","z"];

var nm2 = ["c","ch","d","j","k","m","n","t"];

var nm3 = ["k","p","t"];



function generator$narnia$narniaMice(type){
	i = Math.floor(Math.random() * 10);


	var tp = type;

	rnd = Math.random() * nm1.length | 0;

		rnd2 = Math.random() * nm2.length | 0

		rnd3 = Math.random() * nm3.length | 0;

		names = nm1[rnd] + "eepi" + nm2[rnd2] + "ee" + nm3[rnd3];

		return names;

}