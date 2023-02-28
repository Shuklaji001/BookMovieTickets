import { allUsers } from "../component/global-variable.js";
import { getData, setData } from "../component/local-storage.js";


let  dataArr = getData(allUsers) || [];


// User Registration Function
const SignUp = (event)=> {
  event.preventDefault();
  var email_up = document.getElementById("email").value;
  var username_up = document.getElementById("username").value;
  var number_up = document.getElementById("number").value;
  var password_up = document.getElementById("password").value;

  var dataobj = {
    email: email_up,
    username: username_up,
    number: number_up,
    password: password_up,
  }

  let existEmail = dataArr.find((el) => el.email === dataobj.email);
  let existUsername = dataArr.find((el) => el.username === dataobj.username);

  console.log(existEmail);
  console.log(existUsername);

  if (existEmail) {
    alert("Email already exists");
  } else if (existUsername) {
    alert("Username already exists");
  }
  else if(number_up.length!=10){
    alert("Please enter a valid phone number")
  }
   else {
    dataArr.push(dataobj);
    setData(allUsers,dataArr)
    console.log(dataobj,dataArr);
    window.location.href = "../index.html";
  }
}

document.querySelector("form").addEventListener("submit", SignUp);
