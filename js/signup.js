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

