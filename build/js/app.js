(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = ("dbb19de226c1d65c37965e4bf707bc7360f0494f");

},{}],2:[function(require,module,exports){
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

},{"./../.env":1,"./../js/github-logic.js":3}],3:[function(require,module,exports){
var apiKey = require("./../.env").apiKey;
var search = require("./../js/github-interface.js").search;

exports.getRepos = function(search){
  $.get('https://api.github.com/users/' + search + '/repos?acess_token=' + apiKey).then(function(response){
    console.log(response);

    $("#search-name").append(search);

    $("ul#repos").append("Repositories: " + "<br>" +
    "<li>" + response[0].name + "<br>" + response[0].description + "</li>" +
    "<li>" +response[1].name + "<br>" + response[1].description + "</li>" +
    "<li>" +response[2].name + "<br>" + response[2].description + "</li>" +
    "<li>" +response[3].name + "<br>" + response[3].description + "</li>" +
    "<li>" +response[4].name + "<br>" + response[4].description + "</li>" +
    "<li>" +response[5].name + "<br>" + response[5].description + "</li>" +
    "<li>" +response[6].name + "<br>" + response[6].description + "</li>" +
    "<li>" +response[7].name + "<br>" + response[7].description + "</li>" +
    "<li>" +response[8].name + "<br>" + response[8].description + "</li>" +
    "<li>" +response[9].name + "<br>" + response[9].description + "</li>" +
    "<li>" +response[10].name + "<br>" + response[10].description + "</li>" +
    "<li>" +response[11].name + "<br>" + response[11].description + "</li>" +
    "<li>" +response[12].name + "<br>" + response[12].description + "</li>" +
    "<li>" +response[13].name + "<br>" + response[13].description + "</li>" +
    "<li>" +response[14].name + "<br>" + response[14].description + "</li>" +
    "<li>" +response[15].name + "<br>" + response[15].description + "</li>" +
    "<li>" +response[16].name + "<br>" + response[16].description + "</li>" +
    "<li>" +response[17].name + "<br>" + response[17].description + "</li>" +
    "<li>" +response[18].name + "<br>" + response[18].description + "</li>" +
    "<li>" +response[19].name + "<br>" + response[19].description + "</li>" +
    "<li>" +response[20].name + "<br>" + response[20].description + "</li>" +
    "<li>" +response[21].name + "<br>" + response[21].description + "</li>" +
    "<li>" +response[22].name + "<br>" + response[22].description + "</li>" +
    "<li>" +response[23].name + "<br>" + response[23].description + "</li>" +
    "<li>" +response[24].name + "<br>" + response[24].description + "</li>" +
    "<li>" +response[25].name + "<br>" + response[25].description + "</li>" +
    "<li>" +response[26].name + "<br>" + response[26].description + "</li>" +
    "<li>" +response[27].name + "<br>" + response[27].description + "</li>" +
    "<li>" +response[28].name + "<br>" + response[28].description + "</li>" +
    "<li>" +response[29].name + "<br>" + response[29].description + "</li>");

  }).fail(function(error){
    $("#search-name").append("no one here by that name." + "<br>" + "nice try, robot.");


  });
};

},{"./../.env":1,"./../js/github-interface.js":2}]},{},[2]);
