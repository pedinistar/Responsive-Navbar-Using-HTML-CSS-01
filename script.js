const crsr = document.querySelector("#cursor");
const main = document.querySelector("body");

main.addEventListener("mousemove", function (dets) {
  crsr.style.top = dets.y + "px";
  crsr.style.left = dets.x + "px";
});
