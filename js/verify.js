$(document).ready(function(){
  $('#resend').click(function(e) {
    var code = Math.floor(1e2 + (Math.random() * 2e2));
    alert('Tu código ' + ' LAB ' + code);
      
    localStorage.code = code;
      
    localStorage.getItem(code);
  	window.location.href = 'verify.html'
      
      });
			$('#nextbtn').attr('disabled', true);
			$('#input-cod').keyup(function () {
				if ($(this).val() === localStorage.code) {
					$('#nextbtn').attr('disabled', false);
				}
				else {
					$('#nextbtn').attr('disabled', true);
				}
			});

			// siguiente pantalla

			$('#nextbtn').click(function () {
				window.location.href = 'formulario.html';
			});

})
