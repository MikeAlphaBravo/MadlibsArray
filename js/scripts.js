$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var politicianInput = $("input#politician").val();
    var countryInput = $("input#country").val();
    var newsInput= $("input#news").val();
    var bodypartInput = $("input#body-part").val();
    var verbInput = $("input#verb").val();
    var plantInput = $("input#plant").val();

    var Inputs = [];
    Inputs.push(politicianInput, countryInput, newsInput, bodypartInput, verbInput, plantInput);


    var updatedInputs = [];
    updatedInputs.push(Inputs[1], Inputs[0], Inputs[2]);

    updatedInputs.forEach(function(blank) {
      $(".grabIt").append("<li>" + blank + "</li>")
    });
    //   OLD
    //var userInput = $("input#" + blank).val();
    //   $("." + blank).text(userInput);
    //});

    // var different = blanks[0,1,2]

    // var blanks2 = different.push("this", "that");
    // alert(blanks2);

    // $(".politician").text(politicianInput);
    // $(".country").text(countryInput);
    // $(".news").text(newsInput);
    // $(".body-part").text(bodypartInput);
    // $(".verb").text(verbInput);
    // $(".plant").text(plantInput);

    $("#story").show();

    event.preventDefault();
  });
});
