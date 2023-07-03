var acc = document.getElementsByClassName("accordionBtn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    // for (j = 0; i < acc.length; j++) {
    //     acc[j].classList.remove("active")
    //     console.log(123)
    // }
    // console.log(acc)
    
    this.classList.toggle("active");

    var panel = this.nextElementSibling;

    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}