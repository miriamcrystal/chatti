$(function () {
  'use strict';
  $('form').submit(function(e) {
    e.preventDefault();
    var username= $('.github-id').val();
    var url= "https://api.github.com/users/" + username;

    var doneFunction=function(templateData){
      debugger
      _.templateSettings.variable = "m";
      var template = _.template(
        $( "script.template" ).html()
      );
      $( "h1" ).after(
        template(templateData)
      );
      $('input[type="text"]').val("");
    }

    $.ajax( {url: url} ).done(doneFunction);

  })

});
