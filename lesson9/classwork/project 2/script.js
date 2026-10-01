// let likes = Number(localStorage.getItem("likes")) || 0;

// const likesText = document.querySelector("#likes");
// const likeButton = document.querySelector("#like");

// likesText.textContent = `${likes} ❤️`;

// likeButton.addEventListener("click", function () {
//     likes = likes + 1;
//     localStorage.setItem("likes", likes);
//     likesText.textContent = `${likes} ❤️`;
// });



// let likes = 0;
 
// const likesText = document.querySelector("#likes");
// const likeButton = document.querySelector("#like");
 
// likeButton.addEventListener("click", function() {
//   likes = likes + 1;
//   likesText.textContent = likes + "❤️";
// });


// const ctaTytle = document.querySelector(".cta_title");
// ctaTytle.textContent = "ZDAROVA";
// ctaTytle.style.color = "red";




document.querySelector(".theme__buton").addEventListener("click", function () 
{
    document.body.classList.toggle("dark");
});