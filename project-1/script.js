var dynamicTitle = "Dynamic Content Section";
var dynamicText = "This content is injected using JavaScript.";

var titleElement = document.getElementById("dynamic-title");
var contentElement = document.getElementById("dynamic-content"); 

titleElement.innerText = dynamicTitle;
contentElement.innerText = dynamicText;