function exampleModule1() {
  var model = `<div class="modal" id="exampleModalModule1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog template" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">MODULE 1</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <img src = "images/module1.png" class = "img-responsive">
      </div>
    </div>
  </div>
</div>
`
  $('#modelContainer').append(model)
}

function exampleModule2() {
  var model = `<div class="modal" id="exampleModalModule2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog template" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">MODULE 2</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <img src = "images/module2.png" class = "img-responsive">
    </div>
  </div>
</div>
</div>
`
  $('#modelContainer').append(model)
}
