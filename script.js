const cursor=document.querySelector(".cursor");

window.addEventListener("mousemove", function(e){
    const posX=e.clientX;
    const posY=e.clientY;
    cursor.style.left=`${posX}px`;
    cursor.style.top=`${posY}px`;
})