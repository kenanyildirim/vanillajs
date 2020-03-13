const container=document.querySelector('.container');
const seats=document.querySelectorAll('.row .seat:not(.occupied)');

const count=document.getElementById('count');
const total=document.getElementById('total');
const movieSelect=document.getElementById('movie');

let ticketPrice=+movieSelect.value;


//save selected movie and price
setMovieData=(movieIndex,moviePrice)=>{
 localStorage.setItem('selectedMovieIndex',movieIndex);
 localStorage.setItem('selectedMoviePrice',moviePrice);
}

updateSelectedCount=()=>{
const selectedSeats=document.querySelectorAll('.row .seat.selected');

//copy selected seats into array
//Map through array
//return a new array indexes

const seatsIndex=[...selectedSeats].map((seat)=>[...seats].indexOf(seat));
localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
const selectedSeatsCount=selectedSeats.length;
count.innerText=selectedSeatsCount;
total.innerText=selectedSeatsCount*ticketPrice;

}

//movie change event

movieSelect.addEventListener('change',(e)=>{
ticketPrice=+e.target.value;
setMovieData(e.target.selectedIndex,e.target.value);


updateSelectedCount();
})

//seat click event
container.addEventListener('click',(e)=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
       e.target.classList.toggle('selected');

       updateSelectedCount();
    }
})
