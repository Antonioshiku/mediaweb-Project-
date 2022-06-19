const container=document.querySelector(".con");
const dropList=document.querySelector('.nav_bar ul li:nth-child(2)');
const mainNavCon=document.querySelector('.main_con');
const subCon=document.querySelector('.sub_con');
const menuCon=document.querySelector('.menu_con');

window.addEventListener('resize', () => {

  // console.log(typeof window.innerWidth);
  
   if (window.innerWidth<912) {
    container.style.display="none";
    mainNavCon.style.display='none';
   }else{
    container.style.display="grid";
    mainNavCon.style.display='block';
   }

   if (window.innerWidth >921 && window.innerWidth< 1168) {
       
         console.log(subCon);
         subCon.classList.add('change_width');
 } else {
      subCon.classList.remove('change_width')
   }


})

dropList.onclick= () => {
          const dropDown=dropList.nextElementSibling;
          dropDown.classList.add('.show')
          if (dropDown.classList.contains('show')) {
          dropDown.classList.remove('show')
          }else{
          dropDown.classList.add('show')
          }
}

menuCon.addEventListener('click' , () => {
       menuCon.classList.add('.change_menu_bar');

       if (menuCon.classList.contains('change_menu_bar')) {
        menuCon.classList.remove('change_menu_bar');
       } else {
        menuCon.classList.add('change_menu_bar');
       }
})