const cardElement1 = document.getElementById('card1');
const btnCardElement1 = document.querySelector('#card1-btn');
const card1Title = document.querySelector('#card1 h5');
console.log(btnCardElement1);
btnCardElement1.addEventListener('click', () => {
    card1Title.classList.toggle('hidden');
})

cardElement1.style.backgroundColor = 'purple';
cardElement1.style.color = 'white';