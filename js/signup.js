$(document).ready(function() {
  $(function() {
    $(".dropdown-menu li a").click(function() {
      console.log($(this));
      console.log($("select-country"));
      var img = 
      $(".btn:first-child").appendChild($(this).innerHTML);
      $(".btn:first-child").val($(this).text());
    });
  });
});

// next

$('#next').attr('disabled', true);
$('#number').keyup(function () {
  if (($(this).val().length) === 15) {
    $('#next').attr('disabled', false);
  }
  else {
    $('#next').attr('disabled', true);
  }
});

// generar codigo

$('#next').click(function(e) {
  var code = Math.floor(1e2 + (Math.random() * 2e2));
  alert('Tu código ' + ' LAB ' + code);

  localStorage.code = code;

  localStorage.getItem(code);
  window.location.href = 'verify.html'

});




