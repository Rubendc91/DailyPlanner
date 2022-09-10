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


// Date
setInterval(function(){
var Date = moment().format("MMM Do, YYYY hh:mm:ss");
$("#currentDay").text(Date);
}, 1000);

//Color

function eventColor(){
    var time = moment().format("hh:mm:ss");
if (time > "9:00:00") {
    document.querySelector("#event9a").attr("background-color", "rgb(126, 125, 125)")
}
}

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
  eventColor();