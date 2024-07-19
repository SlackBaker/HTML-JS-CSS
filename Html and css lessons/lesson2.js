document.getElementsByClassName("myButton")[0].onclick = function(){

    let myName = document.getElementsByClassName("myButton").value;

    if (myName === ""){
        alert("You must write the Login");
    }
}
