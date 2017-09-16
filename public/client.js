// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html


$(function() {
  console.log('hello world :o');
  $('form').submit(function(event) {
    event.preventDefault();
    $("p").remove(); 
    const url = $('input').val();
    $.post('/tiny?' + $.param({url: url}), function(data) { //this posts as query
      console.log(data); 
      $('<p></p>').html(`<h4>Voila!, Your url shortened to ${data}</h4>`).appendTo('div');
      $('input').val('');
      $('input').focus();
    });
  });
});
