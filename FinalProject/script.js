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
    
    const curtain = document.querySelector('.hero-curtain');
    if (curtain) {
        curtain.style.backgroundColor = newColor;
        curtain.style.boxShadow = `-60px 0 60px 40px ${newColor}`;
    }
});

cryWoman.addEventListener('dblclick', function () 
{
    curtain.style.backgroundColor = '#F39BAA';
    curtain.style.boxShadow = `-60px 0 60px 40px #F39BAA`;
});

//=======================================================
//end    
//=======================================================

// кнопка открытие диалога для заполнения профиля
const dialog = document.getElementById('customPrompt');
const openBtn = document.getElementById('openBtn');

const headerUser = document.getElementById('headerUser');
const headerAge = document.getElementById('headerAge');
const headerColor = document.getElementById('headerColor');

openBtn.addEventListener('click', () => {
    dialog.showModal(); 
});

dialog.addEventListener('close', () => {
    if (dialog.returnValue !== 'cancel') {
        const name = document.getElementById('username').value;
        const age = document.getElementById('age').value;
        const color = document.getElementById('favColor').value;
        
        // console.log(`${name},${age},${color}`);

        if(name.length === 0 || age.length === 0)
        {
            headerUser.innerHTML = 'User';
            headerAge.innerHTML = '0+';
            headerColor.style.backgroundColor = '#00373E';
        }else
        { 
            headerUser.innerHTML = name;
            headerAge.innerHTML = age;
            headerColor.style.backgroundColor = color;

            localStorage.setItem('name', name);
            localStorage.setItem('age', age);
            localStorage.setItem('color', color);

            document.getElementById('username').value = '';
            document.getElementById('age').value = '';
            document.getElementById('favColor').value = '#00373E';
        }


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


const savedName = localStorage.getItem('name');
const savedAge = localStorage.getItem('age');
const savedColor = localStorage.getItem('color');

if (savedName !== null && savedAge !== null && savedColor !== null) {
    headerUser.textContent = savedName;
    headerAge.textContent = savedAge;
    headerColor.style.backgroundColor = savedColor;
}
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

let cardIdCounter = 1;

let cardsArray = [
    {
        id: cardIdCounter++,
        title: "Articles & Guides",
        text: "Practical tips on stress management, mindfulness, and emotional resilience.",
        btnColor: "#eebf22"
    },
    {
        id: cardIdCounter++,
        title: "Meditation & Relaxation",
        text: "Audio sessions for guided meditation and deep breathing exercises.",
        btnColor: "#4dcaba"
    },
    {
        id: cardIdCounter++,
        title: "Webinars & Workshops",
        text: "Live and recorded sessions with mental health professionals.",
        btnColor: "#f39baa"
    }
];


function renderCards() {
    resourcesList.innerHTML = '';

    for (const card of cardsArray) {
        const cardHTML = `
            <li data-id="${card.id}">
                <button class="resources-bottom-close-btn">✕</button>
                <h3>${card.title}</h3>
                <p>${card.text}</p>
                <button class="resources-bottom-element-btn-Explore" style="background-color: ${card.btnColor};">Explore</button>
            </li>
        `;
        resourcesList.insertAdjacentHTML('beforeend', cardHTML);
    }
}

renderCards();


addCardBtn.addEventListener('click', () => 
{
    createCardDialog.showModal();
});



addCardSubmitbtn.addEventListener('click', () => {
    const titleInput = document.getElementById("input-title");
    const textInput = document.getElementById("input-text");
    const btnColorInput = document.getElementById("input-btn-color");

    const title = titleInput.value.trim();
    const text = textInput.value.trim();
    const btnColor = btnColorInput.value;

    if (title.length === 0 || text.length === 0) {
        alert("Заполните все поля!");
        return;
    }

    cardsArray.push({
        id: cardIdCounter++,
        title: title,
        text: text,
        btnColor: btnColor
    });

    renderCards();

    titleInput.value = '';
    textInput.value = '';
    btnColorInput.value = '#00373E';
    createCardDialog.close();
});


resourcesList.addEventListener('click', (event) => {
    if (event.target.classList.contains('resources-bottom-close-btn')) {
        const cardLi = event.target.closest('li');
        
        const idToDelete = Number(cardLi.dataset.id);

        cardsArray = cardsArray.filter(card => card.id !== idToDelete);

        renderCards();

        // console.log("Осталось карточек в памяти:", cardsArray.length);
    }
});

createCardDialog.addEventListener('click', (event) => {
    const rect = createCardDialog.getBoundingClientRect();
    const clickedOutside = 
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

    if (clickedOutside) {
        createCardDialog.close('cancel');
    }
});




//=======================================================
//end
//=======================================================







