const shareButton = document.querySelector('.share-button');
const shareCard = document.querySelector('.share');


shareButton.addEventListener('click', e => {
    shareCard.classList.add('open');
})
shareCard.addEventListener("click", e => {
    shareCard.classList.remove('open');
})


// The idea for the code below is that when the width of the screen was smaller than 850px it had one functionality and when it was bigger than that it work another way.


// const query = window.matchMedia('(min-width: 850px)');

// query.onchange = e => {
//     if (query.matches) {
//         if (shareCard.classList.contains('open')) {
//             shareButton.addEventListener('mouseleave', e => {
//                 shareCard.classList.remove('open');
//             })
//         } else  {
//             shareButton.addEventListener('mouseover', e => {
//                 shareCard.classList.add('open');
//            })
//         }
//     } else {
//         shareButton.addEventListener('click', e => {
//             shareCard.classList.add('open');
//         })
//         shareCard.addEventListener("click", e => {
//             shareCard.classList.remove('open');
//         })

//     }
// }

// query.onchange();





