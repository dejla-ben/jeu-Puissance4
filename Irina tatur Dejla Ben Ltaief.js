//;Iryna Tatur, Matricule:1066549   ; Dejla Ben ltaief ,Matricule: 1069712
// creation d'un tableau et le remplir de chaine vides 
var creeTableauVide = function(nlignes, ncolonnes){
	var tableau = new Array();  
	for (var i=0; i<nlignes; i++){   
		tableau[i]= Array(ncolonnes);
		for(var j=0; j<ncolonnes; j++){
			tableau[i][j]=" ";  
		}
	}
return tableau;  
};

// affichage du  plateau
var affichePlateauDeJeu = function(tab){
    var i=tab.length;
    var tire = "  ";
    var ligne = "";
    var nombr ="   "; 
    for (i=tab.length;i>0;i--){    
        ligne = "";
        ligne = ligne+i+" |";
        for (var j=0;j<tab[1].length;j++)
				ligne = ligne+tab[i-1][j]+"|"; 
        print(ligne);
    }    
     //cree ligne ---
   for (var j=tab.length+1;j>0;j--)
       tire = tire+"- ";    
    print(tire);
    //cree ligne 12345...
    for (var k=1;k<=tab[1].length;k++)
		nombr = nombr + k + " ";   
    print(nombr); 
};

//affichage marque de pas
var marqueDePas = function(lin,colon,elem){
	print(">> "+elem+" "+(colon+1)+" "+(lin+1) ); 
};

//verification verticale d'ordinateur
var verticaleOrdi= function (elem){
    var vert = Array(tab1[1].length);
    for(var j=0; j<tab1[1].length; j++){
        var compt = 0;
        var a = 0;
        for(var i=0; i<tab1.length-1;i++){
            if((tab1[i][j]==elem)&&(tab1[i+1][j]==" ")){
				do{    
					compt++;
					a++;
				}   
				while(((i-a)>-1)&&(tab1[i-a][j]==elem));
            }
        }
        vert[j]=compt;
    }
return vert;
};

//verification horizentale
var horizentaleOrdi = function(elem){
    var horis = Array(tab1[1].length);
    for(var j=0; j<tab1[1].length; j++){
        var compt = 0;
        var a = 0;
        for(var i=0; i<tab1.length;i++){   //gauche
			if((i==0)||(tab1[i-1][j]!=" ")){    
				if((j+1)<tab1[1].length){
					if((tab1[i][j]==" ")&&(tab1[i][j+1]==elem)){
						a=1;
						// entre = false;
						do{    
							compt++;
							a++;
						}   
						while(((j+a)<tab1[1].length)&&(tab1[i][j+a]==elem));
					}
				} 
				//droit
				if((j-1)>-1){
					if((tab1[i][j]==" ")&&(tab1[i][j-1]==elem)){//entre = false;   
						a=1;
						do{    
							compt++;
							a++;
						}   
						while(((j-a)>-1)&&(tab1[i][j-a]==elem));
             
					}
				} 
			}   
        }
        horis[j]=compt;
    }
return horis;
};

//verfication diagonale ordinateur
var diagonaleOrdi = function(elem){
	var diagon = Array(tab1[1].length);
	for(var j=0;j<tab1[1].length;j++){
		var compt_1=0;
		var compt_2=0;
		var a=1;
		for (var i=0; i<tab1.length;i++){
			if ((i==0)||(tab1[i-1][j]!=" ")){
				if(tab1[i][j]==" "){//diagonal bas_gauche-haut_droit
					if(((i-a)>-1)&&((j-a)>-1)&&(tab1[i-a][j-a]==elem)){ 
						do{    
							compt_1++;
							a++;
						}
						while(((i-a)>-1)&&((j-a)>-1)&&(tab1[i-a][j-a]==elem));
					}
					a=1;
					if(((i+a)<(tab1.length))&&((j+a)<(tab1[1].length))&&(tab1[i+a][j+a]==elem)){
						do{    
							compt_1++;
							a++;
						}
						while(((i+a)<(tab1.length))&&((j+a)<(tab1[1].length))&&(tab1[i+a][j+a]==elem));
					}
                  
             //diagonal haut_gauche-bas_droit
					a=1;
					if(((i+a)<(tab1.length))&&((j-a)>-1)&&(tab1[i+a][j-a]==elem)){
						do{
							compt_2++;
							a++;
						}
						while(((i+a)<(tab1.length))&&((j-a)>-1)&&(tab1[i+a][j-a]==elem));
					}
					a=1;
					if(((i-a)>-1)&&((j+a)<(tab1[1].length))&&(tab1[i-a][j+a]==elem)){
						do{
							compt_2++;
							a++;
						}
						while(((i-a)>-1)&&((j+a)<(tab1[1].length))&&(tab1[i-a][j+a]==elem));
					} 
				}
			}
		}
		if(compt_1>compt_2)
			diagon[j]=compt_1;
		else
			diagon[j]=compt_2;
	}    
return diagon;    
};

