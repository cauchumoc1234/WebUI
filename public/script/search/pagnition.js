
var list = document.getElementsByClassName('link');
// for(var i of list){
//     var link = i.getElementsByClassName('link')
//     console.log(link);
// }
var current = parseInt(document.getElementById('current').getElementsByClassName('link')[0].textContent);
for(var i=0 ; i< list.length ; i++){

    var x = list[i];
    var page = x.textContent;
    var index = x.getAttribute('href').indexOf('&page');
    if(index <= 0 ) index = x.getAttribute('href').length
    if (x.textContent == "←" ) page = current - 1;
    else if(x.textContent == "→") page = current + 1;
    x.setAttribute('href',x.getAttribute('href').slice(0,index) + "&page="+page)
}

