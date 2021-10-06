$(document).ready(function () {
  
  const sendEmail = (params) => {
    const templateParams = {
      name: $("#name").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
      message: $("#message").val(),
    };

    try {
      emailjs
        .send("service_z5srcge", "template_1b0piqg", templateParams)
        .then((res) => {
          console.log("success", res.status);
          $("#submit").remove(), $("#mail_success").fadeIn(500);
        });
    } catch (err) {
      console.log("failed", res.status);
      $("#mail_fail").fadeIn(500),
        $("#send_message")
          .removeAttr("disabled")
          .attr("value", "Send The Message");
    }
  };

  $("#send_message").click(function (a) {
    a.preventDefault();
    var b = !1,
      c = $("#name").val(),
      d = $("#email").val(),
      e = $("#phone").val(),
      f = $("#message").val();
    if (
      ($("#name,#email,#phone,#message").click(function () {
        $(this).removeClass("error_input");
      }),
      0 == c.length)
    ) {
      var b = !0;
      $("#name").addClass("error_input");
    } else $("#name").removeClass("error_input");
    if (0 == d.length || "-1" == d.indexOf("@")) {
      var b = !0;
      $("#email").addClass("error_input");
    } else $("#email").removeClass("error_input");
    if (0 == e.length) {
      var b = !0;
      $("#phone").addClass("error_input");
    } else $("#phone").removeClass("error_input");
    if (0 == f.length) {
      var b = !0;
      $("#message").addClass("error_input");
    } else $("#message").removeClass("error_input");
    0 == b &&
      ($("#send_message").attr({ disabled: "true", value: "Sending..." }),
      sendEmail());
  });
});

// $.ajax({
//     url: "../email.php",
//     type: "POST",
//     dataType: "JSON",
//     data: {
//       name: c,
//       email: d,
//       phone: e,
//       message: f,
//     },
//     success: function (a) {
//       "sent" == a.res
//         ? ($("#submit").remove(), $("#mail_success").fadeIn(500))
//         : ($("#mail_fail").fadeIn(500),
//           $("#send_message")
//             .removeAttr("disabled")
//             .attr("value", "Send The Message"));
//     },
//   })

// $.post("../email.php", $("#contact_form").serialize(), function (a) {
//   "sent" == a.res
//     ? ($("#submit").remove(), $("#mail_success").fadeIn(500))
//     : ($("#mail_fail").fadeIn(500),
//       $("#send_message")
//         .removeAttr("disabled")
//         .attr("value", "Send The Message"));
// })
