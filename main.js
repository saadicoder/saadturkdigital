const slideMenu= document.getElementById("slidemenu");

slideMenu.addEventListener('click' , function() {
  if (slideMenu.style.opacity=="1") {
   slideMenu.style.opacity=='0';
   slideMenu.style.pointerEvents='none';
} else {
    slideMenu.style.opacity=='1';
   slideMenu.style.pointerEvents='auto';
}
})