// Gets the current time 
function getTime() {
    var currentTime = new Date()
    var hour = currentTime.getHours() % 12 || 12
    var minute = currentTime.getMinutes()
    
    if (minute < 10){
        minute = "0" + minute
    }
    
    var getCurrentTime = hour + ":" + minute;
    
    document.getElementById("current-time").innerHTML = getCurrentTime;
    setTimeout(getTime, 1000)
}

getTime();

// Checks for the time of the day and returns the part of the day
function getPart() {
    var today = new Date()
    var curHr = today.getHours()

    if (curHr < 12) {
        curHr = "morning";
    } else if (curHr < 18) {
        curHr = "afternoon";
    } else {
        curHr = "evening";
    }

    var getDayPart = curHr
    document.getElementById("day-part").innerHTML = getDayPart;
    setTimeout(getPart, 1000)
}

getPart();

// Ask how they are 

function results() {
    // var name = document.getElementById('name').value;
    var name = document.getElementById('name').nodeValue;
    document.write("<h3>TODAY</h3>");
    document.write(name + " ");

}