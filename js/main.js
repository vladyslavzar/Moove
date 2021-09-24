
$(function(){

});
let de=document.querySelector(".de");
let uk=document.querySelector(".uk");
let demap=document.querySelector(".demap");
let ukmap=document.querySelector(".ukmap");
if(de){
    de.onclick=function(){
        de.classList.add("btnactive");
        uk.classList.remove("btnactive");
        ukmap.classList.add("imgnotselected");
        demap.classList.remove("imgnotselected");
    }
}
if(uk){
    uk.onclick=function(){
        uk.classList.add("btnactive");
        de.classList.remove("btnactive");
        ukmap.classList.remove("imgnotselected");
        demap.classList.add("imgnotselected");
    }
    de.onclick();
}
let popup = document.querySelector(".popup");
let popupcontainerbtnsbtn= document.querySelectorAll(".popupcontainerbtnsbtn");
let pressed=false;


if (popupcontainerbtnsbtn){
    for (let i=0; i < popupcontainerbtnsbtn.length; i++){
        popupcontainerbtnsbtn[i].onclick=function(){
            if (pressed==false){
                popup.classList.add("popupactive");
                $(function(){
                    $.cookie("popup", "", { expires:0, path: '/' });
                    $("#bg_popup").hide(); 
                });
            }
        }
    }
}
$(function(){
    if ( $.cookie("popup") == null ){                
        setTimeout(function(){
            $("#bg_popup").show();
        }, 4000)
    } 
    else { 
        $("#bg_popup").hide();
    }
})
