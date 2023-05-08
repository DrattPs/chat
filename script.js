
function add() {

    user_name = document.getElementById("i1").value;

    localStorage.setItem("i1",user_name);

    window.location="page.html";
}