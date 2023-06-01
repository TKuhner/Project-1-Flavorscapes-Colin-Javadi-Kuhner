
// month selection
let nav = 0;
// day clicker
let clicked = null;

let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];


const calendar = document.getElementById('calendar');
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function load() {
    const currentDate = dayjs();
    const day = currentDate.format('D');
    const month = currentDate.format('M');
    const year = currentDate.format('YYYY');

    const newMonth = currentDate.add(nav, 'month');
    
    const firstOfMonth = currentDate.startOf('month');
    const firstOfNewMonth = newMonth.startOf('month');
    const daysInMonth = currentDate.daysInMonth();
    const daysInNewMonth = newMonth.daysInMonth();

    const dateString = firstOfMonth.format('dddd, M/D/YYYY').toString();
    
    // take the day name of the first of the month and find the index of it in the weekdays array, this will tell us how many days to pad the calendar with
    const paddingDays = weekdays.indexOf(firstOfMonth.format('dddd'));
    const paddingDaysNewMonth = weekdays.indexOf(firstOfNewMonth.format('dddd'));
    
    calendar.innerHTML = '';
    
    if (nav !== 0) {

        // use newMonth to get the viewing day, month, and year 
        document.getElementById('monthDisplay').innerText = newMonth.format('MMMM YYYY');

        for (let i = 1; i <= paddingDaysNewMonth + daysInNewMonth; i++) {
            // create a div for each day for day squares
            const daySquare = document.createElement('div');
            // add class to day square
            daySquare.classList.add('day');
    
            if (i > paddingDaysNewMonth) {
                // give each day square a number
                daySquare.innerText = i - paddingDaysNewMonth;
    
                daySquare.addEventListener('click', () => console.log('click'));
    
            } else{
                // padding days class to ensure proper layout of month
                daySquare.classList.add('padding');
            }
    
            // populate calendar with day squares for month
            calendar.appendChild(daySquare);
        }
        
    } else {
     
        // display normal current day, month, and year
        document.getElementById('monthDisplay').innerText = currentDate.format('MMMM YYYY');

        for (let i = 1; i <= paddingDays + daysInMonth; i++) {
            // create a div for each day for day squares
            const daySquare = document.createElement('div');
            // add class to day square
            daySquare.classList.add('day');
    
            if (i > paddingDays) {
                // give each day square a number
                daySquare.innerText = i - paddingDays;
    
                daySquare.addEventListener('click', () => console.log('click'));
    
            } else{
                // padding days class to ensure proper layout of month
                daySquare.classList.add('padding');
            }
    
            // populate calendar with day squares for month
            calendar.appendChild(daySquare);
        }

    }



}

function initButtons() {

    // click on next button
    document.getElementById('nextButton').addEventListener('click', () => {
        // move navigation forward by one to next month
        nav++;
        // reload calendar
        load();
    });
    // click on previous button
    document.getElementById('backButton').addEventListener('click', () => {
        // move navigation back by one to previous month
        nav--;
        // reload calendar
        load();
    });
}


initButtons();
load();


