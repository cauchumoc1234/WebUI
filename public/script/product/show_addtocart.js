var atcBtn = document.getElementById("atc-btn");
atcBtn.addEventListener('click',()=>{

    document.getElementById('notify').classList.toggle('show')
})
atcBtn.addEventListener('mouseup',function(){
    document.getElementById('notify').classList.remove('show')
})
