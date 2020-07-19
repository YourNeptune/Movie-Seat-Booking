const container = document.querySelector('.container3')
const seats = document.querySelectorAll('.row .seat')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movie = document.getElementById('movies')
let ticketPrice = +movie.value    //string -> int


//seat select event
container.addEventListener('click', (e) => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('Occupied')){
       e.target.classList.toggle('Selected')
       update()
    }
})

//movie select event
movie.addEventListener('change', (e) => {
    ticketPrice = +e.target.value
    saveMovieData(e.target.selectedIndex, e.target.value)
    update()
})

//save movie index and price
function saveMovieData(index,price){
    localStorage.setItem('selectedMovieIndex', index)
    localStorage.setItem('selectedMoviePrice', price)
}

//update count and total
function update() {
    const selectedSeats = document.querySelectorAll('.row .seat.Selected')

    const seatsIndex = [...selectedSeats].map(function(seat) {
        return [...seats].indexOf(seat)
    })
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))


    count.innerHTML = selectedSeats.length
    total.innerHTML = selectedSeats.length * ticketPrice
}

// get data from localStorage and populate UI
function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))

}