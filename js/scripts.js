const hello = document.getElementById("hello");

function greeting(e) {
  console.log("Hello!");
}

hello.addEventListener("click", greeting);

// const input = document.getElementById("input 1");
// input.addEventListener("keypress", something);
//
// function something(e) {
//   console.log(e.key);
// }
