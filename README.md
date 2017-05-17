# Prova Trimestral (2a Chamada) - Frameworks CSS, JavaScript & jQuery

### Desenvolvimento de Aplicações Web 

João Eduardo Montandon

Setor de Informática - COLTEC/MG

**Valor: 15 pontos**

## Protótipo Bootstrap (6 pontos)

A página [globo.com](http://www.globo.com) é uma das páginas referências em design, experiência e navegação de usuário. Entre os recursos existentes voltados para experiência de usuário podemos destacar o uso de cores para classificação semântica das matérias noticiadas e o uso de layout responsivo para visualização em diferentes dispositivos.

Você deverá implementar -- utilizando Bootstrap -- um protótipo para um site de notícias do COLTEC. Assim como acontece na página da globo.com, as notícias são classificadas em três categorias principais: Acadêmica, Administrativa, Eventos. Ainda, as notícias de cada categoria deverão ser identificadas por meio de uma cor referente a categoria. 

Do ponto de vista do layout, sua página deverá conter um aspecto similar ao da primeira seção da página para os três layouts (conforme pode ser visto nas figuras em anexo). Utilize o layout de colunas do Bootstrap para a prototipação da página.

## Campo Minado

Uma das grandes vantagens ao utilizar JavaScript para desenvolvimento de páginas web está presente na capacidade de prover recursos animados ao navegador. Essa funcionalidade enriquece consideravelmente a experiência de usuário que acessa tais páginas. 

Entre as novas modalidades de páginas web que surgiram com o advento do JavaScript, podemos destacar principalmente as páginas voltadas para jogos eletrônicos.

Você deverá implementar nessa questão uma página para que as pessoas possam jogar campo minado. A lógica do jogo, baseada em JavaScript, já está implementada. Portanto, sua tarefa é desenvolver o protótipo da página e a integração entre protótipo e lógica.

### Protótipo da Página (3 pontos)

Implemente o protótipo em HTML e CSS que será utilizado como interface para o jogo de campo minado. É importante ressaltar que, por ser justamente um protótipo, não é necessário desenvolver nada utilizando JavaScript (isso será utilizado posteriormente na integração).

O protótipo da página deverá conter com algumas restrições obrigatórias:

* Uma Seção com Título da página
* Tabuleiro do campo minado centralizado na tela
* Um "placar" informando a quantidade de blocos restantes

*Dica: Você pode adaptar a estrutura do jogo da memória.*

### Integração Interface e Lógica (6 pontos)

Nessa etapa, você deverá integrar a lógica e protótipos desenvolvidos anteriormente. Para isso será necessário fazer a manipulação do DOM de forma a integrar eventos da página com a lógica do game. Portanto, recomendo o uso de jQuery nessa etapa (**não é obrigatório**). 

A integração deve contar, obrigatoriamente com algumas restrições:

* A interação do usuário será feita através de eventos de click nas posições do tabuleiro do jogo
* O placar deverá ser atualizado após cada jogada.
