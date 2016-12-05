function submit() {

    var name = $("#name").val().trim();
    var userText = $("#userText").val().trim();
    
    var d = moment().format('MMM Do YYYY, h:mm a');
    console.log(d);


    setComment({
      date: d,
      name: name,
      userText: userText
    });

}




function clear(){
 

    $("#name").val(placeholder)
    $("#userText").val().empty();

}

function submit2() {

    var name = $("#name2").val().trim();
    var userText = $("#userText2").val().trim();
   
    d = moment().format('MMM Do YYYY, h:mm a');
    console.log(name);
    console.log(userText);
    console.log(d);

    setComment2({
      date: d,
      name: name,
      userText: userText
    });
 
}



function submit3() {

    var name = $("#name3").val().trim();
    var userText = $("#userText3").val().trim();
    
    d = moment().format('MMM Do YYYY, h:mm a');
    console.log(d);


    setComment3({
      date: d,
      name: name,
      userText: userText
    });

  
}


function submit4() {

    var name = $("#name4").val().trim();
    var userText = $("#userText4").val().trim();
    d = moment().format('MMM Do YYYY, h:mm a');
    console.log(d);

    setComment4({
      date: d,
      name: name,
      userText: userText
    });

}



 function myCountdown() {

            var deadline = getDeadLineObj();
            var dateFormat = moment(deadline.date, 'YYYY-MM-DD:HH');


            var now = moment();

            var diff = moment.duration(moment(dateFormat).diff(moment(now)));


            var days = parseInt(diff.asDays());

            var hours = parseInt(diff.asHours());

            var hours = hours - days * 24;

            var minutes = parseInt(diff.asMinutes());

            var minutes = minutes - (days * 24 * 60 + hours * 60);

            var seconds = parseInt(diff.asSeconds());

            var seconds = seconds - (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60);


          

            var diffInTimeFromNow = days + " " + "Days" + " : " + hours + " " + "Hours " + ": " + minutes + " " + "Minutes " + ": " + seconds + " " + "Seconds";


            $("#display").html(diffInTimeFromNow);

}




function submitInfo() {

    var type = $(".custom-select").val();
    console.log(type);

    var location = $("#example-text-input").val().trim();


    var subject = $("#example-text-input").val();



    var date = $("#example-date-input").val();



    var time = $("#example-time-input").val();


    var finalDate = date + ":" + time;
    console.log(finalDate);

    var type = $("#select").val().trim();



    if (type == "2") {

        console.log("this is a deadline");
        console.log("subject is:" + subject);

        //$(".countdownText").html("Deadline For " + subject);

        setDeadLine({
          subject: subject,
          date: finalDate
        });

        //var myCountdownInterval = setInterval(myCountdown, 1000);

    } else {

        console.log("this is a meeting");
        console.log("location is:" + location);

        var newFormat = moment(date, 'YYYY-MM-DD');

        var formatDate = moment(newFormat).format('MMMM Do, YYYY');

        var newTFormat = moment(time, 'HH');

        var formatTime = moment(newTFormat).format('hh:mm A');

        setMeeting({
          location: location,
          date: formatDate,
          time: formatTime
        })


    }


    $("#example-text-input").val("");


}



$('#select').change(function() {

    if (this.value == "2") {

        $("#selectLabel").html("Subject");

    } else {

        $("#selectLabel").html("Location");


    }

});

