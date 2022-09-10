var saveButton9a = document.querySelector("#saveBtn9a");
var bookedEvent9a = document.querySelector("#event9a");
var saveButton10a = document.querySelector("#saveBtn10a");
var bookedEvent10a = document.querySelector("#event10a");
var saveButton11a = document.querySelector("#saveBtn11a");
var bookedEvent11a = document.querySelector("#event11a");
var saveButton12p = document.querySelector("#saveBtn12p");
var bookedEvent12p = document.querySelector("#event12p");
var saveButton1p = document.querySelector("#saveBtn1p");
var bookedEvent1p = document.querySelector("#event1p");
var saveButton2p = document.querySelector("#saveBtn2p");
var bookedEvent2p = document.querySelector("#event2p");
var saveButton3p = document.querySelector("#saveBtn3p");
var bookedEvent3p = document.querySelector("#event3p");
var saveButton4p = document.querySelector("#saveBtn4p");
var bookedEvent4p = document.querySelector("#event4p");
var saveButton5p = document.querySelector("#saveBtn5p");
var bookedEvent5p = document.querySelector("#event5p");
var timeH = new Date().getHours();
var timeM = new Date().getMinutes();
console.log(timeH);
console.log(timeM);

// setInterval(function(){
//    var timer = moment().format("HH:mm:ss");
//    time = timer;
//     }, 1000);
// Date
setInterval(function(){
var Date = moment().format("MMM Do, YYYY HH:mm:ss");
$("#currentDay").text(Date);
}, 1000);

/////////Color/////////
// function eventColor9a(){
//     when(timeH = 2)
//     if (timeH < "2"){
//         document.querySelector("#event9a").style.backgroundColor = "Green";
//         document.querySelector("#event9a").style.color = "white";
//         document.querySelector("#event9a").textContent = "Schedule Now";
    
//     } if (timeH == "2"){
//         document.querySelector("#event9a").style.backgroundColor = "Red";
//         document.querySelector("#event9a").style.color = "white";
//         document.querySelector("#event9a").textContent = "Current Appointment";
//     }
//     };
///////
function eventColor9a(){

if(timeH < "9"){
    document.querySelector("#event9a").style.backgroundColor = "Green";
    document.querySelector("#event9a").style.color = "white";
    // document.querySelector("#event9a").textContent = "Schedule Now";

} if (timeH == "9"){
    document.querySelector("#event9a").style.backgroundColor = "Red";
    document.querySelector("#event9a").style.color = "white";
    // document.querySelector("#event9a").textContent = "Current Appointment";
}
};

function eventColor10a(){

    if(timeH < "10"){
        document.querySelector("#event10a").style.backgroundColor = "Green";
        document.querySelector("#event10a").style.color = "white";
        document.querySelector("#event10a").textContent = "Schedule Now";
    
    } if (timeH == "10"){
        document.querySelector("#event10a").style.backgroundColor = "Red";
        document.querySelector("#event10a").style.color = "white";
        document.querySelector("#event10a").textContent = "Current Appointment";
    }
    };
function eventColor11a(){

    if(timeH < "11"){
        document.querySelector("#event11a").style.backgroundColor = "Green";            
        document.querySelector("#event11a").style.color = "white";
        document.querySelector("#event11a").textContent = "Schedule Now";
        
    } if (timeH == "11"){
        document.querySelector("#event11a").style.backgroundColor = "Red";
        document.querySelector("#event11a").style.color = "white";
        document.querySelector("#event11a").textContent = "Current Appointment";
    }
        };

function eventColor12p(){

    if (timeH < "12"){
        document.querySelector("#event12p").style.backgroundColor = "Green";  
        document.querySelector("#event12p").style.color = "white";
        document.querySelector("#event12p").textContent = "Schedule Now";
    
    } if (timeH == "12"){
        document.querySelector("#event12p").style.backgroundColor = "Red";
        document.querySelector("#event12p").style.color = "white";
        document.querySelector("#event12p").textContent = "Current Appointment";
    }
    };
function eventColor1p(){

        if(timeH < "13"){
            document.querySelector("#event1p").style.backgroundColor = "Green";
            document.querySelector("#event1p").style.color = "white";
            document.querySelector("#event1p").textContent = "Schedule Now";
        
        } if (timeH == "13"){
            document.querySelector("#event1p").style.backgroundColor = "Red";
            document.querySelector("#event1p").style.color = "white";
            document.querySelector("#event1p").textContent = "Current Appointment";
        }
        };
    
function eventColor2p(){

    if(timeH < "14"){
        document.querySelector("#event2p").style.backgroundColor = "Green";
        document.querySelector("#event2p").style.color = "white";
        document.querySelector("#event2p").textContent = "Schedule Now";
    
    } if (timeH == "14"){
        document.querySelector("#event2p").style.backgroundColor = "Red";
        document.querySelector("#event2p").style.color = "white";
        document.querySelector("#event2p").textContent = "Current Appointment";
    }
    };

function eventColor3p(){

    if(timeH < "15"){
        document.querySelector("#event3p").style.backgroundColor = "Green";
        document.querySelector("#event3p").style.color = "white";
        document.querySelector("#event3p").textContent = "Schedule Now";
        
    } if (timeH == "15"){
        document.querySelector("#event3p").style.backgroundColor = "Red";
        document.querySelector("#event3p").style.color = "white";
        document.querySelector("#event3p").textContent = "Current Appointment";
    }
        };

