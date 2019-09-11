$(document).ready(function() {
  function send(data) {
    fetch("/", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json"
      },
      body: JSON.stringify({ id: data.attr("id"), body: data.val() })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }

  //Sending Data to the server
  $("#press1").on("click", e => {
    e.preventDefault();
    send($("#grab1"));
    $("#log1").html("Successfully sent");
  });

  //Sending Data to the server
  $("#form").submit(function(e) {
    e.preventDefault();
    send($("#emailsend"));
    send($("#pwdsend"));
  });
});
