class Espaco{

statusjogo;
pontos;
coluna;
linha;
teclas;

constructor(coluna, linha){
	//Constroi o espaço que aparece na tela para exibir os outros elementos do jogo.
}

IniciarJogo(){
	//Inicia o jogo exibindo os inimigos, a nave e as informações na tela.
}

FinalizarJogo(){
	//Quando o jogador perde o jogo traz a tela de game over para o centro.	
}

DesenharEspaco(){
	//Desenha o cenário onde o jogo ocorrerá.
}

GanharPontos(){
	//Recebe os pontos ao derrotar os inimigos.
	return pontos;
}

CalcularPontos(){
	//Soma os pontos que recebeu a derrotar os inimigos com os que já tinham anteriormente.
	return pontos;
}

ExibirPontos(){
	//Exibe os pontos calculados.
	return pontos;
}
}

class Inimigos{
	
velocidade;
formato;
cor;
posX;
posY;
colisao;	

MovimentarInimigos(){
	//Faz a parte da movimentação dos inimigos, tanto horizontal como vertical.
	return velocidade;
	return posX;
	return posY;
}

AtacarNave(){
	//Essa função faz com que os inimigos atirem em direção a nave do jogador aleatóriamente.
}

MudarFormato(){
	//Sempre que o inimigo se movimenta essa função muda seu formato.
}

DesenharInimigos(){
	//Essa função desenha os inimigos no espaço.
}

AlterarVelocidade(){
	return velocidade;
	return posY;
	//Essa função altera a velocidade dos inimigos de acordo com a posição em Y deles, quanto mais baixo o bloco de inimigos está maior será a velocidade.
}

VerificarColisaoInimigos(){
	return posX;
	return posY;
	return colisao;
	//Verifica se o inimigo irá colidir com o jogador ou disparo.
}

ReiniciarInimigos(){
	//Sempre que todos os inimigos forem derrotados, eles reaparecerão na tela novamente em sua posição inicial.
}
}

class Nave{
	
	vidas;
	formato;
	cor;
	posX;
	posY;
	colisao;
	
AtacarInimigos(){
	//Tem a função de disparar na direção dos inimigos quando o comando desta ação feito pelo jogador é emitido.
}

MovimentarNave(){
	return posX;
	//Tem a função de movimentar a nave do jogador na horizontal.
}

GanharVidas(){
	return vidas;
	//Sempre que o jogador derrotar todos os inimigos na tela ele ganhará uma vida adicional.
}

DestruirNave(){
	//Quando o jogador é atingido por um disparo inimigo ele se destroi, ficando imóvel por um tempo e tendo seu formato modificado por esse tempo.
}

DesenharNave(){
	//No inicio do jogo desenha a nave na posição inicial dela.
}

ControlarNave(){
	//Faz com que o jogador consiga controlar a nave.
}

VerificarColisaoNave(){
	return posX;
	return posY;
	return colisao;
	//Verifica se a nave irá colidir com os inimigos ou com algum disparo.
}
}

class Projeteis{
	
	direcao;
	colisao;
	posX;
	posY;
	formato;
	
VerificarColisaoProjeteis(){
	return posX;
	return posY;
	return colisao;
	//Verifica se algum projetil irá colidir com os inimigos ou com a nave.
}

DefinirFormato(){
	//Define o formato de uma forma quando a nave dispara e de outras formas quando os inimigos disparam.
}

DefinirDirecao(){
	return direcao
	//Define a direção que o projeto segue dependendo se ele foi lançado pela nave ou pelos inimigos.
}
}

class Barreira{
	
	estado;
	formato;
	posX;
	posY;
	
BarreirasDanificadas(){
	return estado;
	//Tem a função de diminuir o estado da barreira deixando a mais danificada.
}
DesenharBarreiras(){
	//Ao iniciar o jogo desenha as barreiras no espaço.
}

BarreirasDestruidas(){
	return estado;
	//Remove totalmente a barreira do cenário quando estado for igual a zero.
}
}