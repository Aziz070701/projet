var a;
var b;
var c;
var p;
  document.querySelector("#pmj").value = 100;
  document.querySelector("#pmo").value = 0;
  var i =0 ;
 var tab=['roue/0.png','roue/1.png','roue/2.png','roue/3.png',
 'roue/4.png','roue/5.png','roue/6.png','roue/7.png',
 'roue/8.png','roue/9.png','roue/10.png','roue/11.png',
 'roue/12.png','roue/13.png','roue/14.png','roue/15.png',
 'roue/16.png','roue/17.png','roue/18.png','roue/19.png',
 'roue/20.png','roue/21.png', 'roue/22.png','roue/23.png',
 'roue/24.png','roue/25.png','roue/26.png','roue/27.png',
 'roue/28.png','roue/29.png','roue/30.png','roue/31.png',
 'roue/32.png','roue/33.png','roue/34.png','roue/35.png',
 'roue/36.png'];
 function nb_aleatoire()    
{
    var nombreroulette=Math.random();
    return Math.floor(nombreroulette*36);
}  
  var nombreroulette = nb_aleatoire(nombreroulette) ;   
function go() {
     a = setTimeout("diapo()",100);
     document.querySelector("#stop").disabled=false;
     document.querySelector("#go").disabled=true;
}
function stop() {
    clearTimeout(a);
    document.getElementById("i3").src=tab[nombreroulette];
    c = setTimeout("roulette()",750);
    document.querySelector("#stop").disabled=true;
    document.querySelector("#go").disabled=false;
}
  function diapo()
{       
    document.getElementById("i3").src='roue/casino-roulette.gif'; 
   
}
function roulette()
{
    var b = document.querySelector("#pmj").value ;
    var p = document.querySelector("#pmo").value ;
    var a = document.querySelector(".pari:checked").value;
    var d = document.querySelector("#number").value ;
    if(1*d>1*b)
    {
        d=b;
        alert("Mise supérieure à la valeur du porte monnaie, la mise sera donc maximale !")
    }
    if (a==0)
    {
        alert("Mise perdue");
        b=1*b-1*d;
        p=1*p+1*d;
        document.querySelector("#pmj").value = b ;
        document.querySelector("#pmo").value = p ;
    }
    else if (a==nombreroulette)
    {
        alert("Vous avez gagné "+35*d+" mille francs !");
        b=1*b+36*d;
        document.querySelector("#pmj").value = b ;
       
    }
    
    else if ((a=="pair" && nombreroulette%2==0 ) || (a=="impair" && nombreroulette%2==1)) 
    {
        alert("Vous avez gagné "+2*d+" mille francs !");
        b=1*b+1*d; 
        document.querySelector("#pmj").value = b ;
       
    }
    else
    {
        alert("Mise perdue");
        b=1*b-1*d;
        p=1*p+1*d;
        document.querySelector("#pmj").value = b ;
        document.querySelector("#pmo").value = p ;
        
    }
    
    if(b==0)
        {
            alert("Echec cuisant ! rejouer .");
           
            document.querySelector("#number").value=0;
            document.querySelector("#pmj").value = 100;
        }
        nombreroulette = nb_aleatoire(nombreroulette)
}