

var estado=false;
function comecar(){
	estado = true;
	nome1 = $("input[name=j1name]").val();
	nome2= $("input[name=j2name]").val();
	document.getElementById("j1").innerHTML=(nome1+" "+placarj1);
	document.getElementById("j2").innerHTML=(nome2+" "+placarj1);
}

$(document).ready(function($) {
	$("td").click(function(){ //quando clicar no td da tabela
		if(estado){
			casa = event.target.id; //pega o id do td
	    	

			if(!jogadorDaVez){ //jogador 1
				document.getElementById("player").innerHTML=("Clique "+nome1);
				if(jogo[casa]==null){ //nao foi marcado 
					$(this).text("x"); //muda o numero para marcacao x
					jogo[casa] = "x"; 
					i++;
				}
			}
			else{ //jogador 2
				document.getElementById("player").innerHTML=("Clique "+nome2);
				if(jogo[casa]==null){
					$(this).text("o"); //muda o numero para marcacao o
					jogo[casa] = "o"; 
					i++;
				}
			}

			jogadorDaVez = !jogadorDaVez;
			console.log(i);

			if(confereSeGanhou(jogo)==1){
				//document.getElementById("vencedor").innerHTML("Ganhou jogador 1!");
				document.getElementById("vencedor").innerHTML=(nome1+" ganhou ");
				placarj1++;
				document.getElementById("j1").innerHTML=(nome1+" "+placarj1);
			}
			else if(confereSeGanhou(jogo)==2){
				//document.getElementById("vencedor").innerHTML("Ganhou jogador 2!");
				document.getElementById("vencedor").innerHTML=(nome2 + " ganhou ");
				placarj2++;
				document.getElementById("j2").innerHTML=(nome2+" "+placarj2);
			}
			if(i==9){//tudo preenchido deu velha 
				document.getElementById("vencedor").innerHTML=("Deu velhaaaa!");
				
			}
		}

	});	

});