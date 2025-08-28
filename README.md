# 🌌 Simulação do Sistema Solar - p5.js

## 📋 Descrição do Projeto

Este projeto implementa uma simulação interativa do sistema solar usando a biblioteca p5.js. A simulação demonstra como corpos celestes orbitam ao redor de uma estrela central, criando uma representação visual e educativa da mecânica orbital.

## 🎯 Motivação da Animação

### Contexto
A simulação foi inspirada na necessidade de criar uma ferramenta educativa que demonstre visualmente os conceitos básicos da mecânica orbital. O sistema solar é um exemplo perfeito para isso, pois:

- **Familiaridade**: Todos conhecem o conceito de planetas orbitando o Sol
- **Complexidade Apropriada**: Permite demonstrar diferentes velocidades orbitais
- **Visualmente Atraente**: A combinação de cores e movimento cria uma experiência envolvente
- **Educativo**: Ajuda a compreender conceitos como período orbital e distância

### Situações Selecionadas para a Animação

1. **Órbitas Circulares**: Representa a simplificação das órbitas reais para fins educativos
2. **Velocidades Diferentes**: Cada planeta tem uma velocidade orbital única, simulando a terceira lei de Kepler
3. **Trilhas Visuais**: Mostra o caminho percorrido pelos planetas, facilitando a compreensão do movimento
4. **Interatividade**: Permite ao usuário controlar a simulação, pausando, reiniciando e ajustando parâmetros

## 🛠️ Recursos da p5.js Utilizados

### Funções de Configuração
- **`setup()`**: Configuração inicial do canvas, definindo tamanho e configurações básicas
- **`createCanvas()`**: Cria o elemento canvas onde a animação será renderizada
- **`angleMode(RADIANS)`**: Define o sistema de ângulos para usar radianos

### Funções de Desenho (Loop Principal)
- **`draw()`**: Função principal que executa continuamente, criando a animação
- **`background()`**: Define a cor de fundo do canvas
- **`translate()`**: Move o sistema de coordenadas para o centro do canvas

### Primitivas Gráficas
- **`ellipse()`**: Desenha os planetas, o Sol e as órbitas
- **`line()`**: Cria as trilhas dos planetas
- **`beginShape()`/`endShape()`**: Desenha formas complexas para as trilhas
- **`vertex()`**: Define pontos para criar formas personalizadas

### Transformações e Posicionamento
- **`push()`/`pop()`**: Salva e restaura o estado de transformação
- **`translate()`**: Move objetos para posições específicas
- **`rotate()`**: Rotaciona objetos (usado implicitamente através de trigonometria)

### Cores e Estilo
- **`fill()`**: Define a cor de preenchimento dos objetos
- **`stroke()`**: Define a cor do contorno
- **`strokeWeight()`**: Define a espessura das linhas
- **`noStroke()`**: Remove o contorno dos objetos
- **`color()`**: Cria cores específicas para cada planeta

### Texto e Interface
- **`text()`**: Exibe informações na tela
- **`textAlign()`**: Alinha o texto
- **`textSize()`**: Define o tamanho do texto

### Matemática e Trigonometria
- **`cos()`/`sin()`**: Calcula posições orbitais
- **`map()`**: Mapeia valores entre intervalos
- **`constrain()`**: Limita valores dentro de um intervalo

### Interatividade
- **`mouseDragged()`**: Detecta arrastar do mouse para controlar velocidade
- **`windowResized()`**: Responde a mudanças no tamanho da janela

## 🚀 Como Executar

1. **Abra o arquivo `index.html`** em um navegador web moderno
2. **A simulação iniciará automaticamente** mostrando os planetas orbitando
3. **Use os botões de controle** para:
   - Pausar/Continuar a animação
   - Reiniciar a simulação
   - Mostrar/Ocultar trilhas dos planetas
4. **Arraste o mouse** verticalmente para ajustar a velocidade da simulação

## 🎮 Controles

- **Pausar/Continuar**: Para ou retoma a animação
- **Reiniciar**: Volta todos os planetas para suas posições iniciais
- **Mostrar/Ocultar Trilhas**: Ativa/desativa as trilhas visuais dos planetas
- **Mouse**: Arraste verticalmente para controlar a velocidade

## 📊 Características dos Planetas

| Planeta | Distância | Tamanho | Velocidade | Cor |
|---------|-----------|---------|------------|-----|
| Mercúrio | 80px | 8px | 0.03 | Cinza |
| Vênus | 120px | 12px | 0.025 | Dourado |
| Terra | 160px | 14px | 0.02 | Azul |
| Marte | 200px | 10px | 0.015 | Vermelho |
| Júpiter | 280px | 20px | 0.01 | Laranja |
| Saturno | 360px | 18px | 0.008 | Dourado |

## 🎨 Recursos Visuais

- **Gradiente do Sol**: Múltiplas camadas criam efeito de brilho
- **Trilhas Fade**: As trilhas dos planetas desvanecem gradualmente
- **Brilho nos Planetas**: Efeito de luz para dar profundidade
- **Fundo Espacial**: Gradiente escuro que simula o espaço
- **Interface Moderna**: Design responsivo com controles intuitivos

## 📚 Aplicações Educativas

Esta simulação pode ser utilizada para:

- **Ensino de Física**: Demonstração de movimento circular
- **Astronomia Básica**: Introdução ao sistema solar
- **Programação**: Exemplo de animação com JavaScript
- **Matemática**: Aplicação prática de trigonometria
- **Design Interativo**: Demonstração de interface responsiva

## 🔧 Personalização

O código está estruturado de forma modular, permitindo fácil personalização:

- Adicionar novos planetas no array `planets`
- Modificar cores e tamanhos
- Ajustar velocidades orbitais
- Implementar novas funcionalidades interativas

## 📄 Arquivos do Projeto

- `index.html`: Arquivo principal com interface HTML
- `sistema_solar.js`: Código JavaScript da simulação
- `README.md`: Esta documentação

## 🎓 Conclusão

Esta simulação demonstra efetivamente o uso da biblioteca p5.js para criar animações interativas e educativas. Através da combinação de primitivas gráficas, transformações matemáticas e interatividade, foi possível criar uma ferramenta visual que facilita a compreensão de conceitos astronômicos básicos.
