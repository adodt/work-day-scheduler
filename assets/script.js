//Current day display at top
var today = moment()
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a" ));

//Timeblocks with business hours
    //DONE

//Color coded for past/present/future
    // Check odd, then assign boolean
if(weekNum % 2) {
  takeOut = true;
} else {
  takeOut = false;
}

$("#4a").text(takeOut + ", because it's currently week " + weekNum); 


//Click into timeblock to create event

//Save event button

//When save button is clicked, text is saved in local storage

//Events are saved when page is refreshed