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

    const orderNum = Math.floor(Math.random() * 1000000)
    
    document.write(`
    
    <img src='../assets/logo2.png' alt='logo' id='logo'>
    <h2 id='h2'>Order Details</h2>
    
    <div class='p-container'>
    
        <p class='p'><b>Vehicle:</b> ${vehicle}</p> <br>
        <p class='p'><b>Services:</b> ${services.join(', ')}</p>
        <p class='p'><b>Total: $${total}</b></p>
        <p class='p'><b>Order Number:</b> ${orderNum}</p>

        <p class='p'>Thank you for choosing Clean Cars Olympia! In order to continue with your order: <br>
        Please <a href='../contact/index.html'>contact us</a> with your order number to schedule your appointment. <br>
        Please allow up to 24 hours for response. We look forward to seeing you!
        </p>
    
    </div>


    `)
})