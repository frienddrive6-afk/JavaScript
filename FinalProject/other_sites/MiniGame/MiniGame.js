const player = document.getElementById('player');

const upBtn = document.getElementById('jostik-up');
const downBtn = document.getElementById('jostik-down');
const leftBtn = document.getElementById('jostik-left');
const rightBtn = document.getElementById('jostik-rigth');

let playerX = 0;
let playerY = 0;

const playerSize = 50; 
const speed = 5;       
let timer = null;      

function move(dx, dy) {
    const maxX = window.innerWidth - playerSize;
    playerX = Math.max(0, Math.min(playerX + dx, maxX));

    const maxY = window.innerHeight - playerSize;
    playerY = Math.max(0, Math.min(playerY + dy, maxY));

    console.log(playerX, playerY);

    player.style.left = `${playerX}px`;
    player.style.top = `${playerY}px`;
}

function setupButton(button, dx, dy) {
    button.addEventListener('pointerdown', (e) => {
        e.preventDefault(); 
        
        move(dx, dy); 
        
        clearInterval(timer);
        timer = setInterval(() => {
            move(dx, dy);
        }, 16);
    });

    const stopMoving = () => clearInterval(timer);
    button.addEventListener('pointerup', stopMoving);
    button.addEventListener('pointerleave', stopMoving);
}

setupButton(upBtn, 0, -speed);
setupButton(downBtn, 0, speed);
setupButton(leftBtn, -speed, 0);
setupButton(rightBtn, speed, 0);