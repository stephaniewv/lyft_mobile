$(document).ready(function () {
  $(document).ready(function () {
    $(function () {
      $(".dropdown-menu li a").click(function () {
        let cloneImg = $(this).children().clone(false);
        refreshComboBox($(".btn"), $(this).data("value"));
        $(".btn").prepend(cloneImg);
      });
    });

    function refreshComboBox(elem, selectedValue) {
      // remove TEXT NODE
      $(elem)
        .contents()
        .filter(function () {
          return this.nodeType == 3;
        }).remove();

      $(elem).find(":first-child").remove();

      $(elem).val(selectedValue);
    }

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

  $('#next').click(function (e) {
    var code = Math.floor(1e2 + (Math.random() * 2e2));
    alert('Tu código ' + ' LAB ' + code);

    localStorage.code = code;

    localStorage.getItem(code);
    window.location.href = 'verify.html'

  });





});


