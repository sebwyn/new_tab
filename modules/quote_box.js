import random_choice from "./random.js"

export default class QuoteBox {
    constructor(background_color, text_color) {
        //send the request for getting a quote
        this.quote = "Loading...";
        this.text_color = text_color;
        this.background_color = background_color;
        this.generate_quote();
    }

    generate_quote(){
        console.log("generating a new quote");
        this.xhr = new XMLHttpRequest();
        this.xhr.open("GET", "https://programming-quotes-api.herokuapp.com/Quotes", true);
        this.xhr.addEventListener("readystatechange", () => { this.handle_api_response() }, false)
        this.xhr.send();
    }

    refresh() {
        this.text_node.textContent = this.quote
    }

    handle_api_response(quote_box) {
        //the request has finished
        if(this.xhr.readyState == 4){
            let quotes = JSON.parse(this.xhr.responseText)
            console.log(quotes);
            //choose a quote and update node here
            let quote = random_choice(quotes);
            this.quote = quote.en;
            this.refresh()
        }
    }

    // this function will change when we have objects that allow for organizing of components
    render(){
        if(document.readyState === "complete"){
            console.log("returning node now")
            //edit our div element to have rounded corners
            this.node = document.createElement("div");
            this.node.style.borderRadius = "25px";
            this.node.style.background = this.background_color;
            this.node.style.padding = "25px 25px 25px 25px";
            this.node.style.textAlign = "center";
            this.node.onclick = () => { this.generate_quote(); };

            this.text_node = document.createElement("p");
            this.text_node.textContent = this.quote;
            this.text_node.style.color = this.text_color;

            this.node.appendChild(this.text_node);
            return this.node;
        }
    }
}