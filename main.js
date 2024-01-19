//const myHeading = document.querySelector("h1");
//const, const variable, and .querySelector grabs reference to heading
//This overrides the heading stuff that was done in style.css
//myHeading.textContent = "¡Hola, mundo!";
//Event code takes user input and does stuff
//document.querySelector("html").addEventListener("click", function () {
//    alert("Ouch! Stop poking me!");
//  });
  //document.querySelector selects the <html> element
  //addEventListener() is the function 
//Switching images when clicked on them
  const myImage = document.querySelector("img");
  myImage.onclick = function() {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images-new-site/Free_Copyright.png") {
        myImage.setAttribute("src", "images-new-site/pyramids-image.jpeg")
    } else {
       myImage.setAttribute("src", "images-new-site/Free_Copyright.png") 
    }
  } ; 
//First line stores reference to <img> element from html in myImage variable
//Next, onclick event handler equal to function
//Function retrieves the value of the image's src attribute
//Uses condition to check if src value is equal to the path of the original image
//If it is equal (the image is the same), it gets flipped
//If it's not equal, the image returns, back to its original state

//Takes references to button and h1 from html and stores them in variables
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName (){
 const myName = prompt("Please enter your name.")   ;
 if (!myName){
    setUserName();
 } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = 'Greetings,' + myName;   
 }
 
}
//Prompt function displays dialog box that asks for data, alert displays dialog box and that's it
//Function calls on API localStorage, which stores data in the browser
//setItem() function creates and stores data item called 'name' and sets its value to the myName variable, which has user entry data
//textContent of the heading becomes a string and the user's newly formed name
//Conditional was added to check if the user entered or hasn't entered a blank name
if (!localStorage.getItem("name")){
    setUserName();
} else {
const storedName = localStorage.getItem("name");
myHeading.textContent = 'Greetings,' + storedName;
}
//!localStorage.getItem("name") checks to see if name exists, if not, it runs the setUserName function
//If it exists (from past use) then that name is set

myButton.onclick = function(){
   setUserName(); 
}


