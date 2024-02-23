const form = document.getElementById('form')
const sedan = document.getElementById('sedan')
const crossover = document.getElementById('crossover')
const suv = document.getElementById('suv')

const interior = document.getElementById('interior')
const exterior = document.getElementById('exterior')
const wheel = document.getElementById('wheel')

form.addEventListener('submit', form => {
    form.preventDefault();
    let vehicle = '';
    if(suv.checked) vehicle = `suv`
    if(sedan.checked) vehicle = `sedan`
    if(crossover.checked) vehicle = `checked`

    let services = [];

    if(interior.checked) services.push('interior')
    if(exterior.checked) services.push('exterior')
    if(wheel.checked) services.push('wheel')


    alert(`you vehicle is ${vehicle}`)
})

