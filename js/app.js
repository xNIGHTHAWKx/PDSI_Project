
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