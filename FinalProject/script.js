// плавный скрол
let headerLinks = document.querySelectorAll('.header-element a');
let header = document.querySelector('header');

for (let i = 0; i < headerLinks.length; i++) {
    headerLinks[i].addEventListener('click', function (e) {
        let targetId = this.getAttribute('href');

        if (targetId.startsWith('#') && targetId.length > 1) {
            e.preventDefault();

            let targetSection = document.querySelector(targetId);

            if (targetSection) {
                let targetPosition = targetSection.offsetTop - header.offsetHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
}
//=======================================================
//end
//=======================================================


// кнопка смены цветов в ввлоке about
let cryWoman = document.querySelector('.cry-wooman');
let aboutButton = document.querySelector('.about-element button');

let colors = [
    '#00373E', // темно-зеленый
    '#EEBF22', // Желтый
    '#4DCABA', // Мятный/зеленый
    '#F39BAA', // Розовый
    '#8A2BE2', // Фиолетовый
    '#FF6B6B', // Коралловый
    '#2EC4B6', // Бирюзовый
    '#FF9F1C', // Оранжевый
    '#3A86FF', // Синий
    '#8338EC'  // Пурпурный
];

let currentColorIndex = 0;

cryWoman.addEventListener('click', function () {

    // console.log(colors.length);
    // console.log((currentColorIndex + 1));
    // console.log(colors.length % colors.length);
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    

    let newColor = colors[currentColorIndex];

    cryWoman.style.backgroundColor = newColor;
    aboutButton.style.backgroundColor = newColor;
});

//=======================================================
//end    
//=======================================================

// кнопка открытие диалога для заполнения профиля
const dialog = document.getElementById('customPrompt');
const openBtn = document.getElementById('openBtn');

openBtn.addEventListener('click', () => {
    dialog.showModal(); 
});

dialog.addEventListener('close', () => {
    if (dialog.returnValue !== 'cancel') {
        const name = document.getElementById('username').value;
        const age = document.getElementById('age').value;
        const color = document.getElementById('favColor').value;
        
        console.log(`${name},${age},${color}`);
    }
});

//-------
dialog.addEventListener('click', (event) => {
    const dialogDimensions = dialog.getBoundingClientRect();
    // console.log(dialogDimensions);
    
    const clickedOutside = 
        event.clientX < dialogDimensions.left ||
        event.clientX > dialogDimensions.right ||
        event.clientY < dialogDimensions.top ||
        event.clientY > dialogDimensions.bottom;

    if (clickedOutside === true) {
        dialog.close('cancel'); 
    }
});
//=======================================================
//end
//=======================================================



// Анимация hero фона
const curtain = document.querySelector('.hero-curtain');

function runCurtainAnimation() {
    setTimeout(() => {curtain.style.transform = 'translateX(0%)';}, 7000);

    setTimeout(() => {curtain.style.transform = 'translateX(115%)';}, 17000); 
}
runCurtainAnimation();

setInterval(runCurtainAnimation, 15000);
//=======================================================
//end
//=======================================================




// добавление карточки в ресурсы
const addCardBtn = document.getElementById("resources-add-card-btn");
const createCardDialog = document.getElementById("createCard");
const addCardSubmitbtn = document.getElementById("btn-submit");
const resourcesList = document.querySelector(".resources-bottom-element ul");


addCardBtn.addEventListener('click', () => 
{
    createCardDialog.showModal();
});



addCardSubmitbtn.addEventListener('click', () =>
{
    const titleInput = document.getElementById("input-title");
    const textInput = document.getElementById("input-text");
    const btnColorInput = document.getElementById("input-btn-color");


    const title = titleInput.value;
    const text = textInput.value;
    const btnColor = btnColorInput.value;
    // console.log(title, text, btnColor);

    if(title.length === 0 || text.length === 0)
    {
        alert("Заполните все поля!");
        return;
    }

    const newCardHTML = `
        <li>
            <h3>${title}</h3>
            <p>${text}</p>
            <button style="background-color: ${btnColor};">Explore</button>
        </li>
    `;


    resourcesList.insertAdjacentHTML('beforeend',newCardHTML);

    titleInput.value = '';
    textInput.value = '';
    btnColorInput.value = '#00373E';

    createCardDialog.close();

});

//=======================================================
//end
//=======================================================







