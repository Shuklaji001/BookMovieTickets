check = ()=>{
        event.preventDefault();
        var inp = document.getElementById("code").value == "1234";
        if(inp){
            alert("Payment Successful!!");
            window.location.href="../pages/movies.html"
        }
        else{
            alert("Incorrect OTP");
        }
    }

document.querySelector("button").addEventListener("click", check)
