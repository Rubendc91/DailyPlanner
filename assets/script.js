var saveButton9a = document.querySelector("#saveBtn9a");
var bookedEvent9a = document.querySelector("#event9a");

// Date
var Date = moment().format("MMM Do, YYYY");
$("#currentDay").text(Date);

function render9Am() {
    var event9a = JSON.parse(localStorage.getItem("event9a"));
  bookedEvent9a.textContent = event9a;
};

saveButton9a.addEventListener("click", function(event) {
    event.preventDefault();
  
    var event9a = bookedEvent9a.textContent;
  
      localStorage.setItem("event9a", JSON.stringify(event9a));
      console.log(localStorage)

      render9Am();
    }
  );
  console.log(localStorage.getItem("event9a"));
//   localStorage.clear();

render9Am();
  