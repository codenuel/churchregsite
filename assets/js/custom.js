// const newUser = document.getElementById("new-user");
// const reUser = document.getElementById("re-user");
const nextButton = document.getElementById("next-button");

document.getElementById("form2").style.display="none";
document.getElementById("form3").style.display="none";



if(document.getElementById('new-user').clicked == true)
{
   alert("button was clicked");
}


document.getElementById('next-button').addEventListener('click', () => {
document.getElementById('form1').style.display = 'none';
document.getElementById('form3').style.display = 'none';
document.getElementById('form2').style.display = 'block';
})

// document.getElementById('next-button').addEventListener('click', () => {
// document.getElementById('form1').style.display = 'none';
// document.getElementById('form2').style.display = 'none';
// document.getElementById('form3').style.display = 'block';
// })


