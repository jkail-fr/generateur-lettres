//fonction pour push dans la div
//preparation
var voyelles = ["A", "E", "I", "O", "U", "Y"];
var consonnes = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z"];
var nbrLettre = 0;

// on gere le nombre de lettre et son affichage
function affichageLettres(nombre)
	{
	document.querySelector('#total span').innerHTML = nombre;
	}

affichageLettres(nbrLettre);

//fonction générant les lettres
function generateLetter(serie)
	{
	var randomNumber = Math.floor(Math.random() * Math.floor(serie.length));
	return serie[randomNumber];

	}

//fonction pour l'affichage des lettres	
function affichagechaine(lettre)
	{
	var lettreHTML = "<span>" + lettre + "</span>";
	document.querySelector('#caracteres').innerHTML += lettreHTML;
	}

function resetChaine()
	{
	var lettreHTML = null;
	document.querySelector('#caracteres').innerHTML = lettreHTML;
	affichageLettres('0');
	nbrLettre = 0;
	}

// gestion du clic sur les boutons voyelles / consonnes / reset
var btnConsonne = document.getElementById('consonne');
var btnVoyelle = document.getElementById('voyelle');
var btnReset = document.getElementById('reset');


function generateVoyelle()
	{
	var resultat = generateLetter(voyelles);
	affichagechaine(resultat);
	nbrLettre = nbrLettre + 1;
	affichageLettres(nbrLettre);
	}


function generateConsonne()
	{
	var resultat = generateLetter(consonnes);
	nbrLettre = nbrLettre + 1;
	affichagechaine(resultat);
	affichageLettres(nbrLettre);
	}

btnConsonne.addEventListener('click', function (){generateConsonne();});
btnVoyelle.addEventListener('click', function (){generateVoyelle();});
btnReset.addEventListener('click', function (){resetChaine();});
// eventlistener pour tablettes :
btnConsonne.addEventListener('touchstart', function (){generateConsonne();});
btnVoyelle.addEventListener('touchstart', function (){generateVoyelle();});
btnReset.addEventListener('touchstart', function (){resetChaine();});

//------------------Gestion des presets
/*switch case basé sur l'id du bouton pour nombre de boucles ?*/

//on recupere les boutons
var preset9 = document.getElementById('9');
var preset10 = document.getElementById('10');
var preset11 = document.getElementById('11');
var preset12 = document.getElementById('12');

//fonction qui execute la génération

function generatePreset(presetNumber)
	{
	generateVoyelle();
	generateConsonne();
	generateVoyelle();
	generateConsonne();
	for (presetNumber = presetNumber - 4; presetNumber > 0; presetNumber--)
		{
		var goRandom = Math.floor(Math.random() * Math.floor('2'));
		console.log(goRandom);
		if (goRandom == 0)
			{
			generateVoyelle();
			}
		else
			{
			generateConsonne();
			}
		}
	}

preset9.addEventListener('click', function ()
{
generatePreset(9);
});
preset10.addEventListener('click', function ()
{
generatePreset(10);
});
preset11.addEventListener('click', function ()
{
generatePreset(11);
});
preset12.addEventListener('click', function ()
{
generatePreset(12);
});


/*todo :
afficher lettres : OK
incrementer nombre lettre afficher : OK
faire les presets : ok
verifier si un "voyelles" ou consonne peut s'ajouter apres un preset : ok
Styler -> ok
Bouton reset
Plus tard : 
chrono en minutes
bouton vers un solveur -https://www.wordfind.com/scrabble-triche ->
*/