function menu() {
    $(".menu").css({ "display": "flex" })
}
function closeMenu() {
    $(".menu").hide()
}
$(".menu a").on("click", function () {
    closeMenu()
})