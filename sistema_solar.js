let animationRunning = true;
let showTrails = true;
let angle = 0;
let speed = 0.02;

// Configuração dos planetas
let planets = [
    { name: "Mercúrio", distance: 80, size: 8, speed: 0.03, color: [169, 169, 169], trail: [] },
    { name: "Vênus", distance: 120, size: 12, speed: 0.025, color: [255, 215, 0], trail: [] },
    { name: "Terra", distance: 160, size: 14, speed: 0.02, color: [0, 150, 255], trail: [] },
    { name: "Marte", distance: 200, size: 10, speed: 0.015, color: [255, 69, 0], trail: [] },
    { name: "Júpiter", distance: 280, size: 20, speed: 0.01, color: [255, 165, 0], trail: [] },
    { name: "Saturno", distance: 360, size: 18, speed: 0.008, color: [255, 215, 0], trail: [] }
];

function setup() {
    let canvas = createCanvas(800, 600);
    canvas.parent('canvas-container');
    background(0);
    
    // Configura o modo de ângulo para radianos
    angleMode(RADIANS);
}

// Função principal de desenho (loop de animação)
function draw() {
    if (showTrails) {
        background(0, 0, 0, 25);
    } else {
        background(0);
    }
    
    // Move o ponto de origem para o centro do canvas
    translate(width / 2, height / 2);
    
    // Desenha a estrela central (Sol)
    drawSun();
    
    // Desenha as órbitas
    drawOrbits();
    
    // Atualiza e desenha os planetas
    updateAndDrawPlanets();
    
    // Desenha as trilhas dos planetas
    if (showTrails) {
        drawPlanetTrails();
    }
    
    drawInfo();
}

// Função para desenhar o Sol
function drawSun() {
    push();
    
    // Gradiente do Sol
    for (let i = 0; i < 3; i++) {
        fill(255, 255, 0, 100 - i * 30);
        noStroke();
        ellipse(0, 0, 60 - i * 10, 60 - i * 10);
    }
    
    // Núcleo do Sol
    fill(255, 255, 0);
    noStroke();
    ellipse(0, 0, 40, 40);
    
    // Efeito de brilho
    fill(255, 255, 255, 50);
    ellipse(-10, -10, 10, 10);
    
    pop();
}

// Função para desenhar as órbitas
function drawOrbits() {
    push();
    stroke(255, 255, 255, 30);
    strokeWeight(1);
    noFill();
    
    for (let planet of planets) {
        ellipse(0, 0, planet.distance * 2, planet.distance * 2);
    }
    
    pop();
}

// Função para atualizar e desenhar os planetas
function updateAndDrawPlanets() {
    if (!animationRunning) return;
    
    for (let i = 0; i < planets.length; i++) {
        let planet = planets[i];
        
        // Calcula a posição do planeta
        let x = cos(angle * planet.speed) * planet.distance;
        let y = sin(angle * planet.speed) * planet.distance;
        
        // Adiciona posição à trilha
        if (showTrails) {
            planet.trail.push({ x: x, y: y });
            if (planet.trail.length > 50) {
                planet.trail.shift();
            }
        }
        
        // Desenha o planeta
        drawPlanet(x, y, planet);
    }
    
    // Incrementa o ângulo para animação
    angle += speed;
}

// Função para desenhar um planeta individual
function drawPlanet(x, y, planet) {
    push();
    
    // Move para a posição do planeta
    translate(x, y);
    
    // Desenha o planeta
    fill(planet.color[0], planet.color[1], planet.color[2]);
    noStroke();
    ellipse(0, 0, planet.size, planet.size);
    fill(255, 255, 255, 100);
    ellipse(-planet.size/4, -planet.size/4, planet.size/3, planet.size/3);
    
    // Desenha o nome do planeta
    fill(255);
    textAlign(CENTER);
    textSize(10);
    text(planet.name, 0, planet.size + 15);
    
    pop();
}

// Função para desenhar as trilhas dos planetas
function drawPlanetTrails() {
    for (let planet of planets) {
        if (planet.trail.length > 1) {
            push();
            stroke(planet.color[0], planet.color[1], planet.color[2], 100);
            strokeWeight(2);
            noFill();
            
            beginShape();
            for (let i = 0; i < planet.trail.length; i++) {
                let pos = planet.trail[i];
                let alpha = map(i, 0, planet.trail.length, 0, 255);
                stroke(planet.color[0], planet.color[1], planet.color[2], alpha);
                vertex(pos.x, pos.y);
            }
            endShape();
            
            pop();
        }
    }
}

// Função para desenhar informações na tela
function drawInfo() {
    push();
    
    // Volta ao sistema de coordenadas original
    translate(-width/2, -height/2);
    
    // Informações de controle
    fill(255);
    textAlign(LEFT);
    textSize(14);
    text("Velocidade: " + (speed * 100).toFixed(1), 10, 30);
    text("Status: " + (animationRunning ? "Executando" : "Pausado"), 10, 50);
    text("Trilhas: " + (showTrails ? "Ativadas" : "Desativadas"), 10, 70);
    
    textSize(12);
    text("Use os botões para controlar a simulação", 10, height - 40);
    
    pop();
}

// Função para pausar/continuar a animação
function toggleAnimation() {
    animationRunning = !animationRunning;
}

// Função para reiniciar a simulação
function resetSimulation() {
    angle = 0;
    for (let planet of planets) {
        planet.trail = [];
    }
    animationRunning = true;
}

// Função para mostrar/ocultar trilhas
function toggleTrails() {
    showTrails = !showTrails;
    if (!showTrails) {
        for (let planet of planets) {
            planet.trail = [];
        }
    }
}

// Função para ajustar velocidade com o mouse
function mouseDragged() {
    if (mouseY > 0 && mouseY < height) {
        speed = map(mouseY, 0, height, 0.05, 0.001);
        speed = constrain(speed, 0.001, 0.05);
    }
}

function windowResized() {
    resizeCanvas(800, 600);
    background(0);
}

