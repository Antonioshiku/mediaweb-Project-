const container = document.querySelector(".con");
const dropList = document.querySelector(".nav_bar ul li:nth-child(2)");
const mainNavCon = document.querySelector(".main_con");
const subCon = document.querySelector(".sub_con");
const menuCon = document.querySelector(".menu_con");
const PhoneMenu = document.querySelector(".cate");

window.addEventListener("resize", () => {
  // console.log(typeof window.innerWidth);
});

dropList.onclick = () => {
  const dropDown = dropList.nextElementSibling;
  dropDown.classList.add(".show");
  if (dropDown.classList.contains("show")) {
    dropDown.classList.remove("show");
  } else {
    dropDown.classList.add("show");
  }
};

menuCon.onclick= () => {
  menuCon.classList.add(".change_menu_bar");

  if (menuCon.classList.contains("change_menu_bar")) {
    menuCon.classList.remove("change_menu_bar");
  } else {
    menuCon.classList.add("change_menu_bar");
  }

  const phoneNavBar = menuCon.parentElement.nextElementSibling;
   console.log(phoneNavBar);
      phoneNavBar.classList.add('.show_nav_bar');

      const contains=phoneNavBar.classList.contains('show_nav_bar');

      if (contains) {
        phoneNavBar.classList.remove('show_nav_bar');
        phoneNavBar.classList.add("hide_nav_bar")
      } else {
        phoneNavBar.classList.add('show_nav_bar');
        phoneNavBar.classList.remove("hide_nav_bar")

      }
};

PhoneMenu.onclick = () => {
  let phoneDropDown = PhoneMenu.nextElementSibling;
  phoneDropDown.classList.add(".show_phone_drop");

  if (phoneDropDown.classList.contains("show_phone_drop")) {
    phoneDropDown.classList.remove("show_phone_drop");
    phoneDropDown.classList.add("hide_phone_drop");
  } else {
    phoneDropDown.classList.add("show_phone_drop");
    phoneDropDown.classList.remove("hide_phone_drop");
  }
};
