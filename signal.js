let div0 = document.createElement("div");
div0.className = "page";

let div1 = document.createElement("div");
div1.className = "inner";

let div3 = document.createElement("div");
div3.className = "circle red";

let div4 = document.createElement("div");
div4.className = "circle yellow";

let div5 = document.createElement("div");
div5.className = "circle green";

let div6 = document.createElement("div");
div6.className = "count";
let res = document.createElement("h3");
res.style.color = "white"
div6.appendChild(res)
div1.append(div3, div4, div5, div6);
div0.appendChild(div1);
document.body.appendChild(div0);

let timer1 = 10;
let timer2 = 5;
let timer3 = 10;
value = 0;

function run() {

  if (value <11) {
    div3.style.backgroundColor = "red";
    div4.style.backgroundColor = "black";
    div5.style.backgroundColor = "black";
    res.textContent=timer1;
    timer1--
  } 
  else if (value >=11 && value <16) 
  {
    div3.style.backgroundColor = "black";
    div4.style.backgroundColor = "yellow";
    div5.style.backgroundColor = "black";
    res.textContent=timer2;
    timer2--
  } 
  else if (value >=16 && value <26) 
  {
    div3.style.backgroundColor = "black";
    div4.style.backgroundColor = "black";
    div5.style.backgroundColor = "green";
    res.textContent=timer3;
    timer3--
  }
  value++
  if (value > 26) {
    timer1 = 10;
    timer2 = 5;
    timer3 = 10;
    value = 0;
  }
}
setInterval(run,1000);




// let redcircle1 = document.querySelector(".red");
// let yellowcircle1 = document.querySelector(".yellow");
// let greencircle1 = document.querySelector(".green");
// let timerclk1 = document.querySelector(".count");

// let timer1 = 5;

// function run() {
//   timer1 -= 1;

//   timerclk1.innerText = timer1;


//   }  if (timer1 === 5) {
//     redcircle1.style.backgroundColor = "black";
//     yellowcircle1.style.backgroundColor = "yellow";
//     greencircle1.style.backgroundColor = "black";
//     timer=6;
//   } 

// setInterval(run, 2000);