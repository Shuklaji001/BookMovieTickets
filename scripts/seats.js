let count = document.getElementById('count');
let total = document.getElementById('total');
let selectedSeatCount = 0


const movieSelect = document.getElementById('movie');
let selectedMovie = document.getElementById('selectedMovie')

const displayMovieName = ()=>{
  let movieName = JSON.parse(localStorage.getItem('movieBook'));
  selectedMovie.innerText = movieName.name;
}
displayMovieName();

// display seats on UI
const generateSeat = ()=>{
   for(let i=0; i<6;i++){
      let row = document.createElement('div')
      row.classList.add('row');
     
    for(let j=0; j<8;j++){
      let seats = document.createElement('div')

      seats.classList.add('seat');
      seats.addEventListener('click',()=>{
        seats.classList.add('occupied');
        selectSeats(i,j)
      })

      row.append(seats);
    }

   document.querySelector(".seatContainer").append(row);
   }
  }
   
generateSeat()


// Select seats for booking
const selectSeats = (i,j)=>{

 let seatsArr = JSON.parse(localStorage.getItem('seatsArr')) || []
  let seatsObj = {
    row: i,
    column: j,
    value : 1
  }
  let booked = seatsArr.filter(seat =>seat.row==i && seat.column==j && seat.value==1)
  if(booked.length>0)
  {
    alert("Already booked please select another")
    return
  }
selectedSeatCount++

count.innerText = selectedSeatCount
total.innerText = selectedSeatCount*10

seatsArr.push(seatsObj)
  localStorage.setItem('seatsArr',JSON.stringify(seatsArr))
}

