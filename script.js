setTimeout(() => {
    document.querySelector(".luys_axpyur").style.display = 'block';
}, 5000)


let perspectiv = document.querySelector(".perspectiv");
let favorites = document.querySelector(".favorites");
setTimeout(() => {
    perspectiv.style.display = 'none';
    favorites.style.display = 'block';
}, 8000)

let x = () => {
    setTimeout(() => {
    perspectiv.style.display = 'block';
    favorites.style.display = 'none';
}, 16000)
}

setTimeout(() => {
    x();
}, 8000)

