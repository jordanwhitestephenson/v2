window.onload = function() {

  var i = 0
  var positionArray = []
  var moduleID
  var saveButtonID
  var positionID
  var headerTextID
  var headerSizeID
  var dynamicID
  var accordionID
  var deleteButtonID
  var navID
  var lastID

  $('#addButton').on('click', function() {
    (function() {
      accordionID = `cb${i++}`
      dynamicID = `ddlViewBy${i++}`
      moduleID = `addModule${i++}`
      positionID = `positionID${i++}`
      deleteButtonID = `deleteID${i++}`
      headerTextID = `headerText${i++}`
      lastID = `accordionContainerID${i++}`
      navID = `navID${i++}`

      var large = `
      <nav class="accordion arrows" id = "${navID}">
        <input type="radio" name="accordion" id="${accordionID}" />
        <section class="box">
          <label class="box-title" for="${accordionID}">
           <div class="dropdown">
              <select id="${dynamicID}" name="dropdown" >
                <option class="dropdown-item" value = "blank" >Choose Module</option>
                <option class="dropdown-item" value = "module1" >MODULE 1</option>
                <option class="dropdown-item" value = "module2" >MODULE 2</option>
                <option class="dropdown-item" value = "module3" >MODULE 3</option>
                </select>
            </div>
            <button class="btn btn-secondary" type="button" id="${deleteButtonID}" aria-haspopup="true" aria-expanded="false">DELETE</button>

            </label>
          <label class="box-close" for="acc-close"></label>
          <div class="box-content accordion_container" id = "${lastID}"></div>
        </section>
        <input type="radio" class="radio" name="accordion" id="acc-close" />
      </nav>`
      $(".create_container").append(large)
      $("[id^='ddlViewBy']").one("change", dropDownChange);
    })()

    function dropDownChange(selectedModule) {
      var dropDownID = selectedModule.target.id
      var dropdown = document.getElementById(dropDownID.toString())
      var module1
      var module2
      if (dropdown) {
        saveButtonID = `saveButton${i++}`
        headerSizeID = `headerTextSize${i++}`
        imageSRCid = `imgLink${i++}`
        paraText = `paraText${i++}`
        ctaText = `ctaText${i++}`
        ctaLink = `ctaText${i++}`
        dropdown.addEventListener('change', dropDownChange, false)
        $(this).off(event)
        var selectedValue = $("#" + dropDownID).val()

        switch (selectedValue) {
          case "module1":
          $(".module2").remove();
          // $(".module1").remove();
            module1 = `<div class="module1" id = "${moduleID}">
                          <h2 class = "text-center module_headline"> MODULE 1 </h2>
                            <form action="" class="module_1_form" method="post">
                            <div class="form-group">
                            <label for="exampleFormControlSelect1">Position On Page</label>
                            <select id="${positionID}" class="form-control template">
                            <option>Select Position</option>
                            <option selected = "selected">1st</option>
                            <option>2nd</option>
                            <option>3rd</option>
                            <option>4th</option>
                            </select>
                            </div>
                              <label for="headerText">Header Text</label>
                              <input type="text" name="headerText" id="${headerTextID}" value=""><br>
                              <label id="HeaderSize" for="headersize">Header Size</label>
                              <input type="number" name="headersize" id="${headerSizeID}" value="42px"><br>

                              <label id="img" for="img">Upload Image</label>
                              <input type="text" name="imgLink" id="${imageSRCid}" value=""><br>

                              <input type="file" name="img" id="img" value=""><br>

                              <label for="paragraphText">Paragraph Text</label>
                              <textarea type="text" name="paragraphText" id="${paraText}" value=""></textarea><br>

                              <label for="ctaText">CTA TEXT</label>
                              <input type="text" name="ctaText" id="${ctaText}" value=""><br>

                              <label for="ctaLink">CTA LINK</label>
                              <input type="text" name="ctaLink" id=${ctaLink}" value=""><br>
                            </form>
                            <div class = "button_container">
                            <button type="button" data-toggle="modal"  data-target="#exampleModalModule1" onClick= "exampleModule1()" class="btn btn-link">EXAMPLE</button>
                            <div class =  "saved_button_class">
                            <button class="btn btn-secondary" type="button" id="${saveButtonID}" aria-haspopup="true" aria-expanded="false">SAVE MODULE 1</button>
                            </div>
                            </div>
                          </div>`
                          if(lastID){
                            $(module1).appendTo("[id=lastID]")
                            console.log(lastID)
                          }

                          // $("[id=lastID]").append


            break;

          case "module2":
            $(".module1").remove();
            // $(".module2").remove();
            module2 = `<div class="module2" id = "${moduleID}">
                          <h2 class="module_2_form toggle">MODULE 2</h2>
                          <div class =  "saved_button_class">
                          <button class="btn btn-secondary" type="button" id="${saveButtonID}" aria-haspopup="true" aria-expanded="false">SAVE MODULE 2</button>
                          </div>
                          <div class="form-group">
                          <label for="exampleFormControlSelect1">Position On Page</label>
                          <select id="${positionID}" class="form-control template">
                          <option>Select Position</option>
                          <option>1st</option>
                          <option selected = "selected">2nd</option>
                          <option>3rd</option>
                          <option>4th</option>
                          </select>
                          </div>
                            <label for="headerText">Module 2 H3 Text</label>
                            <input type="text" name="headerText" id="${headerTextID}" value=""><br>
                            <label id="HeaderSize" for="headersize">Header Size (Default 35px)</label>
                            <input type="number" name="headersize" id="${headerSizeID}" value="42px"><br>

                            <label id="img" for="img">Upload Image</label>
                            <input type="text" name="imgLink" id="${imageSRCid}" value=""><br>

                            <input type="file" name="img" id="img" value=""><br>

                            <label id="HeaderSize" for="headersize">H4 Body Copy</label>
                            <input type="text" name="h4BodyCopy" id="" value="42px"><br>

                            <label for="paragraphText">Paragraph Text</label>
                            <textarea type="text" name="paragraphText" id="${paraText}" value=""></textarea><br>

                            <label for="ctaText">CTA TEXT</label>
                            <input type="text" name="ctaText" id="${ctaText}" value=""><br>

                            <label for="ctaLink">CTA LINK</label>
                            <input type="text" name="ctaLink" id=${ctaLink}" value=""><br>

                          <div class = "button_container">
                            <button type="button" data-toggle="modal" data-target="#exampleModalModule2" onClick= "exampleModule2()" class="btn btn-link">EXAMPLE</button>

                          </div>
                        </div>`
                        $("[id=lastID]").append(module2)
          default:
        }
        var selectedPostion
        $("[id^='positionID']").on("change", dropDownPositionChange);
        function dropDownPositionChange(selectedObject) {
          var select = document.getElementById(`${positionID.toString()}`);
          if (select) {
            select.addEventListener('change', dropDownPositionChange, false)
            $("[id^='positionID'] option:selected").each(function(input) {
              selectedPostion = $(this).val();
            });
          }
        }
        $('body').on("click", '#' + saveButtonID, function() {

          $("[id^='positionID'] option:selected").each(function(i) {
            var $this = $(this);
            selectedPostion = $this.text()
          });
          console.log(selectedPostion)
          var innerButtonText
          var headerText = $('#' + headerTextID).val()
          var imgUploadSRC = $("input[type=file][name=img]").val()
          var imgSRC = $('#' + imageSRCid).val()
          var paraTextSRC = $('#' + paraText).val()
          var ctaTextSRC = $('#' + ctaText).val()
          var ctaLinkSRC = $('#' + ctaLink).val()
          var headerTextSizeSRC = `${$('#' + headerSizeID).val()}px`
          var resultingBody

          switch (selectedValue) {
            case "module1":
              resultingBODY = `<div class="module1 col-sm-6 ">
            <img class = "img-responsive" id="viewImg" src="${imgSRC}" />
            </div>
            <div class="col-sm-6 flex_box_column">
              <h1 id="viewh1_1st" style = "font-size: ${headerTextSizeSRC}" class="view1 text-center text-uppercase cx-heavy-brand-font">  ${headerText}  </h1>
              <p class="cx-brand-font text-center" id="viewPara"> ${paraTextSRC}</p>
              <div class="col-xs-12 flex_box_column " style="">
                <div class="col-xs-11 col-sm-12 col-md-12 col-lg-10 cx-heavy-brand-font">
                  <a id="cta_href" href="${ctaLinkSRC}" class=" cx-button full-width  text-uppercase text-center">${ctaTextSRC}</a></div>
              </div>
            </div>`
              switch (selectedPostion) {
                case "1st":
                  $(".FIRST_VIEW_CONTAINER").append(resultingBODY)
                  positionArray[0] = resultingBODY
                  break;

                case "2nd":
                  $(".SECOND_VIEW_CONTAINER").append(resultingBODY)
                  positionArray[1] = resultingBODY
                  break;
              }
              break

            case "module2":
              resultingBODY = `<div class="module2 col-sm-6">
              <img class = "img-responsive" id="viewImg" src="${imgSRC}" />
              </div>
              <div class="col-sm-6 flex_box_column">
                <h1 id="viewh1_1st" style = "font-size: ${headerTextSizeSRC}" class="view1 text-center text-uppercase cx-heavy-brand-font">${headerText}  </h1>
                <p class="cx-brand-font text-center" id="viewPara"> ${paraTextSRC}</p>
                <div class="col-xs-12 flex_box_column " style="">
                  <div class="col-xs-11 col-sm-12 col-md-12 col-lg-10 cx-heavy-brand-font">
                    <a id="cta_href" href="${ctaLinkSRC}" class=" cx-button full-width  text-uppercase text-center">${ctaTextSRC}</a></div>
                </div>
              </div>`
              switch (selectedPostion) {
                case "1st":
                  $(".FIRST_VIEW_CONTAINER").append(resultingBODY)
                  positionArray[0] = resultingBODY
                  break;

                case "2nd":
                  $(".SECOND_VIEW_CONTAINER").append(resultingBODY)
                  positionArray[1] = resultingBODY
                  break;
              }
              break;
              console.log(positionArray)
          }
          $("[id^='saveButton']").html("SAVED")
          var saved = document.getElementById("[id^='saveButton']");
          console.log(saved)

          if ($("[id^='saveButton']").text = "SAVED") {
            var joinedArray = positionArray.join('')
            $(".boxclass").val(joinedArray)
            $('#htmlButton').on("click", function() {
              $(".create_container").hide()
              $(".html_container").show()
              $(".view_container").hide()
              $("#create").removeClass('active')
              $("#preview").removeClass('active')
              $("#html").addClass('active')
            })
          }
        })

      }
    }


    $('body').on("click", '#' + deleteButtonID, function() {
      var div = document.getElementById(navID)
      var filtered = $("[id=navID]").has("[id=deleteButtonID]")
      if(div) {
        div.parentNode.removeChild(div)
      }
    })

  })

}
