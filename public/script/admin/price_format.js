var pr = document.getElementById("sale");
pr.addEventListener("input", function() {
    pr.value = pr.value.split('.').join("")
    pr.value = pr.value.split(',').join("")
})