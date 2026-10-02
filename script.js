function removecolor() {
    let select = document.getElementById("colorSelect");

    if (select.selectedIndex !== -1) {
        select.remove(select.selectedIndex);
    }
}
document.getElementById("removeColor").addEventListener("click",removecolor);