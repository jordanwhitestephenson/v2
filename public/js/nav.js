$(document).ready(function() {
  //TAB FUNCTIONALITY
  $(".html_container").hide()
  $(".view_container").hide()
  $(".create_container").show()
  // $(".module1").hide();
  $(".module2").hide();

  $('#create').on('click', function() {
    $("#preview").removeClass('active')
    $("#html").removeClass('active')
    $("#create").addClass('active')
    $(".html_container").hide()
    $(".view_container").hide()
    $(".create_container").show()

  })
  $('#html').on('click', function() {
    $(".create_container").hide()
    $(".html_container").show()
    $(".view_container").hide()
    $("#create").removeClass('active')
    $("#preview").removeClass('active')
    $("#html").addClass('active')

  })
  $('#preview').on('click', function() {
    $(".create_container").hide()
    $(".html_container").hide()
    $(".view_container").show()
    $("#create").removeClass('active')
    $("#html").removeClass('active')
    $("#preview").addClass('active')
  })

})