//aléatoire
var random = function(col){
  return Math.floor(Math.random() * (col- 0 + 1)) + 0;  
};

//trouve la place dans la colonne
 var placeDansColonne = function(colon){
    for (var i=0; i<tab1.length; i++)
        if (tab1[i][colon]==" ")
            return i;
};

//premières 6 pas d'ordinateur
var commence = function(){
	for(var pas=0;pas<6;pas++){
		var colon = random(tab1[1].length-1);
		var lin = placeDansColonne(colon);
		if (pas%2==0){
			tab1[lin][colon] = "X";
			affichePlateauDeJeu(tab1); 
			marqueDePas(lin, colon,"X");  
		}   
	   else{
			tab1[lin][colon] = "O";
			affichePlateauDeJeu(tab1);
			marqueDePas(lin, colon,"O");  
		}    
	}  
return tab1;    
};
var elemMax = function(){
	for(var j=0;j<tab1[1].length;j++)
		for(var i=0;i<tab1.length;i++)
			if (tab1[i][j]==" "){
				var max = [tab1[i][j],j];
				return max;
			}
};

//trouver la meilleure colonne
var solution = function(hMon,vMon,dMon,hOpp,vOpp,dOpp,elem){
	var rez = Array(3);  
	var hvdMon = [hMon,vMon,dMon];
	var colonMax = elemMax(tab1);   
	var max =colonMax[0];
	rez[0]=colonMax[1]; 
	rez[1]=elem;   
	for(var i=0;i<hMon.length;i++)//verifier son pas pour gagner
 
		if((hMon[i]>=3)||(vMon[i]>=3)||(dMon[i]>=3)){
			 rez[0]=i;
			 rez[1]=elem;
			 rez[2]=false;
			 return rez;
		} 

	for(var i=0;i<hMon.length;i++)//verifier pas d'adversaire pour se proteger
		if((hOpp[i]>=3)||(vOpp[i]>=3)||(dOpp[i]>=3)){
			 rez[0]=i;
			 rez[1]=elem;
			 rez[2]=true;
			 return rez;
		} 
	 
	for(var i=0;i<hvdMon.length;i++){
		for(var j=0;j<hvdMon[1].length;j++)
			if (hvdMon[i][j]>max){
				max=hvdMon[i][j];
				rez[0]=j;
				rez[1]=elem;
				rez[2]=true;
			}
	}    
return rez;
};

//ordinateur contre ordinareur
var ordContrOrd = function(){
	var fin = true;
	var pas = tab1[1].length*tab1.length;
	commence(tab1);
	for(var k=7; k<=pas;k++){
		if(k%2!=0){
			var horis_mon = horizentaleOrdi("X");
			var vertical_mon = verticaleOrdi("X");
			var diagonal_mon = diagonaleOrdi("X");   
			var horis_adversaire = horizentaleOrdi("O");
			var vertical_adversaire = verticaleOrdi("O");
			var diagonal_adversaire = diagonaleOrdi("O");   
			var res = solution(horis_mon, vertical_mon,diagonal_mon, 
                    horis_adversaire, vertical_adversaire,diagonal_adversaire,"X");
        }
		else{
			var horis_mon = horizentaleOrdi("O");
			var vertical_mon = verticaleOrdi("O");
			var diagonal_mon = diagonaleOrdi("O"); 
			var horis_adversaire = horizentaleOrdi("X");
			var vertical_adversaire = verticaleOrdi( "X");
			var diagonal_adversaire = diagonaleOrdi("X");
			var res = solution(horis_mon, vertical_mon,diagonal_mon,
                   horis_adversaire, vertical_adversaire, diagonal_adversaire,"O");
		}    
		var colon = res[0];
		var ligne = placeDansColonne(colon);
		tab1[ligne][colon]=res[1];
		affichePlateauDeJeu(tab1);
		marqueDePas(ligne, colon, res[1]);
		if (res[2]==false){
		   alert("Le jeu est terminer.\n Le gagnant est "+res[1]);
		   return res[1];  
		}     
	}
	alert ("Partie nulle!");
    return fin;
};

