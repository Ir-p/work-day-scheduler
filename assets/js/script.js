
function init (){
    // read local storage and assign to time slots

    addTimeToHeader();

    addColorToTimeSlot();

    // add event listener to save buttons

}
    // $(document).ready(function() {
// set time in header
var timeEl = document.getElementById("currentDay");
timeEl.textContent = moment();

// // add appropriate class to hour elements (past, future, present)
function addColorToTimeSlot() {
    // get current hour
    var time = moment().hours();

    // loop through row
    $('.time-block').each(function(){
    
        var rowHour = parseInt($(this).attr('id').split('-')[1]);
            // add class appropiately
        if(rowHour < time) {
            $(this).removeClass('future','present');
            $(this).addClass('past');
        } else if (rowHour === time) {
            $(this).removeClass('past', 'future');
            $(this).addClass('present'); 
        } else if (rowHour> time) {
            $(this).removeClass('past', 'present');
            $(this).addClass('future')
        }    
    });
}
addColorToTimeSlot();

function getHourOfTheDay () {}


// start 🚀
init()