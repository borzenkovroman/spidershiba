$(function () {
  function myFunction() {
    var copyText = document.getElementById("contract");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }
});