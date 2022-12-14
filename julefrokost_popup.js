
const julefrokost_banner = document.querySelector(".julefrokost_banner")
const julefrokost_video = document.querySelector("#julefrokost_video")

function julefrokost_popup(){
    if (julefrokost_banner.classList.contains("vis_banner")) {
        julefrokost_banner.classList.remove("vis_banner");
        julefrokost_video.pause();
      } else {
        julefrokost_banner.classList.add("vis_banner");
        julefrokost_video.play();
      }
}