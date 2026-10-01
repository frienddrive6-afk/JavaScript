const ourHeading = document.getElementById('title');
ourHeading.style.color = 'red';
console.log(ourHeading);

const ourText = document.querySelector('.text');
ourText.style.color = 'green';
console.log(ourText);
ourText.textContent = "bababa";

let ourTexts = document.querySelectorAll('.texts');

function genColor()
{
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;

}

ourTexts.forEach(element => {
    element.style.color = genColor();
});
