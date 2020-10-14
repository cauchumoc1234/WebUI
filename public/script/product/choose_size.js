addEvent()
async function addEvent(){
    var sizeBtn = await document.getElementsByClassName('size-btn')
    //ensure that at least 1 radio checked
    sizeBtn[0].getElementsByClassName('choice')[0].checked = true;
     for(var i = 0 ; i < sizeBtn.length;i++){    
        sizeBtn[i].addEventListener('click',function(){
            document.getElementById('amount').max = parseInt(this.getElementsByClassName('instock')[0].getAttribute('value'));
            
            // check if the input value greater than max
            document.getElementById('amount').addEventListener('input',function(){
                if(parseInt(this.value) > this.max){
                    this.value = this.max;
                }
            })
        })
    }

}