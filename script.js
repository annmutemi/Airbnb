let url = 'http://localhost:3000/airbnbs'
const listHolder = document.getElementById('films')

window.addEventListener("load", function(){
    fetch(url).then(response => response.json())
    .then(airbnbs =>{
        airbnbs.forEach(airbnb =>{
            displayAirbnbs(airbnb)
        })
    })
})

function displayAirbnbs(airbnb){
    const li = document.createElement('li')
    li.style.cursor="pointer"
    li.textContent= (airbnb.title).toUpperCase()
    listHolder.appendChild(li)
}
