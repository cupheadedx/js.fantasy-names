var nm1 = ["Abdu","Abdul-Aziz","Abdul-Kader","Abdul-Nakeeb","Abdul-Rahman","Abdul-Salam","Abed","Adil","Afif","Ahmad","Akram","Alex","Ali","Amin","Amir","Amjad","Anis","Anter","Anwar","Arafa","Arafat","Asad","Awni","Ayoub","Azzam","Badee","Bahaa","Bascal","Basim","Bassam","Bishara","Bulos","Charly","Dawuud","Daoud","Deeb","Edward","Fahmi","Faraj","Faris","Fayez","Fu'ad","George","Ghanim","Ghassan","Hamdan","Hani","Hanna","Harb","Hasan","Hatim","Hazim","Henry","Husam","Husni","Hussein","Husayn","Ibrahim","Ihab","Ilyas","Imad","Isa","Isam","Iskander","Iyad","Jack","Jad","Jalal","Jamal","Jamil","Jasir","Jergis","Jony","Kadri","Kamal","Karam","Karim","Kassim","Khader","Khaleel","Khalid","Khamis","Lutfi","Mabrak","Mahir","Mahmud","Majid","Malik","Mansi","Martin","Marwan","Mathhar","Mazin","Michael","Mikhail","Mishail","Mohammad","Mufid","Muhannad","Muitaz","Munir","Muneer","Munther","Munthir","Murad","Musa","Mustafa","Muwaffak","Na'il","Nabil","Nadim","Nadir","Nafiz","Naim","Naji","Najib","Nasif","Nasir","Nasr","Nayif","Nida","Ni'daa","Nicola","Nidal","Nihad","Nizar","Osama","Oudah","Peter","Qadir","Raid","Raik","Raja","Rajab","Ramzi","Rashad","Rif'at","Riyad","Riad","Rushdi","Sa'id","Sabri","Salah","Saliba","Salim","Sami","Samir","Samuail","Saud","Shaker","Shawky","Sufyan","Suheil","Suleiman","Talat","Tarik","Victor","Wafiq","Wahid","Walid","Wasib","William","Ya'qub","Yahya","Younis","Yousef","Zachariya","Ziyad"];
var nm2 = ["Abir","Ablah","Adilah","Afaf","Ahlam","Ahrar","A'ida","A'ishah","Ayesha","Alia","Amal","Amani","Aminah","Amirah","Amnah","Asma","Astar","Awad","Azizah","Basimah","Basmah","Bolah","Buthayna","Da'ad","Dalal","Dayana","Dima","Dua","Dunya","Fadwa","Fadyah","Fahima","Fahmiya","Fairuz","Farrouz","Faridah","Fathiya","Fatimah","Fatin","Fatinah","Fauziyah","Fayzah","Fida","Fivan","Ghadah","Hadil","Halah","Hana","Hanan","Hayfe","Hidayah","Hikmat","Hind","Hiyam","Huda","Ibtihaj","Ibtisam","Ikhlas","Ikram","Ilham","Iman","In'am","Inshirah","Itaf","Jamilah","Janette","Johwana","Jorget","Kamilya","Karima","Karina","Khadriya","Khitam","Khulud","Klara","Laila","Layla","Lara","Latifa","Layana","Lina","Linda","Lisa","Liwese","Maha","Mahirah","Mai","May","Majidah","Manal","Margeret","Mariyah","Marleen","Majidah","Manal","Margaret","Mariyah","Marleen","Majidah","Maryam","Maysa","Milad","Milya","Muna","Munira","Na'ilah","Nabilah","Nadia","Nadya","Nahida","Nahil","Nahlah","Naifah","Naima","Najah","Najla","Najwa","Nana","Nariman","Nathirah","Nawal","Nilli","Nisrin","Norma","Nuha","Nura","Olfa","Omaymah","Rabi'ah","Rafif","Raja","Rajihah","Ramziyah","Rana","Randa","Rashida","Rasmiyah","Rihan","Rima","Rita","Ruba","Sabah","Sahar","Salma","Salwa","Samar","Samirah","Samyah","Sana","Sarah","Sawsan","Shafika","Shifa","Shukriya","Silvana","Sirin","Sonya","Sofya","Suad","Suhad","Suhair","Suheila","Sukayna","Sumayah","Suzan","Suzi","Sylvia","Taghrid","Tamam","Tanya","Tarub","Wafa","Wijdan","Zahglula","Zahiyyah","Zainab","Zuhar","Zulfa"];

var br = "";

function nameGen(type){
	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		rnd2 = Math.random() * nm1.length | 0;
		rnd3 = Math.random() * nm1.length | 0;
		while(rnd2 === rnd3){
			rnd3 = Math.random() * nm1.length | 0;
		}
		if(tp === 1){
			rnd = Math.random() * nm2.length | 0;
			names = nm2[rnd] + " " + nm1[rnd2] + " " + nm1[rnd3];
		}else{
			rnd = Math.random() * nm1.length | 0;
			while(rnd === rnd3 || rnd === rnd2){
				rnd = Math.random() * nm1.length | 0;
			}
			names = nm1[rnd] + " " + nm1[rnd2] + " " + nm1[rnd3];
		}
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(names));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}