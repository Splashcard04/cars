const form = document.getElementById('form')
const sedan = document.getElementById('sedan')
const crossover = document.getElementById('crossover')
const suv = document.getElementById('suv')

const interior = document.getElementById('interior')
const exterior = document.getElementById('exterior')
const wheel = document.getElementById('wheel')

const prices = {
    sedan: {
        interior: 120,
        exterior: 80,
        wheel: 30
    },
    crossover: {
        interior: 130,
        exterior: 90,
        wheel: 30
    },
    suv: {
        interior: 150,
        exterior: 120,
        wheel: 30
    }
}

let total = 0

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


    
    total += prices[vehicle][services[0]]
    total += prices[vehicle][services[1]] || 0
    total += prices[vehicle][services[2]] || 0
    
    alert(`Total: $${total} <br> <button id='cont'>Continue</button>`)
})