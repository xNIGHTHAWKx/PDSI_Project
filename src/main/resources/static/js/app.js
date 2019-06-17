window.onload = function () {
    var usersDataArray = [
        { index: "111111", password: "123456", role: "teacher" },
        { index: "222222", password: "123456", role: "teacher" },
        { index: "999999", password: "123456", role: "student" },
        { index: "000000", password: "123456", role: "student" }
    ];

    var firstNameInput = document.getElementById("first-name-input");
    var lastNameInput = document.getElementById("last-name-input");
    var indexInput = document.getElementById("index-input");
    var passwordInput = document.getElementById("password-input");
    var loginButton = document.getElementById("login-button");

    loginButton.addEventListener("click", function () {
        usersDataArray.forEach(function (user) {
            if (user.role === "student" && indexInput.value === user.index && passwordInput.value === user.password) document.getElementById("student-href").click();
            if (user.role === "teacher" && indexInput.value === user.index && passwordInput.value === user.password) document.getElementById("teacher-href").click();
            document.getElementById("invalid-credentials").style.display = "block";
        });
    });

    firstNameInput.addEventListener("focus", function () {
        document.getElementById("invalid-credentials").style.display = "none";
    });

    lastNameInput.addEventListener("focus", function () {
        document.getElementById("invalid-credentials").style.display = "none";
    });

    indexInput.addEventListener("focus", function () {
        document.getElementById("invalid-credentials").style.display = "none";
    });

    passwordInput.addEventListener("focus", function () {
        document.getElementById("invalid-credentials").style.display = "none";
    });
}

Dropzone.options.myAwesomeDropzone = {
    paramName: "file", // The name that will be used to transfer the file
    maxFilesize: 20, // MB
    previewTemplate: document.getElementById('drop-template-preview').innerHTML,
    previewsContainer: ".dropzone-previews",

    accept: function (file, done) {
        if (file.name.substr(file.name.lastIndexOf('.') + 1) != "zip") {
            done("????"); // tekst obok w preview???
        }
        else { done("ok"); }
    }
};

function countDownTimer() {
    var countDownDate = new Date("Jun 5, 2019 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

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