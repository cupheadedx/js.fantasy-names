var nm1 = ["bh","dh","gh","kh","qh","rh","th","vh","wh","xh","zh"];
var nm2 = ["â","ô","û"];
var nm3 = ["b","d","g","h","m","n","r","v","z"];
var nm4 = ["a","e","o","u"];
var nm5 = ["d","m","n","r","v","z"];
var nm6 = ["a","i","o","u"];

function generator$lord_of_the_rings$lotrDruedainNames(){
	i = Math.floor(Math.random() * 10);

	rnd = Math.random() * nm1.length | 0;
		rnd2 = Math.random() * nm2.length | 0;
		rnd3 = Math.random() * nm3.length | 0;
		rnd4 = Math.random() * nm4.length | 0;
		rnd5 = Math.random() * nm5.length | 0;
		rnd6 = Math.random() * nm6.length | 0;
		while(nm3[rnd3] === nm5[rnd5]){
			rnd3 = Math.random() * nm3.length | 0;
		}
		nMs = nm1[rnd] + nm2[rnd2] + "n-" + nm3[rnd3] + nm4[rnd4] + nm5[rnd5] + nm6[rnd6] + "-" + nm1[rnd] + nm2[rnd2] + "n";
		return nMs;
}