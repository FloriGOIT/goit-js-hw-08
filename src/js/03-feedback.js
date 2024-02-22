/*onst formular = document.querySelector("form");
console.log(formular);
const inputKey = "user-input";

formular.addEventListener("input", (event) => {let addInput = event.target.value;
                                               localStorage.setItem(inputKey, addInput);});
formular.addEventListener("submit", (event) => {event.preventDefault();
                                                localStorage.removeItem(inputKey);
                                                formular.reset();}) 
....am de luat valuarea din imput si inserat in localStorage 
...la submit, sterg informatia din local storage si resetez inputul*/ 

const form = document.querySelector(".feedback-form");
const formKey = "feedback-form-state";

form.addEventListener("input", _.throttle(event => {let x = { email: form.elements.email.value,
                                                             message: form.elements.message.value};                               
                                                   let xJSON = JSON.stringify(x);
                                                   localStorage.setItem(formKey, xJSON)}, 500))

form.addEventListener("submit", _.throttle((event) =>{event.preventDefault();
                                           let y = localStorage.getItem(formKey);
                                           console.log("User info: ", JSON.parse(y));
                                           localStorage.removeItem(formKey);
                                           form.reset();}, 500))




                                                                                 

