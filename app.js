const sign_in_btn = document.querySelector("#sign-in-btn");//to return first element that matches the specified CSS 
const sign_up_btn = document.querySelector("#sign-up-btn");//Selector in this case select elemnts with ID sign-in-btn and 
const container = document.querySelector(".container");//#sign-up-btn as well as the container class
//constant variables 
sign_up_btn.addEventListener('click', () => {//attaches an event handler to sign_up_btn and sign_in_btn and it adds not
    container.classList.add("sign-up-mode");// removes, on Click it would add such event but unlike the OnClick 
    
});



sign_in_btn.addEventListener('click', () => {//it can add multiple events
    container.classList.remove("sign-up-mode");//The classList property returns the class name of an element, as a DOMTokenList object.
    //The classList property is read-only, however, you can modify it by using the add() and remove() methods.
    //in the first classList, we added sign-up-mode to the container class and we removed it when in sign_in_btn
    
});
 
/*
querySelector is kind of like jquery, which is grabbing an element and restoring/return it to us
so here we create 3 constant variables one for the signin, one for the signup and one for the container (which has everything written inside of it) also fair warning, querySelectore only ever returns one element, so if i were to give the same ID signinbtn to smth on top it would choose the top rather tham the bottom

the only way to grab all is document.querySelectorAll which return a collection of elements 
*/

/*
we created 2 event listeners with 2 parameters, the first parameter is the type of event we're listening, which is 'click' in this case so when we click smth must happen, the 2nd parameter is an arrow function with an empty parameter
that will show the event after clicking

 
*/

/* 
The classList property returns the class name of an element, as a DOMTokenList object.
classList is read-only, however that can be changed by adding functions like add(), remove(), toggle(), replace()
in the first event listen we made an add Class List it adds a sign-up-mode class name, which you can write in CSS, which means it adds the attributes that are written in this class to that variable which is container so basically the whole page 

now the 2nd event listener has the remove, so any CSS code with the class name sign-up-mode will not be included to that variable during that event, it doesn't get any attributes from this class
*/