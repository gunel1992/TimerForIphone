let saniye=document.querySelector(".saniye")
let deqiqe=document.querySelector(".deqiqe")
let saat=document.querySelector(".saat")
let baslat=document.querySelector(".baslat")
let dayan=document.querySelector(".dayan")
let sifirla=document.querySelector(".sifirla")
let saxla=document.querySelector(".saxla")
let ol=document.querySelector("ol")

let saatC=0
let deqiqeC=0
let saniyeC=0
baslat.onclick=function(){
    let x=setInterval(function(){
        if(deqiqeC==60){
            deqiqeC=0
            saatC++
        }
        saniyeC++
        if(saniyeC==60){
            deqiqeC++
            saniyeC=0
        }
        
    saniye.textContent=`: ${saniyeC}`
    deqiqe.textContent=`: ${deqiqeC}`
    saat.textContent= ` ${saatC}`
    
    }
    
    
    
    ,100);
    dayan.onclick=function(){
        clearInterval(x)
    }
    
}
sifirla.onclick=function(){
    saatC=0
    deqiqeC=0
    saniyeC=0
    saniye.textContent=saniyeC
    deqiqe.textContent=deqiqeC
    saat.textContent=saatC
    ol.innerHTML=""
}
saxla.onclick=function(){
    let li=document.createElement("li")
    li.textContent=`Tur:  ${saatC}  : ${deqiqeC}  : ${saniyeC}`
    ol.prepend(li)
}