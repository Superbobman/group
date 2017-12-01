

$(window).on('scroll',function() {
   var scroll = $(window).scrollTop();
   if (scroll < 10) {
    $("#sticky-header").removeClass("sticky");
   }else{
    $("#sticky-header").addClass("sticky");
   }
  });



  $(function () {
    $("#searchform").change(function (e) {
      e.preventDefault();
      let input = $("#searchform").val();

      $.ajax({
        url: "https://food2fork.com/api/search?key=e575e3859137c773dbe645d95348cb43&q=" + input,
        context: document.body,
        method: 'GET',
      }).done(function(res) {
        let output = JSON.parse(res);
        for (let i = 0; i < Math.floor(Math.random() * 4 + 1); i++) {
          $(document).ready(function(){
          $("#card1img").attr("src", output.recipes[i].image_url);
          $("#card1name").text(output.recipes[i].title);
          $("#card2img").attr("src", output.recipes[i+1].image_url);
          $("#card2name").text(output.recipes[i+1].title);
          $("#card3img").attr("src", output.recipes[i+2].image_url);
          $("#card3name").text(output.recipes[i+2].title);
          $("#card1link").attr("href", output.recipes[i].source_url);
          $("#card2link").attr("href", output.recipes[i+1].source_url);
          $("#card3link").attr("href", output.recipes[i+2].source_url);
        });
        }
      });
    })
  })


  function calsPerDay() {
    function find(id) { return document.getElementById(id) }

    var age = find("age").value
    var height = find("height").value
    var weight = find("weight").value
    var result = 0
    if (find("male").checked)
      result = 66.47 + (13.75 * weight) + (5.0 * height - (6.75 * age))
    else if (find("female").checked)
      result = 665.09 + (9.56 * weight) + (1.84 * height - (4.67 * age))
    find("totalCals").innerHTML = Math.round( result )
  }
  calsPerDay()
