//variaveisdaBolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 30

//velocidadedaBolinha
let velocidadexBolinha = 6
let velocidadeyBolinha = 6

//variaveisdaRaquete
let xRaquete = 5
let yRaquete = 150
let baseRaquete = 10
let alturaRaquete = 90

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostrarBolinha()
  velocidadeBolinha()
  colisaoBorda()
  mostraRaquete()
  movimentoRaquete()
}
  function mostraRaquete(){
  rect(xRaquete,yRaquete,baseRaquete,alturaRaquete)
 } 
 
 function movimentoRaquete(){
   if(KeyIsDown(UP_ARROW))
     yRaquete -= 10
   if(KeyIsDown(DOWN_ARROW))
     yRaquete+= 10
 }
 
  function mostrarBolinha(){
  circle(xBolinha,yBolinha,diametro)
    }
  
  function velocidadeBolinha(){
  xBolinha += velocidadexBolinha 
  yBolinha += velocidadeyBolinha
    }
  
  function colisaoBorda(){
    if(xBolinha + 15 > width || xBolinha - 15 < 0)
  velocidadexBolinha *= -1
  if(yBolinha + 15 > height || yBolinha - 15 < 0)
    velocidadeyBolinha *= -1
  }
  
  
