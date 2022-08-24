const copy_email = () => {
  let copyemail = document.getElementById("email");
  navigator.clipboard.writeText(copyemail.textContent);
  swal("Почта скопирована", `${copyemail.textContent}`, "success");
}
const copy_tel = () => {
  let copytel = document.getElementById("tel");
  navigator.clipboard.writeText(copytel.textContent);
  swal("Номер телефона скопирован", `${copytel.textContent}`, "success");
}