//CodeHumain
//// tester si une combinaison verticale est gagnante
var Verticale=function (jeton){
	var ok=0;// variable qui prend 1 a chaque fois qu'elle detcte une serie verticale
	for(var i=0;i<tab1.length-3;i++){
        for(var j=0;j<tab1[i].length;j++){
			if((tab1[i][j]==jeton)  && (tab1[i+1][j] ==jeton) 
					&& (tab1[i+2][j] ==jeton) && (tab1[i+3][j] ==jeton))           
		                ok=1;           
        } 
    }              
return(ok);
};

// tester si une combinaison Horizentale est gagnante 
var Horizentale=function (jeton)
{var ok=0;// variable qui prend 1 a chaque fois qu'elle detcte une serie Horizentale
	for(i=0;i<tab1.length;i++){
            for(j=0;j<tab1[i].length-3;j++){
                if((tab1[i][j]==jeton) &&(tab1[i][j+1] ==jeton) 
					&& (tab1[i][j+2] ==jeton) &&(tab1[i][j+3] ==jeton)) 
						ok=1;
            }
}  
return ok;            
};
	   
// tester si une combinaison DiagonaleaDroite est gagnante
var DiagonaleaDroite=function (jeton)
{   
	var ok=0;
	for(i=0;i<tab1.length-3;i++){
        for(j=0;j<tab1[i].length-3;j++){
            if((tab1[i][j]==jeton) &&(tab1[i+1][j+1] ==jeton)  
                && (tab1[i+2][j+2] ==jeton)&&(tab1[i+3][j+3] ==jeton))
		            ok=1;
        }  
    }
return(ok);
};
// tester si une combinaison DiagonaleGauche est gagnante                    
var diagonaleGauche =function(jeton){
	var ok=0;
	for(i=nb_ligne-1;i>2;i--){ // à verifier (i=5;i>2;i--)
        for(j=0;j<tab1[i].length;j++)
			if(tab1[i][j]==jeton  && tab1[i-1][j+1] ==jeton  && tab1[i-2][j+2] ==jeton && tab1[i-3][j+3] ==jeton) 
                ok=1;
    }    
return(ok);     
};
//veifier tous les combinaisons
var Verif=function(joueur,jeton){ 
	var ok=0; 
	if ( Verticale(jeton) == 1 || Horizentale(jeton)==1 || diagonaleGauche(jeton)==1 || DiagonaleaDroite(jeton)==1)
		ok=1; 
	
return(ok);
};

//Placer le jeton dans la grille
var coupDansColonne=function (col,jeton){
	var ok=0; 
	for (var i=0; ((ok == 0)&& (i< nb_ligne)); i++) 
		if( tab1[i][col]==" ") 
		{    
			ok =1 ; 
			tab1[i][col] =jeton;
            affichePlateauDeJeu(tab1);
            print (">>" + jeton +" " +(col+1)+" "+(i+1));
		} 
 return(ok); 
};

//coup du premier joueur
var coup1=function(col)
{   
	if(col==-1)
	{
		col=+prompt("Joueur 1 ("+jeton1+") colonne? ");
	}
	
    if (isNaN(col)==true)
        do{
			col=+prompt("Numéro de colonne invalide.Choissisez un nombre("+jeton1+") ?");
        } while (isNaN(col)==true);   

	if (col-1>=nb_colonne || col<1)
        do{
			col=+prompt("Colonne hors plateau .Choissisez une autre ("+jeton1+") ?");
        } while (col-1>=nb_colonne || col<1);	
		
	if(!coupDansColonne(col-1,jeton1)){ 
		col=+prompt("Colonne déja pleine! Choisissez une autre colonne("+jeton1+") ?");
		coup1(col);
	}
};
//coup du second joueur
var coup2=function(col)
{   
	if(col==-1)
	{
		col=+prompt("Joueur 2 ("+jeton2+") colonne? ");
	}
	
    if (isNaN(col)==true)
        do{
			col=+prompt("Numéro de colonne invalide.Choissisez un nombre("+jeton2+") ?");
        } while (isNaN(col)==true);   

	if (col-1>=nb_colonne || col<1)
        do{
			col=+prompt("Colonne hors plateau .Choissisez une autre ("+jeton2+") ?");
        } while (col-1>=nb_colonne || col<1);	
		
	if(!coupDansColonne(col-1,jeton2)){ 
		col=+prompt("Colonne déja pleine! Choisissez une autre colonne("+jeton2+") ?");
		coup2(col);
	}
};
// déroulement du jeu humain humain
var HumainHumain=function(){ 
	var j1win=0; var j2win=0;var  coup=0; var joueur=0;
  
    while( j1win==0 && j2win==0 && coup<nb_ligne*nb_colonne){
		joueur=1;
		coup1(-1); 
		coup=coup+1; 
		j1win=Verif(1,jeton1);
		if (j1win==0){
			joueur=2;
			coup2(-1); 
			coup=coup+1;
			j2win=Verif(2,jeton2);
		}// detection d'un gagnant ou match nul
       if (j1win==1)
       alert("Joueur"+joueur+ "!Bravo vous avez gagné!"); 
       else if (j2win==1)
       alert("Joueur"+joueur+" !Bravo vous avez gagné!");
       else if ( j1win==0 && j2win==0 && coup==nb_colonne*nb_ligne)
       alert("Match null, pas de gagnant!");
    }
};

