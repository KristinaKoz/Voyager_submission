//JavaScript code for Date and Time
//Contributed by Hazel O'Keeffe. 

function date_time(id) {
    // This returns a Javascript Date object, and assigns it to the "date" variable
    date = new Date;
    
    // These methods return the month, day and date from the Date object, and assign respectively to the month, day and d variables.
    month = date.getMonth();
    day = date.getDay();
    d = date.getDate();
    
    // Here we're creating two arrays - one for the names of the months and one for the names of the days so we can display them.
    months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    days = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');

    // We create a results variable and adding the relevant information to it in the correct format
    // We use the numbers returned from the getDay and getMonth functions to find the right month and day names from the array.
    result = '' + days[day] + ', ' + months[month] + ' '+d;
    
    //Here we're adding the result we've just created to the correct id on the webpage.
    document.getElementById(id).innerHTML = result;
    
    //Here we set a timeout to ensure that the date refreshes.
    setTimeout('date_time("' + id + '");', '1000');
    return true;
}