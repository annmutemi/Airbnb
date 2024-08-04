let url = 'http://localhost:3000/airbnbs'
const listHolder = document.getElementById('airbnbs')

window.addEventListener("load", function(){
    fetch(url).then(response => response.json())
    .then(airbnbs =>{
        airbnbs.forEach(airbnb =>{
            displayAirbnbs(airbnb)
        })
    })
})

function displayAirbnbs(airbnb){
    const img = document.createElement('img')
    img.className = "images"
    img.setAttribute('src', airbnb.image)
    img.setAttribute('width', "300")
    img.setAttribute('height', "200")

    const description = document.createElement("p")
    description.className = ""
    description.textContent = airbnb.description

    const availability = document.createElement("button")
    availability.className = "btn btn-primary"
    availability.textContent = airbnb.available
    
    const li = document.createElement('li')
    li.appendChild(img)
    li.appendChild(description)
    li.appendChild(availability)

    listHolder.style.cursor = "pointer"
    listHolder.appendChild(li)
}
