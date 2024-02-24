const button = document.getElementById('test');

button.addEventListener('click', () => {
    $.getJSON("data.json", function(json) {
        console.log(json);
    })
})