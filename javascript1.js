$(function (response_body) {
  $("#searchform").change(function (e) {
    e.preventDefault();
    let input = $("#searchform").val();

    $.ajax({
      url: "https://food2fork.com/api/search?key=e575e3859137c773dbe645d95348cb43&q=" + input,
      context: document.body,
      method: 'GET',
    }).done(function(res) {
      let output = JSON.parse(res);
      //for the cards
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
    //end of the cards - challenge
    for (let j = 0; j< Math.floor(Math.random()); j--) {
      $(document).ready(function(){
      $(document).on('click', '#button', function (e) {
        e.preventDefault();
      $('#challenge_img').attr("src", output.recipes[j].image_url);
      $('#challenge_p').text(output.recipes[j].title);
      console.log(output.recipes[j].title);

    });
  });
};
    // end of challenge
    });
  })
})
