//Current day display at top
let today = moment()
$("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm:ss a" ));

//Timeblocks with business hours
    //DONE

//Color coded for past/present/future
    //DONE
    //check time for past, present or future, then assign boolean
    var checkTime = function (){
    //current time in military time
    var currentTime = moment().format('H');
    var eventAreaElements = $(".eventArea");

    for (var i=0; i < eventAreaElements.length; i++) {
    //ID as a string
        var elementID = eventAreaElements[i].id;
    //grab element by ID to assign new class
        var manipID = document.getElementById
        (eventAreaElements[i].id)
    //assign class based on current time
        $(eventAreaElements[i].id).removeClass(".past .present .future");
        if (elementID < currentTime) {
            $(manipID).addClass("past");
        } else if (elementID > currentTime) {
            $(manipID).addClass ("future");
        } else {
            $(manipID).addClass("present");
        }
    }
}
//check time every 5min
setInterval(checkTime(), (1000*60)*5)

//When save button is clicked, text is saved in local storage
$(".saveBtn").click(function (event){
    event.preventDefault();
    var time = $(this).parent().attr("id")
    var value = $(this).siblings(".eventArea").children(".calendarItem").val();
    localStorage.setItem(time, value);
})

console.log(localStorage.getItem("5pm"))

//Events are saved when page is refreshed

$("#5pm .calendarItem").val(localStorage.getItem("9am"))
$("#5pm .calendarItem").val(localStorage.getItem("10am"))
$("#5pm .calendarItem").val(localStorage.getItem("11am"))
$("#5pm .calendarItem").val(localStorage.getItem("12pm"))
$("#5pm .calendarItem").val(localStorage.getItem("1pm"))
$("#5pm .calendarItem").val(localStorage.getItem("2pm"))
$("#5pm .calendarItem").val(localStorage.getItem("3pm"))
$("#5pm .calendarItem").val(localStorage.getItem("4pm"))
$("#5pm .calendarItem").val(localStorage.getItem("5pm"))