var nm1 = ["Alpha","Beta","Chi","Delta","Epsilon","Eta","Gamma","Iota","Kappa","Lambda","Mu","Nu","Omega","Omicron","Phi","Pi","Psi","Rho","Sigma","Tau","Theta","Upsilon","Xi","Zeta"];



function generator$real$greekLetterOrgs(){
	i = Math.floor(Math.random() * 10);


	nTp = Math.random() * 4 | 0;

		rnd = Math.random() * nm1.length | 0;

		rnd2 = Math.random() * nm1.length | 0;

		if(nTp === 0){

			names = nm1[rnd] + " " + nm1[rnd2];

		}else{

			rnd3 = Math.random() * nm1.length | 0;

			if(nTp < 3){

				names = nm1[rnd] + " " + nm1[rnd2] + " " + nm1[rnd3];

			}else{

				rnd4 = Math.random() * nm1.length | 0;

				names = nm1[rnd] + " " + nm1[rnd2] + " " + nm1[rnd3] + " " + nm1[rnd4];

			}

		}

		return names;

}