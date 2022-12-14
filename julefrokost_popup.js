
const julefrokost_banner = document.querySelector(".julefrokost_banner")

function julefrokost_popup(){
    if (julefrokost_banner.classList.contains("vis_banner")) {
        julefrokost_banner.classList.remove("vis_banner");
      } else {
        julefrokost_banner.classList.add("vis_banner");
      }
}