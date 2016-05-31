var apiKey = require("./../.env").apiKey;
var search = require("./../js/github-interface.js").search;

exports.getRepos = function(search){
  $.get('https://api.github.com/users/' + search + '/repos?acess_token=' + apiKey).then(function(response){
    console.log(response);

    $("#search-name").append(search);

    $("ul#repos").append("Repositories: ");

    response.forEach(function(userRepo){
      $("ul#repos").append("<li>" + userRepo.name +"<br>" + userRepo.description + "</li>");
    });

  }).fail(function(error){
    $("#search-name").append("no one here by that name." + "<br>" + "nice try, robot.");


  });
};
