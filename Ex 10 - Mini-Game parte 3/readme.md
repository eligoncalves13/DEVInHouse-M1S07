# Ex 10 - Mini-Game parte 3

Para finalizar nosso jogo, devemos otimizar sua lógica e estilos.

Quando uma DIV é molhada 5 vezes seguidas sem ter ficado marrom, ela fica amarela e uma nova planta surge à sua direita, cada uma com a sua própria barra de progresso.

uma DIV que já ficou amarela, tem uma nova regra:

**- <30% marrom
\- entre >31% & <70% verde
\- > 71% amarela**

Substitua a div e seus estados, pelas imagens disponibilizadas para representar, de acordo com as cores respectivamente: Marrom = planta morrendo, verde = planta normal, amarelo = planta florida

Por fim, devemos ter uma secção para mostrar a pontuação.
cada ação de molhar a planta dá 50 pontos, a ação de florescer dá 500 pontos, uma planta marrom faz com que se perca 100 pontos a cada segundo sem molha-lá

Fica a vontade para modificar e criar novas regras e estilos. recomendo a utilização de classes.