
Dropzone.options.myAwesomeDropzone = {
  paramName: "file", // The name that will be used to transfer the file
  maxFilesize: 20, // MB
  previewTemplate: document.getElementById('drop-template-preview').innerHTML,
  previewsContainer: ".dropzone-previews",
  
  accept: function(file, done) {
    if (file.name.substr(file.name.lastIndexOf('.') + 1) != "zip") {
      done("????"); // tekst obok w preview???
    }
    else { done("ok"); }
  }
};
// ------------------------ //
function confirm_exit() {
  var answer = confirm("Czy na pewno chcesz zakończyć pracę przed końcem czasu?");
  if (answer) {
    location.href = "index.html";
  }
  else {
    // nothing
  }
}
function countDownTimer() {
  var countDownDate = new Date("Jun 5, 2019 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("zakoncz_timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("zakoncz_timer").innerHTML = "EXPIRED";
    }
  }, 1000);
}