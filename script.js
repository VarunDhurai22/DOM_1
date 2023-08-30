var s=document.querySelector("h5")
var addf=document.querySelector("#add")
var check=0;
addf.addEventListener("click",function() {
    if(check==0) {
       s.innerHTML="Friends"
       s.style.color="green";
       addf.innerHTML="Remove Friend"
       check=1
    }
    else {
       s.innerHTML="Stranger"
       s.style.color="red";
       addf.innerHTML="Add Friend"
       check=0
    }
})