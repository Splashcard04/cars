const form = document.getElementById('form')
const sedan = document.getElementById('sedan')
const crossover = document.getElementById('crossover')
const suv = document.getElementById('suv')

form.addEventListener('submit', form => {
    form.preventDefault();
    let vehicle = '';
    if(suv.checked) vehicle = `suv`
    if(sedan.checked) vehicle = `sedan`
    if(crossover.checked) vehicle = `checked`
    alert(`you vehicle is ${vehicle}`)
})