var mainType = document.getElementsByClassName('main-type');
for(var i of mainType){
    i.addEventListener("change",function(){
        if(document.getElementById('first_type').checked == true){
            document.getElementById("shoes").style.display = "initial" ;
            document.getElementById("clothing").style.display = "none" ;
            document.getElementById("clothing-type").style.display = "none" ;
            document.getElementById("add_product").action="admin/add_product/shoes"
        }
        else{
            document.getElementById("clothing").style.display = "initial" ;
            document.getElementById("clothing-type").style.display = "initial" ;
            document.getElementById("shoes").style.display = "none" ;
            document.getElementById("add_product").action="admin/add_product/clothing"
        }
    })
}