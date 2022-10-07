import QuoteBox from "./modules/quote_box.js"

document.body.onload = init;

let background_image = "C:\jflkda";


//construct a quote box here
var quote_box = new QuoteBox("#1357BE", "#FFFFFF");

//create the webpage here dynamically
function init() {
    //initialize the background color of the document
    document.body.style.background = "#0D3AA9";
    document.body.style.backgroundImage = "url('" + background_image + "');";

    //render our quote box
    document.body.appendChild(quote_box.render());

    //render a github extension
}

//get an image from a local file/from the internet
function set_background() {
    var file = background_image.target.files[0];
    if(!file){
        return
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        //do something with these contexts
    };
    reader.readAsText(file);
    }

    function displayContents(contents) {
    var element = document.getElementById('file-content');
    element.textContent = contents;
    }

    document.getElementById('file-input')
    .addEventListener('change', readSingleFile, false);
}