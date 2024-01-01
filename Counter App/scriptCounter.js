// Take Html element

let decrementbtn = document.getElementById("decrementbtn");
let incrementbtn = document.getElementById("incrementbtn");
let resetbtn = document.getElementById("resetbtn");
let displayvalue = document.getElementById("displayvalue");

// For decrement button click

decrementbtn.addEventListener("click", () => {
    let value = Number(displayvalue.innerText);
    if (value > 0){
        displayvalue.innerText = value - 1;
    }else{
        alert("Negative Value not Allowed");
    }
});


// For Increment Button click

incrementbtn.addEventListener("click", () => {
  let value = Number(displayvalue.innerText);
  if (value >= 10) {
    alert("10+ values are not allowed");
  } else {
    displayvalue.innerText = value + 1;
  }
});

//  For Reset button click

resetbtn.addEventListener("click", () => {
    displayvalue.innerText = 0;
  });
