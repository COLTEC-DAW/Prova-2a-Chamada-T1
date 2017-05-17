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
        safeCount++;

        if(safeCount == safeMax) {
            this.isWinner = true;
            this.setMessage("Parabéns, vc ganhou!!");
        } else {
            this.setMessage("Faltam " + (safeMax - safeCount) + " minas");
        }
    } else {
        this.isDead = false;
        this.setMessage("MORREU!!!");
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
        console.log(line);
    }
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