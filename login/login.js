// 5 - mostrar contraseña oculta de las claves en el Login //

var checkbox = document.getElementById("see");
var passField = document.getElementById("pass");
checkbox.addEventListener("click", function () {
  var value = passField.getAttribute("type");
  if (value == "password") {
    passField.setAttribute("type", "text");
  } else {
    passField.setAttribute("type", "password");
  }
});


