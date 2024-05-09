const elements =document.getElementsByClassName('block');
for(i=0;i<elements.length;i++){
    elements[i].addEventListener('click',function(){
        this.classList.toggle('active');
    })
}