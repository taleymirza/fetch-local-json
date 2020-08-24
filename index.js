/**
 * Author: Taley'a Mirza
 * @taleymirza
 * 
 * A Brief Introduction to Fetch API
 * 
 * Fetch method takes first parameter for the path to the resource you want to fetch, it sends request to that URL
 * and it return a promise that means we can have waiting time in order to
 * get response
 * 
 * For a promise, we always add a then() method after fetch() method to handle the data when we get the response
 * from the server.
 * The first then() of fetch returns an HTTP response, not the actual JSON. To extract the JSON body content from the response, we use the json() method in first then()
 * this json() method return a promise as well so in order to handle that promise, we add another then() method to actually do what we
 * want to do with the data, in this example we are just logging output to the console.
 * 
 * 
 * Error Handling:
 * 
 * we can also chain a method catch() after each then to cater the error if we don't get the response
 * from the server, 
 * catch(error) always have a parameter in which we get the error why we could not recieve the data
 * and we can log it into console or show the error in some alert or inline error span if required.
 * This is called error handling
 */

function loadJSONfromFile() {
    /**
     * Author: Taley'a Mirza
     * @taleymirza
     * 
     * This method is created to show how to load a JSON file from
     * a local setup
     * 
     * Note: Fetch doesn't support local files, in order to run this 
     * method, please open the extension tab in vscode and download this
     * extension to serve your files from a server (Live Server by Ritwick Dey)
     * https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
     */

    fetch("./person.json")
        // in first then we are extracting JSON from Response Object
        .then((response) => response.json())
        // in the second then, we get the JSON and we are logging it to console
        .then(result => console.log(result))
}

function loadJSONfromServer() {
    /**
     * Author: Taley'a Mirza
     * @taleymirza
     * 
     * This method is created to show how to load a JSON file from
     * a resource that is already served on a server 
     * In this example JSON is served on https://jsonplaceholder.typicode.com
     * 
     * This fetch request will fetch the data from above server 
     */

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

loadJSONfromFile();
loadJSONfromServer();