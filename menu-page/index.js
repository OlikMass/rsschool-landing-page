const buttonTea = document.getElementById('button-tea');
const buttonDessert = document.getElementById('button-dessert');
const buttonCoffee = document.getElementById('first');
const sectionTea = document.querySelector('.menu-section__tea');
const sectionCoffee = document.querySelector('.menu-section__coffee');
const sectionDessert = document.querySelector('.menu-section__dessert');
const arrowButton = document.querySelector('#arrow');
const card = document.querySelectorAll('.card');
const activeCoffeeColorText = document.getElementById('active');
const activeTeaColorText = document.getElementById('active-tea');
const activeDessertColorText = document.getElementById('active-dessert');

buttonTea.addEventListener('click', () => {
    buttonTea.style.background = "#665F55";
    buttonDessert.style.background = "#E1D4C9";
    buttonCoffee.style.background = "#E1D4C9";
    activeTeaColorText.style.color = '#E1D4C9';
    activeDessertColorText.style.color = '#665F55';
    activeCoffeeColorText.style.color = '#665F55';
    sectionTea.classList.add('display-flex');
    sectionCoffee.classList.remove('display-flex');
    sectionCoffee.classList.add('display-none');
    sectionDessert.classList.remove('display-flex');
    sectionDessert.classList.add('display-none');
    arrowButton.classList.remove('arrow-div');
    arrowButton.classList.add('display-none');
});
buttonDessert.addEventListener('click', () => {
    buttonDessert.style.background = "#665F55";
    buttonTea.style.background = "#E1D4C9";
    buttonCoffee.style.background = "#E1D4C9";
    activeDessertColorText.style.color = '#E1D4C9';
    activeTeaColorText.style.color = '#665F55';
    activeCoffeeColorText.style.color = '#665F55';
    sectionDessert.classList.remove('display-none');
    sectionDessert.classList.add('display-flex');
    sectionTea.classList.remove('display-flex');
    sectionTea.classList.add('display-none');
    sectionCoffee.classList.remove('display-flex');
    sectionCoffee.classList.add('display-none');
    arrowButton.classList.add('arrow-div');
    arrowButton.classList.remove('display-none');
    card.forEach(function(element) {
        //element.classList.remove('menu-section__card');
        element.classList.add('card');
      })
});
buttonCoffee.addEventListener('click', () => {
    buttonCoffee.style.background = "#665F55";
    buttonDessert.style.background = "#E1D4C9";
    buttonTea.style.background = "#E1D4C9";
    activeCoffeeColorText.style.color = '#E1D4C9';
    activeDessertColorText.style.color = '#665F55';
    activeTeaColorText.style.color = '#665F55';
    sectionCoffee.classList.remove('display-none');
    sectionCoffee.classList.add('display-flex');
    sectionTea.classList.remove('display-flex');
    sectionTea.classList.add('display-none');
    sectionDessert.classList.remove('display-flex');
    sectionDessert.classList.add('display-none');
    arrowButton.classList.add('arrow-div');
    arrowButton.classList.remove('display-none');
    card.forEach(function(element) {
        //element.classList.remove('menu-section__card');
        element.classList.add('card');
      })
});
arrowButton.addEventListener('click', () => {
    card.forEach(function(element) {
        element.classList.remove('card');
        //element.classList.add('menu-section__card');
      })
      arrowButton.classList.remove('arrow-div');
      arrowButton.classList.add('display-none');
});