function removecolor() {
    let select = document.getElementById("colorSelect");

    if (select.selectedIndex !== -1) {
        select.remove(select.selectedIndex);
    }
}
document.querySelector('input[value="Select and Remove"]')
.addEventListener("click",removecolor);