function eventColor4p(){

    if(timeH < "16"){
        document.querySelector("#event4p").style.backgroundColor = "Green";
        document.querySelector("#event4p").style.color = "white";
        document.querySelector("#event4p").textContent = "Schedule Now";
        
    } if (timeH == "16"){
        document.querySelector("#event4p").style.backgroundColor = "Red";
        document.querySelector("#event4p").style.color = "white";
        document.querySelector("#event4p").textContent = "Current Appointment";
    }
    };

function eventColor5p(){

    if(timeH < "17"){
        document.querySelector("#event5p").style.backgroundColor = "Green";
        document.querySelector("#event5p").style.color = "white";
        document.querySelector("#event5p").textContent = "Schedule Now";
    
    } if (timeH == "17"){
        document.querySelector("#event5p").style.backgroundColor = "Red";
        document.querySelector("#event5p").style.color = "white";
        document.querySelector("#event5p").textContent = "Current Appointment";
    }
    };
////////Color//////////

function render9Am() {
    var event9a = JSON.parse(localStorage.getItem("event9a"));
  bookedEvent9a.textContent = event9a;
};

saveButton9a.addEventListener("click", function(event) {
    event.preventDefault();
  
    var event = bookedEvent9a.textContent;
  
      localStorage.setItem("event9a", JSON.stringify(event));
      console.log(localStorage)

      render9Am();
    }
  );
  console.log(localStorage.getItem("event9a"));

////////
  function render10Am() {
    var event10a = JSON.parse(localStorage.getItem("event10a"));
    bookedEvent10a.textContent = event10a;
};

saveButton10a.addEventListener("click", function(event) {
    event.preventDefault();
  
    var event10a = bookedEvent10a.textContent;
  
      localStorage.setItem("event10a", JSON.stringify(event10a));
      console.log(localStorage)

      render10Am();
    }
  );
  console.log(localStorage.getItem("event10a"));
///////

function render11Am() {
    var event11a = JSON.parse(localStorage.getItem("event11a"));
    bookedEvent11a.textContent = event11a;
};

saveButton11a.addEventListener("click", function(event) {
    event.preventDefault();
  
    var event11a = bookedEvent11a.textContent;
  
      localStorage.setItem("event11a", JSON.stringify(event11a));
      console.log(localStorage)

        render11Am();
    }
  );
  console.log(localStorage.getItem("event11a"));
///////

function render12Pm() {
    var event12p = JSON.parse(localStorage.getItem("event12p"));
    bookedEvent12p.textContent = event12p;
};

saveButton12p.addEventListener("click", function(event) {
    event.preventDefault();
  
    var event12p = bookedEvent12p.textContent;
  
      localStorage.setItem("event12p", JSON.stringify(event12p));
      console.log(localStorage)


    }
  );
  console.log(localStorage.getItem("event12p"));
///////

function render1Pm() {
    var event1p = JSON.parse(localStorage.getItem("event1p"));
    bookedEvent1p.textContent = event1p;
};

saveButton1p.addEventListener("click", function(event) {
    event.preventDefault();
  
    var event1p = bookedEvent1p.textContent;
  
      localStorage.setItem("event1p", JSON.stringify(event1p));
      console.log(localStorage)


    }
  );
  console.log(localStorage.getItem("event1p"));

///////

function render2Pm() {
    var event2p = JSON.parse(localStorage.getItem("event2p"));
    bookedEvent2p.textContent = event2p;
};

saveButton2p.addEventListener("click", function(event) {
    event.preventDefault();
  
    var event2p = bookedEvent2p.textContent;
  
      localStorage.setItem("event2p", JSON.stringify(event2p));
      console.log(localStorage)


    }
  );
  console.log(localStorage.getItem("event2p"));
///////

function render3Pm() {
    var event3p = JSON.parse(localStorage.getItem("event3p"));
    bookedEvent3p.textContent = event3p;
};

saveButton3p.addEventListener("click", function(event) {
    event.preventDefault();
  
    var event3p = bookedEvent3p.textContent;
  
      localStorage.setItem("event3p", JSON.stringify(event3p));
      console.log(localStorage)


    }
  );
  console.log(localStorage.getItem("event3p"));
///////

function render4Pm() {
    var event4p = JSON.parse(localStorage.getItem("event4p"));
    bookedEvent4p.textContent = event4p;
};

saveButton4p.addEventListener("click", function(event) {
    event.preventDefault();
  
    var event4p = bookedEvent4p.textContent;
  
      localStorage.setItem("event4p", JSON.stringify(event4p));
      console.log(localStorage)


    }
  );
  console.log(localStorage.getItem("event4p"));
///////

function render5Pm() {
    var event5p = JSON.parse(localStorage.getItem("event5p"));
    bookedEvent5p.textContent = event5p;
};

saveButton5p.addEventListener("click", function(event) {
    event.preventDefault();
  
    var event5p = bookedEvent5p.textContent;
  
      localStorage.setItem("event5p", JSON.stringify(event5p));
      console.log(localStorage)


    }
  );
  console.log(localStorage.getItem("event5p"));

//   localStorage.clear();

  render9Am();
  render10Am();
  render11Am();
  render12Pm();
  render1Pm();
  render2Pm();
  render3Pm();
  render4Pm();
  render5Pm();
  eventColor9a();
  eventColor10a();
  eventColor11a();
  eventColor12p();
  eventColor1p();
  eventColor2p();
  eventColor3p();
  eventColor4p();
  eventColor5p();