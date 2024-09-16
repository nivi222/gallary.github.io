const inputs = document.querySelectorAll(".input");
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

      function go()
      {
        debugger;
          var username = document.querySelector("#username").value;
          var email = document.querySelector("#email").value;
          var phone = document.querySelector("#phone").value;
          var message = document.querySelector("#message").value;

        if(username == ""){
          alert("username is empty");
        }else if(email == ""){
          alert("email is empty");
        }else if(phone == ""){
          alert("phone is empty");
        }else if(message == ""){
          alert("message is empty");
        }else{
          alert("message send successfully");
        }
        window.location.assign("index.html");
      }
