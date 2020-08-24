function loadJSON (){
    fetch("./person.json").then((response)=> response.json()).then(result=> console.log(result))
}

loadJSON();