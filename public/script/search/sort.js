var sort_drp = document.getElementById('sort');
sort_drp.addEventListener("change",sort)
function sort() {
    //regex to get order query
    var regex = /&order=[a-zA-Z-]{0,}/g;
    var x = window.location.href.search(regex)
    
    if(x == -1){
        window.location.href = window.location.href + "&order="+ sort_drp.value
    }
    else{
        window.location.href = window.location.href.replace(regex,"&order="+ sort_drp.value)
    }
}
//change option in sort bar
var regex = /order=[a-z-]{0,}c/i;
var order = window.location.href.match(regex);
if(order){
    var x = order[0].slice(6)
    var opts = sort_drp.getElementsByTagName('option'); // Options Array
    for(var i of opts){
        if(i.value == x){
            i.selected = true;
        }
    }
}
