/**
 * Created by sstienface on 03/12/2018.
 */

/*Consignes :

    - Vous allez créer un jeu de la taupe en jQuery.
- Le jeu commence lorque l'utilisateur clique sur le bouton start
- La fonction demarrant le jeu s'appellera startGame()
- Le joueur aura 10 secondes par partie
- tant que le temps n'est pas écoulé, votre programme selectionnera un trou au hasard
- une taupe doit apparaitre dans le trou selectionné, vous ajouterez la classe "up" en utilisant la méthode jquery approprié
à l'élément ayant pour classe "hole" selectionné.
- La taupe doit apparaitre durant un intervale de temps compris entre 200 millisecondes et 1 seconde ( vous générerez cette
valeur aléatoirement )
- A chaque fois qu'une taupe est clickée par l'utilisateur, vous augmenterez le score de celui ci de 1 point, vous ferrez
disparaitre la taupe en retirant la classe "up" à l'élément approprié ( vous utiliserez la méthode jquery appropriée pour
faire cela )

*/


const holes =$(".hole"); // utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "hole";
const scoreBoard =$(".score");//utiliser la méthode jquery appropriée pour selectionner l'élément ayant pour classe "score";
const moles =$(".mole"); // utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "mole";
var seconde = 0;
var startbol = 0;
var molebol =0;
var score =0;
var aleaTime = Math.random(200,1000);



function taupeUp(index){

     setTimeout(function () {
        $(".hole"+index).addClass('up');
    },aleaTime);
}


function taupeDown(index) {

    moles.click(function () {
        $(".hole"+index).removeClass('up');

    });
    setTimeout(function () {
        $(".hole"+index).removeClass('up');
    },1000);
    molebol =0;

}



function scorebut(){
    moles.click(function () {
        score++;
        $('.score').html(score)
    });


}
scorebut();
function startGame(){

    seconde++;
    var aleaTrou = Math.random()*6;
    aleaTrou = Math.ceil(aleaTrou);

    if(molebol==0){
        molebol++;
    taupeUp(aleaTrou);
}
    taupeDown(aleaTrou);
    var tempo =setTimeout(startGame,1000);
    if(seconde> 10){
        startbol =0;
        $(".game").fadeOut(2000);
        clearTimeout(tempo);
    }
}


$("#startGame").click(function () {
    $('.game').show();

    score=0;
    seconde=0;
    $('.score').html(0);
    if(startbol ==0){
        startbol++;
        startGame();
    }




});