//ord_contre_humain et humain contre Ordi
var OrdHumain = function(ordre){
    var x=nb_colonne*nb_ligne+ordre;
	if (ordre==0){
        var elem_1="X";
        var elem_2="O";//homme 
    }
    else{
        var elem_1="O";
        var elem_2="X";//homme
    }
	
    for (var i=ordre;i<x;i++){
        if (i%2==0){// ordinateur
        
            if (i<3){// premier pas aleatoires fais par l'ordinateur
               var colon = random(nb_colonne-1);
               var lin = placeDansColonne(colon); 
               tab1[lin][colon] = elem_1;
               affichePlateauDeJeu(tab1);
            }
            else
            {
                var horis_mon = horizentaleOrdi(elem_1);
      			var vertical_mon = verticaleOrdi( elem_1);
     		 	var diagonal_mon = diagonaleOrdi(elem_1);   
   			    var horis_adversaire = horizentaleOrdi(elem_2);
 			    var vertical_adversaire = verticaleOrdi(elem_2);
   			    var diagonal_adversaire = diagonaleOrdi(elem_2);   
          		var res = solution(horis_mon, vertical_mon, diagonal_mon, 
	                        horis_adversaire, vertical_adversaire,diagonal_adversaire,elem_1);
                var colon = res[0];
                var ligne = placeDansColonne(colon);
                tab1[ligne][colon]=res[1];
                affichePlateauDeJeu(tab1);
                marqueDePas(ligne, colon, res[1]);
                if (res[2]==false)
                {
                   alert("Le jeu est terminer.\n Le gagnant est "+res[1]);
				   return false;
                   return res[1]; 
                }
            } 
        }
         //hmain
        else{   
			if(ordre==0) coup2(-1);
			else coup1(-1);
			
			if (Verticale(elem_1)==1 || Horizentale(elem_1)==1 || DiagonaleaDroite(elem_1)==1 
            || diagonaleGauche(elem_1)==1 || Verticale(elem_2)==1 || Horizentale(elem_2)==1 ||  DiagonaleaDroite(elem_2)==1|| diagonaleGauche(elem_2)==1){
				alert ("Bravo!! Vous avez gagné");
				return false;
			}	                         
        }         
    }
    alert("Match null, pas de gagnant!");
    return fin;
};
var nb_colonne, nb_ligne;
var jeton;var joueur;var jeton1="X";var jeton2="O";
//Demande des parametres du plateau
do{
    nb_colonne=+prompt("Combien de colonnes?\n(7-9)");
}while((nb_colonne<7)||(nb_colonne>9));
do{
    nb_ligne=+prompt("Combien de lignes?\n(6-9)");
}while((nb_ligne<6)||(nb_ligne>9));
var tab1=creeTableauVide (nb_ligne,nb_colonne);
// Choix du style du jeu.
do{
   var premier_joueur = prompt("Premier joueur: (h/o)?");
}while(!(premier_joueur=="h" || premier_joueur=="o"));
do{
   var deuxieme_joueur = prompt("Deuxieme joueur: (h/o)?");
}while(!(deuxieme_joueur=="h" || deuxieme_joueur=="o"));

if(premier_joueur=="o" && deuxieme_joueur=="o")    
    var winner = ordContrOrd();
if (premier_joueur=="o" && deuxieme_joueur=="h")
    var winner = OrdHumain(0);
if (premier_joueur=="h" && deuxieme_joueur=="o")
    var winner = OrdHumain(1);
if (premier_joueur=="h"&& deuxieme_joueur=="h")
HumainHumain(); 
