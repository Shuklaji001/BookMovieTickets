// Generating 4 digit otp
let otp = Math.floor(Math.random() * 9000) + 1000
console.log(otp);
alert(otp)

// verifying the otp
const check = (event)=>{
        event.preventDefault();
       
        var inp = document.getElementById("code").value == otp;
        if(inp){
            alert("Payment Successful!!");
            window.location.href="../pages/movies.html"
        }
        else{
            alert("Incorrect OTP");
        }
    }

document.querySelector("button").addEventListener("click", check)
