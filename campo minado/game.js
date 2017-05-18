var estado=false;
var mina;
var minamarcada = [];
var posx, posy;
var campominado;
var str;


for(var c=1;c<=16;c++){
            minamarcada[c] = null;
}

function comecar(){
    estado = true; 
    campominado = new CampoMinado();
    //alert("oi");
    document.getElementById("start").innerHTML=("Clique nas minas:");
}
function recomecar(){
     for(var i=0;i<=15;i++){
             str = i.toString();
             //alert(str);
             document.getElementById(str).innerHTML=("-"); //volta a tabela para o inicio
     }
     document.getElementById("start").innerHTML=("  ");
     document.getElementById("vencedor").innerHTML=("  ");
     document.getElementById("j1").innerHTML=("  ");
}

$(document).ready(function($) {
    $("td").click(function(){ //quando clicar no td da tabela
        if(estado){ //ja clicou para comecar
            mina = event.target.id; //pega o id do td
           
            //PEGA AS POSICOES 
            if(mina>=0 && mina<=3){ //linha 1
                posx = 0;
                posy = mina;
            }

            else if(mina>=4 && mina<=7){ //linha 2
                posx = 1;
                posy = mina-4;
            }

            else if(mina>=8 && mina<=11){ //linha 3
                posx = 2;
                posy = mina-8;
            }

            else if(mina>=12 && mina<=15){ //linha 3
                posx = 3;
                posy = mina-12;
            }

            console.log(posx);

            console.log(posy);

            //joga bacana
            campominado.cellClicked(posx,posy);

            //para mudar o campo na aparencia ao clicar
                if(campominado.checkCell(posx,posy)==-1){
                    $(this).text("Bomb"); // é bomba, muda texto

                } else{

                    $(this).text(campominado.checkCell(posx,posy)); //coloca o numero de minas ao redor
                }




        }


    });
});


/**
 * Construtor do campo minado
 */
var CampoMinado = function() {
	this.init();
}

/**
 * Inicializa o campo minado
 */
CampoMinado.prototype.init = function() {
    this.isDead = false;
	this.isWinner = false;
	this.safeMax = 12;
	this.safeCount = 0;

    this.mineField = [
        ["-", "-", "-", "-"],
        ["-", "-", "-", "-"],
        ["-", "-", "-", "-"],
        ["-", "-", "-", "-"]
    ];

    // inicializa as minas
    for(var i = 0; i < 4; i++) {
        var x = parseInt(Math.random() * 4);
        var y = parseInt(Math.random() * 4);

        if(this.mineField[x][y] != -1) 
            this.mineField[x][y] = -1;
        else
            i--;
    }
}


/**
 * Verifica a célula do campo minado, retornando a quantidade
 * de minas ao redor daquela célula
 * 
 * @param x posição x do tabuleiro
 * @param y posição y do tabuleiro
 * 
 * @return o valor de mina ao redor da célula ou -1
 * caso seja uma mina
 */
CampoMinado.prototype.checkCell = function(x, y) {
    
    var mines = 0;

    // se for mina, retorna seu valor propriamente dito
    if(this.mineField[x][y] == -1)
        return this.mineField[x][y];

    // verifica a quantidade de minas que existe ao redor de (x, y)
    if(x < 3 && this.mineField[x + 1][y] == -1) mines++;
    if(x > 0 && this.mineField[x - 1][y] == -1) mines++;
    if(y < 3 && this.mineField[x][y + 1] == -1) mines++;
    if(y > 0 && this.mineField[x][y - 1] == -1) mines++;
    if(x < 3 && y < 3 && this.mineField[x + 1][y + 1] == -1) mines++;
    if(x < 3 && y > 0 && this.mineField[x + 1][y - 1] == -1) mines++;
    if(x > 0 && y < 3 && this.mineField[x - 1][y + 1] == -1) mines++;
    if(x > 0 && y > 0 && this.mineField[x - 1][y - 1] == -1) mines++;

    return mines;
}

/**
 * Evento que é dispardo quando uma célula é selecionada.
 * 
 * @param {x, y} coordenadas da célula selecionada
 */
CampoMinado.prototype.cellClicked = function(x, y) {

    // ignora a jogada pois foi em um bloco já virado
    if(this.mineField[x][y] != "-" && this.mineField[x][y] != -1)
        return;

    // atualiza a matriz do tabuleiro
    this.mineField[x][y] = this.checkCell(x, y);

    // TODO: Atualizar tabuleiro na interface gráfica
    this.atualizaTabuleiro();

    // se nao tiver pisado em mina
    if(this.mineField[x][y] != -1) {
        this.safeCount++;

        if(this.safeCount == this.safeMax) {
            this.isWinner = true;
            //this.setMessage("Parabéns, vc ganhou!!");
            document.getElementById("vencedor").innerHTML=(" Você ganhou! ");
        } else {
            document.getElementById("j1").innerHTML=("Faltam " + (this.safeMax - this.safeCount) + " minas");
            //this.setMessage();
        }
    } else {
        this.isDead = false;
        //this.setMessage("MORREU!!!");
        document.getElementById("vencedor").innerHTML=(" Morreu!!!");
        estado = false; //jogo acabou
       

    }
}



/**
 * Atualiza tabuleiro imprimindo-o para usuário
 */
CampoMinado.prototype.atualizaTabuleiro = function() {
    for(var i = 0; i < 4; i++) {
        var line = "";
        for (var j = 0; j < 4; j++) {
            var cell = '-';
            if(this.mineField[i][j] != -1)
                cell = this.mineField[i][j];

            line += cell + " ";           
        }
      //  console.log(line);
    }

    //parte grafica
    /*for(i=1;i<=16;i++){
         document.getElementById(i).innerHTML=("-"); //volta a tabela para o inicio
         document.getElementById("start").innerHTML=("");
         document.getElementById("vencedor").innerHTML=("");
    }*/
}

/**
 * Imprime uma mensagem na tela
 * 
 * @param msg mensagem a ser impressa
 */
CampoMinado.prototype.setMessage = function(msg) {
    // TODO: Trocar para mostrar mensagem na página
    console.log(msg);
}

var cm = new CampoMinado();