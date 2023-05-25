

/*for (var i = 1; i<9; i++ ){
    console.log( "Exercício 1 Repetição " + i + " blabla");
};*/



var anchor = document.querySelector("#main-navigation").querySelectorAll("a");

for( var i = 0; i < anchor.length; i++){
    if(window.location.href == anchor[i].href) {
        anchor[i].classList.add("active");
    }

    /*if(window.location.href.indexOf("work") > -1) {
        console.log("estou na página work")
        document.body.classList.add("work")
    } else if (window.location.href.indexOf("contacts") > -1){
        document.body.classList.add("contacts")
    } else {
    document.body.classList.add("home")
}*/
}