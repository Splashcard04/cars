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
    if(crossover.checked) vehicle = `crossover`

    let services = [];

    if(interior.checked) services.push('interior')
    if(exterior.checked) services.push('exterior')
    if(wheel.checked) services.push('wheel')


    
    total += prices[vehicle][services[0]]
    total += prices[vehicle][services[1]] || 0
    total += prices[vehicle][services[2]] || 0

    const orderNum = Math.floor(Math.random() * 1000000)

    if(services.length === 0) {
        alert(`Please select 1 or more services`);
        return;
    }
    if(!vehicle) {
        alert(`Please select a vehicle`);
        return;
    }
    
    document.write(`
    
    <img src='../assets/logo2.png' alt='logo' id='logo'>
    <h2 id='h2'>Order Details</h2>
    
    <div class='p-container'>
    
        <p class='p'><b>Vehicle:</b> ${vehicle}</p>
        <p class='p'><b>Services:</b> ${services.join(', ')}</p>
        <p class='p'><b>Total: $${total}</b></p>
        <p class='p'><b>Order Number:</b> ${orderNum}</p> <br>

        <h2 id='h2'>Order Info</h2>

        <p id='res'>Thank you for choosing Clean Cars Olympia! In order to continue with your order: <br>
        Please <a href='../contact/index.html'>contact us</a> with your order number to schedule your appointment. 
        Please allow up to 24 hours for response. We look forward to seeing you!
        </p>
    
    </div>

    <style>
    
    .radio-box {
        border-radius: 5px;
    }
    
    .p-container {
        text-align: center;
        font-size: large;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    
    .input-container {
        text-align: center;
    }
    
    .radio {
        scale: 110%;
        text-align: center;
        cursor: pointer;
    }
    
    .label {
        font-size: large;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    
    #back {
        text-align: center;
        padding: 3%;
    }
    
    #submit {
        border-radius: 5px;
        font-size: 105%;
        padding: 1%;
        margin: 10px;
        background-color: #3399ff;
        color: white;
        border: none;
    }
    
    #submit:hover {
        background-color: darkblue
    }
    
    .p {
        text-align: center;
        font-size: large;
        padding-top: 1%;
    }

    #logo {
        text-align: center;
        margin:auto;
        display: block;
        scale: 100%;
        padding-bottom: 1%;
    }
    
    body {
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    
    #p {
        text-align: center;
        font-size: large;
        padding-top: 1%;
    }
    
    .header-container {
        text-align: center;
    }
    
    #h2 {
        text-align: center;
    }
    
    #back {
        text-align: center;
        padding: 3%;
    }
    
    body button {
        cursor: pointer
    }

    #res {
        text-align: center;
        padding: 0.5%;
        font-size: large;
    }

    </style>


    `)
})