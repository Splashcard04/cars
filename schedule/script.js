const form = document.getElementById('form')
const sedan = document.getElementById('sedan')
const crossover = document.getElementById('crossover')
const suv = document.getElementById('suv')

form.addEventListener('submit', form => {
    form.preventDefault();
    let vehicle;
    [suv, crossover, sedan].forEach(x => {
        if(x.checked) {
            vehicle = x.name
        }
    })
    alert(`you vehicle is ${vehicle}`)
})