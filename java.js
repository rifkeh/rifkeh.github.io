document.getElementById("check").addEventListener("change", myFunction);
function myFunction(){
    var element=document.body;
    var footer=document.getElementById("footer");
    var afooter=footer.getElementsByTagName("a");
    var hfooter=footer.getElementsByTagName("h4");
    var line=document.getElementsByClassName("home-line");
    if(element.style.background==="black"){
        element.style.background="white";
        element.style.color="black";
        document.getElementById("menu").style.background="white";
        document.getElementById("menu").style.boxShadow="0px 1px 3px black";
        footer.style.boxShadow="0px 1px 3px black";
        for(let i=0; i<afooter.length; i++){
            afooter[i].style.color="black";
        }
        for(let i=0; i<hfooter.length; i++){
            hfooter[i].style.color="black";
        }
        for(let i=0; i<line.length; i++){
            line[i].style.background="black";
        }
    }else{
        element.style.background="black";
        element.style.color="white";
        document.getElementById("menu").style.background="black";
        document.getElementById("menu").style.boxShadow="0px 1px 2px white";
        footer.style.boxShadow="0px 1px 3px white";
        for(let i=0; i<afooter.length; i++){
            afooter[i].style.color="white";
        }
        for(let i=0; i<hfooter.length; i++){
            hfooter[i].style.color="white";
        }
        for(let i=0; i<line.length; i++){
            line[i].style.background="white";
        }
    }
    
    
}
document.body.style.background