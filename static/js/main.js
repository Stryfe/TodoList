if (typeof(window.console) == "undefined") { console = {}; console.log = console.warn = console.error = function(a) {}; }

$(function () {
  var counter = 0;

  $('#addList').on('click', function() {
      var tmpl = $('#listTmpl').html();
      $('#formList').append(tmpl);
  });

  $('#saveList').on('click', function() {
  });

  $('[data-app-delete-btn]').on('click', function() {
      console.log('delete');
  });
});
