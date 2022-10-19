$ = jQuery;
let video = document.getElementById("myVideo");
let elem = document.createElement("code");
let main = document.getElementsByTagName("main")[0];
elem.innerText = "DURATION";
video.after(elem);

video.onloadedmetadata = function () {
  console.log(`Meta Loaded! Duration of video:  ${video.duration}`);
  //   let totalDuration = video.duration;
  //   return totalDuration;
};

var interval = setInterval(() => {
  console.log(video.currentTime);
  elem.innerText = video.currentTime;
}, 900);

video.addEventListener("ended", myHandler, false);
function myHandler() {
  $(video).slideUp(600);
  $("#form").slideDown(600);
  $("#showVideo").click(function () {
    $(video).slideDown(600);
    $("#form").slideUp(600);
  });
  clearInterval(interval);
  console.log("Ended");
}
