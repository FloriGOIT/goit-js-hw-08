const e=document.querySelector(".feedback-form");e.addEventListener("input",_.throttle((t=>{let a={email:e.elements.email.value,message:e.elements.message.value},l=JSON.stringify(a);localStorage.setItem("feedback-form-state",l)}),500)),e.addEventListener("submit",_.throttle((t=>{t.preventDefault();let a=localStorage.getItem("feedback-form-state");console.log("User info: ",JSON.parse(a)),localStorage.removeItem("feedback-form-state"),e.reset()}),500));
//# sourceMappingURL=03-feedback.4e3eb842.js.map
