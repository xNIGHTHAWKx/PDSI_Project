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
  
  accept: function(file, done) {
    if (file.name.substr(file.name.lastIndexOf('.') + 1) != "zip") {
      done("????"); // tekst obok w preview???
    }
    else { done("ok"); }
  }
};
