var apiKey = require("./../.env").apiKey;
var getRepos = require("./../js/github-logic.js").getRepos;


$("form#search-form").submit(function(event){
  event.preventDefault();

  var search = $("input#human-search").val();

  $("#repos").empty();
  $("#search-name").empty();

  getRepos(search);

  $("input#human-search").val("");
});
