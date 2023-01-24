
function login() {
    let uname = document.querySelector("#username").value;
    let pword = document.querySelector("#pass").value;

    if (uname === "admin" && pword === "admin") {
        window.location.href="main.html";
    } else {
        // alert("Invalid credentials. Please try again.");

        document.querySelector("#error").innerHTML = "Invalid credentials. Please try again.";

        document.querySelector("#logform").reset();
    }
}