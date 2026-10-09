// canvas init
const canvasLeft = document.getElementById('canvas-left');
const contextLeft = canvasLeft.getContext('2d');

const canvasRight = document.getElementById('canvas-right');
const contextRight = canvasRight.getContext('2d');

// canvas size
function resizeCanvases() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const container = document.querySelector('.container');

    let containerWidth;

    if(container !== null)
    {
        containerWidth = container.offsetWidth;
    }else
    {
        containerWidth = 1240;
    }

    let sideWidth = (screenWidth - containerWidth) / 2;

    if (sideWidth < 0) {
        sideWidth = 0;
    }

    canvasLeft.width = sideWidth;
    canvasLeft.height = screenHeight;

    canvasRight.width = sideWidth;
    canvasRight.height = screenHeight;
}

resizeCanvases();
window.addEventListener('resize', resizeCanvases);

// class Particle
class Particle {
    canvas = null;
    context = null;
    x = 0;
    y = 0;
    size = 0;
    speedY = 0;
    alpha = 1;
    color = '';

    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.reset(true);
    }

    reset(isInitial = false) 
    {
        this.size = Math.random() * 3 + 2;
        this.x = Math.random() * this.canvas.width;

        if (isInitial) {
            this.y = Math.random() * this.canvas.height;
        } else {
            this.y = -this.size;
        }

        this.speedY = Math.random() * 2.5 + 1.5;
        this.alpha = Math.random() * 0.5 + 0.3;

        let temp_element = document.querySelector('.cry-wooman');

        if (temp_element) 
        {
            const computedStyle = window.getComputedStyle(temp_element); 
            let temp_color = computedStyle.backgroundColor;

            const rgb = temp_color.match(/\d+/g);

            if (rgb && rgb.length >= 3) {
                // console.log(rgb[0], rgb[1], rgb[2]);
                this.color = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${this.alpha})`;
            } else {
                this.color = `rgba(0, 55, 62, ${this.alpha})`;
            }
        } else {
            this.color = `rgba(0, 55, 62, ${this.alpha})`;
        }
    }

        

    update() {
        this.y += this.speedY;

        if (this.y > this.canvas.height + this.size) {
            this.reset(false);
        }
    }

    draw() {
        this.context.fillStyle = this.color;
        
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.context.fill();
    }
}

// create particles
const leftParticles = [];
const rightParticles = [];
const PARTICLE_COUNT = 40;

for (let i = 0; i < PARTICLE_COUNT; i++) {
    leftParticles.push(new Particle(canvasLeft, contextLeft));
    rightParticles.push(new Particle(canvasRight, contextRight));
}

// game loop
function animateParticles() {
    contextLeft.clearRect(0, 0, canvasLeft.width, canvasLeft.height);
    contextRight.clearRect(0, 0, canvasRight.width, canvasRight.height);

    for (let p of leftParticles) {
        p.update();
        p.draw();
    }

    for (let p of rightParticles) {
        p.update();
        p.draw();
    }

    requestAnimationFrame(animateParticles);
}

animateParticles();