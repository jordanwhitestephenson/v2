$(document).ready(function() {
  var div = document.getElementById("saveHTMLButton");
  var curText = $("#saveHTMLButton").text()
  var divClone = $(".replace_html_here").clone();

  div.addEventListener("click", function() {
    var editHTML = $('textarea#box:input').val();
    if (this.innerText == curText) {
      div.innerText = "SAVED";
      $('.replace_html_here').html('<div>' + editHTML + '</div>')
    } else {
      div.innerText = curText;
      $(".replace_html_here").replaceWith(divClone.clone());
    }
  }, false);

})
