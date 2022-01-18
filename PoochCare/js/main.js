const loadTheme = () => {
  const iconsTheme = document.querySelectorAll(".theme-btn");
  if (iconsTheme) {
    Array.prototype.forEach.call(iconsTheme, (icon, index) => {
      if (index === 1 || index === 3) {
        icon.style.display = "none";
      }
    });
  }
};

const handleTheme = () => {
  const themeWraps = document.querySelectorAll(".theme-wrap");
  if (themeWraps) {
    Array.prototype.forEach.call(themeWraps, (iconWrap, index) => {
      iconWrap.onclick = (e) => {
        const bodyEl = document.querySelector("body");
        const iconsTheme = document.querySelectorAll(".theme-btn");
        if (iconsTheme[1].style.display === "none") {
          bodyEl.classList.add("theme--dark");
          iconsTheme[1].style.display = "block";
          iconsTheme[3].style.display = "block";
          iconsTheme[2].style.display = "none";
          iconsTheme[0].style.display = "none";
        } else {
          bodyEl.classList.remove("theme--dark");
          iconsTheme[0].style.display = "block";
          iconsTheme[2].style.display = "block";
          iconsTheme[3].style.display = "none";
          iconsTheme[1].style.display = "none";
        }
      };
    });
  }
};

loadTheme();
handleTheme();
