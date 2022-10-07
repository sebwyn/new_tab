import QuoteBox from "./modules/quote_box.js"

document.body.onload = init;

//construct a quote box here
var quote_box = new QuoteBox("#1357BE", "#FFFFFF");

//create the webpage here dynamically
function init() {
    //initialize the background color of the document
    document.body.style.background = "#0D3AA9";

    //render our quote box
    document.body.appendChild(quote_box.render());

    //render a github extension
}