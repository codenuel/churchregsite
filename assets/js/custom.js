const newUser = document.getElementById("new-user");
const reUser = document.getElementById("re-user");
const nextButton = document.getElementById("next-button");


function selectUser(){
    if(newUser){
        alert("New")
    }else if(reUser){
        alert("registered before")
    }
    else{
        alert("Please choose an option")
    }
}
nextButton.addEventListener('click', selectUser)
