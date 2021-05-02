
function init (){
    
    // add an event listener to the save button
    $('.saveBtn').on ("click", addEvent);
    // loop through every row and target the SAVE BUTTON and attach this listener to EVERY SAVE BUTTON
    $('.row').each(function(){
        var buttons = document.getElementsByTagName('.saveBtn')

        for(let i=0; i < buttons.length; i++) {
            var buttons = buttons[i]
            $('.saveBtn').on ("click", addEvent);
        }
    })
   
    
    function addEvent() {
        // find the text area value of the container
        var value = $.trim($("textarea").val())

        // find the value of the time block
        var hour = document.querySelector('.hour').textContent
      
        // store the time as a key and event as value in local storage
        localStorage.setItem(hour, value);
    }

    // // create function called add event
    $('description').addClass('show');
    setTimeout(function(){
        $('.description').removeClass('show');
    }, 1000);


    // read local storage and assign to time slots
    var x = localStorage.getItem("");


    // set time in header
    function addTimeToHeader() {
    var timeEl = document.getElementById("currentDay");
    timeEl.textContent = moment();
    }
    addTimeToHeader();

    // add color to time slot
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
}
function getHourOfTheDay () {}


// start 🚀
init()