// values for username and password logins
var user1 = "RegularUser";
var user2 = "ShinyUser";
var pass1 = "RegularUser123";
var pass2 = "ShinyUser123";

// values for input fields
var userName = document.getElementById("username");
var passWord = document.getElementById("password");

function submitButton() {
  try{
    if (userName.value === user1 && passWord.value === pass1) {
      window.open("not-shiny-homepage.html");
      window.close("login.html");
    }
    else if (userName.value === user2 && passWord.value === pass2) {
      window.open("shiny-homepage.html");
      window.close("login.html");
    }
    else {
      while (true) {
        if (userName.value === "" && passWord.value === "") {
          alert("You must fill up all fields!");
          break;
        }
        if (userName != user1 || userName != user2) {
          alert("Incorrect username!");
          break;
        }
        if (passWord.value != pass1 || passWord.value != pass2) {
          alert("Incorrect password!");
          break;
        }
      }
    }
  }
  catch (error){
    console.log(error);
  }
}

function showPassword(){
  var x = document.getElementById("password");
  if (x.type === "password"){
    x.type = "text";
  }
  else {
    x.type = "password";
  }
}


function logOut(){
  if (!window.closed("not-shiny-homepage.html")){
    window.open("login.html");
    window.close("not-shiny-homepage.html");
  }
  else if (!window.closed("not-shiny-about.html")){
    window.open("login.html");
    window.close("not-shiny-about.html");
  }
  else if (!window.closed("not-shiny-case-tips.html")){
    window.open("login.html");
    window.close("not-shiny-case-tips.html");
  }
  else if (!window.closed("not-shiny-case-samples.html")){
    window.open("login.html");
    window.close("not-shiny-case-samples.html");
  }
  else if (!window.closed("shiny-homepage.html")){
    window.open("login.html");
    window.close("shiny-homepage.html");
  }
  else if (!window.closed("shiny-about.html")){
    window.open("login.html");
    window.close("shiny-about.html");
  }
  else if (!window.closed("shiny-case-tips.html")){
    window.open("login.html");
    window.close("shiny-case-tips.html");
  }
  else if (!window.closed("shiny-case-samples.html")){
    window.open("login.html");
    window.close("shiny-case-samples.html");
  }
}