let counter = 0;

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("button").onclick = count;
});

function count() {
  counter++;

  if (counter % 5 === 0) {
    alert("🍪Bob needs more cookies!🍪");
  }

  document.querySelector(".counter").innerHTML = counter;
}
