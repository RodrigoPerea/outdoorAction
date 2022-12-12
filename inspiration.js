/* SOMMERFEST FOR PER’S VVS */

let persFestLink = document.querySelector("#persFestLink");

let persFest = document.querySelector("#persFest");

persFestLink.addEventListener("click", navigatePer, false);

function navigatePer(e) {
  persFest.scrollIntoView({ behavior: "smooth" });
}

/* TELTET UNDER BØGEKRONERNE  */

let teltLink = document.querySelector("#teltLink");

let telt = document.querySelector("#telt");

teltLink.addEventListener("click", navigatetelt, false);

function navigatetelt(e) {
  telt.scrollIntoView({ behavior: "smooth" });
}

/* SEAT SALGSKICKOFF  */

let seatLink = document.querySelector("#seatLink");

let seat = document.querySelector("#seat");

seatLink.addEventListener("click", navigateseat, false);

function navigateseat(e) {
  seat.scrollIntoView({ behavior: "smooth" });
}

/* 60 ÅRS FØDSELSDAG I DET FRI */

let fødsLink = document.querySelector("#fødsLink");

let føds = document.querySelector("#føds");

fødsLink.addEventListener("click", navigateføds, false);

function navigateføds(e) {
  føds.scrollIntoView({ behavior: "smooth" });
}

/* NORDEA JULEARRANGEMENT */

let nordeaLink = document.querySelector("#nordeaLink");

let nordea = document.querySelector("#nordea");

nordeaLink.addEventListener("click", navigatenordea, false);

function navigatenordea(e) {
  nordea.scrollIntoView({ behavior: "smooth" });
}

/* JAMIE’S POLTERABEND */

let jamieLink = document.querySelector("#jamieLink");

let jamie = document.querySelector("#jamie");

jamieLink.addEventListener("click", navigatejamie, false);

function navigatejamie(e) {
  jamie.scrollIntoView({ behavior: "smooth" });
}

/* FTZ AFDELING PÅ UDFLUGT */

let ftzLink = document.querySelector("#ftzLink");

let ftz = document.querySelector("#ftz");

ftzLink.addEventListener("click", navigateftz, false);

function navigateftz(e) {
  ftz.scrollIntoView({ behavior: "smooth" });
}

/* EVENT DAGE HOS HARDI INTERNATIONAL A/S  */

let eventLink = document.querySelector("#eventLink");

let event = document.querySelector("#event");

eventLink.addEventListener("click", navigateevent, false);

function navigateevent(e) {
  event.scrollIntoView({ behavior: "smooth" });
}
