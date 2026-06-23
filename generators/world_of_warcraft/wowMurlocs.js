var nm1 = ["bj","bjor","bjorr","bmurg","bmurgl","brg","brgl","dor","dorg","er","erg","fllr","flrg","gar","gargl","gib","gibble","gibl","gl","glr","glrg","glrs","glu","glug","glugg","grg","grgl","grr","grrb","grrl","gur","gurg","gurl","lr","lrm","lrmr","mgl","mrg","mrr","mur","murg","murgl","slg","slr","slrg","spl","splur"];
var nm2 = ["ber","br","ggl","gil","gl","gle","glil","glr","gul","gur","lg","lil","lr","lrs","lur","lurg","mr","mrg","mur","rg","rgl"];
var nm3 = ["bbl","bl","br","brgl","brm","gee","gie","gill","gl","gla","gle","gles","gli","glia","gll","glr","gly","gr","grl","klr","kr","ky","la","lbr","le","les","lgi","lgr","lki","lokr","lr","lrm","mr","murk","rg","rgl","rglr","rgly","rmr","sh","shy","slr"];

function generator$world_of_warcraft$wowMurlocs(type){
	i = Math.floor(Math.random() * 10);

	var tp = type;
	nTp = Math.random() * 3 | 0;
		rnd = Math.random() * nm1.length | 0;
		rnd3 = Math.random() * nm3.length | 0;
		if(nTp === 0){
			rnd2 = Math.random() * nm2.length | 0;
			nMs = nm1[rnd] + nm2[rnd2] + nm3[rnd3];
		}else{
			nMs = nm1[rnd] + nm3[rnd3];
		}
		return nMs;
}