//Variable du nombre de coups
let nbcoups = 0;

//Cache le tresor aux coordonées x et y aléatoire 
let x = Math.floor(Math.random() * 8 );
let y = Math.floor(Math.random() * 8 );
let tresor =  x + "-" + y;



//créé le tableau de 8*8 avec une boucle imbriqué 
function tab(){
	let tab = "<table>"
	for (let y=0 ; y<8; y++){
		tab = tab +"<tr> </tr>";

		for (let x=0 ; x<8; x++){
			let idCase = String(y) + "-" + String(x);
			tab = tab + '<td onclick="choix(this.id);" id="' + idCase + '"></td>'+'</td>';

		}
	}
	//Affiche le tableau
	document.getElementById("tableau").innerHTML = tab

}




function choix(idCase){
	
	//Augmente le compteur de 1 pour chaque essais
	nbcoups += 1;
	compte.innerHTML = nbcoups;

	//parcours de toute les possibilités possible
	if(idCase==tresor){
		caseTab = document.getElementById(idCase);
		caseTab.setAttribute('class','good');
		alert("Bingo");
	}

	else if(idCase[0]==tresor[0]){
		caseTab = document.getElementById(idCase);
		caseTab.setAttribute('class','ligne');	
	}

	else if(idCase[2]==tresor[2]){
		caseTab = document.getElementById(idCase);
		caseTab.setAttribute('class','colonne');
			
	}

	else{
		caseTab = document.getElementById(idCase);
		caseTab.setAttribute('class','bad');	
	}
	
}


