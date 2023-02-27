var getDataArr = JSON.parse(localStorage.getItem("allData")) || []

const logIn = ()=> {
    event.preventDefault()

    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    console.log(getDataArr)

    let Auth = getDataArr.find( (e)=> e.username === username && e.password === password) 

    
    if(Auth){
        alert("Login successful")
        window.location.href = "movies.html"
    }
    else{
        alert("Login failed") 
    }
}
document.querySelector("form").addEventListener("submit", logIn)
