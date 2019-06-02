window.onload = function () {
    var usersDataArray = [
        { index: "teacher1", password: "123456", role: "teacher" },
        { index: "teacher2", password: "123456", role: "teacher" },
        { index: "student1", password: "123456", role: "student" },
        { index: "student2", password: "123456", role: "student" }
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

    function alphaOnly(event) {
        var key = event.keyCode;
        return ((key >= 65 && key <= 90) || key == 8);
    }
}

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