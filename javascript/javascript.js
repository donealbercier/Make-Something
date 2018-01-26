$(document).ready(function(){
// console.log("we've got this");
// var webData = $.getJSON("http://localhost:8080/greeting");
// $("#change").html("<h1>"+webData+"</h1>");
// console.log(webData);
// Can also be included with a regular script tag
import Typed from 'typed.js';

var options = {
  strings: ["<i>First</i> sentence.", "&amp; a second sentence."],
  typeSpeed: 40
}

var typed = new Typed(".element", options)
});
