document.cookie = 'same-site-cookie=foo; SameSite=Lax';
document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';

const clock = document.querySelector(".clock");
const YMD = document.querySelector(".YMD");
const user = document.querySelector(".user");
const userForm = document.getElementById("userName");
const userInput = userForm.querySelector("input");
const userResult = document.querySelector(".userResult");
const todo = document.querySelector(".todo");

function getClock() {
    const date = new Date();
    
    YMD.innerHTML = `${date.getFullYear()}.${String(date.getMonth()+1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`
    clock.innerHTML = `${String(date.getHours()).padStart(2, "0")} : ${String(date.getMinutes()).padStart(2, "0")} : ${String(date.getSeconds()).padStart(2, "0")}`;
}

function submitUser(event) {
    event.preventDefault();
    
    const userValue = userInput.value;
    
    localStorage.setItem("username", userValue);
    userResult.innerHTML = `<h3>Hello, ${userValue}</h3>`
    todo.style.display = "block";
    user.remove();
}

setInterval(getClock, 1000);
userForm.addEventListener("submit", submitUser);
