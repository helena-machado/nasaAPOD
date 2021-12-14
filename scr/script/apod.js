$.ajax({
  url: `https://api.nasa.gov/planetary/apod?api_key=hjhwrycf6i2tE95zSPWXwJG1kaKJWElWUUvRxjf6`,
  type: "GET",

  success: function (response) {
    $("#title").text(response.title);

    if (response.midia_type === "video") {
      $("#img").hide();
      $("#video").attr("src", response.hdurl).show();
    } else {
      $("#video").hide();
      $("#img").attr("src", response.hdurl).show();
    }

    $("#explanation").text(response.explanation);

    if (response.copyright === undefined) {
      $("#copyright").text(`Copyright: Unknown.`);
    } else {
      $("#copyright").text("Copyright: " + response.copyright);
    }
  },
});

$("#button").click(function () {
  let date = $("#date").val();

  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=hjhwrycf6i2tE95zSPWXwJG1kaKJWElWUUvRxjf6&date=${date}`,
    type: "GET",
    success: function (response) {
      $("#title").text(response.title);

      if (response.media_type === "video") {
        $("#img").hide();
        $("#video").attr("src", response.url).show();
      } else {
        $("#video").hide();
        $("#img").attr("src", response.hdurl).show();
      }

      $("#explanation").text(response.explanation);

      if (response.copyright === undefined) {
        $("#copyright").text(`Copyright: Unknown.`);
      } else {
        $("#copyright").text("Copyright: " + response.copyright);
      }
    },
  });
});
