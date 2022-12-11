const tablinks = document.getElementsByClassName("tab-link"); /* Min knap */
const allContent = document.querySelectorAll(".tab-content"); /* Mit indhold */

for (let i = 0; i < tablinks.length; i++) {
  /* Laver mit loop til når jeg klikker på min tabLink */
  tablinks[i].addEventListener("click", function (e) {
    const current = document.getElementsByClassName("active"); /* Den vil kigge gennem index i html, og se efter alle elementer der har klassen active */
    current[0].className = current[0].className.replace(" active", ""); /* Den her sletter den aktive klasse fra min "current" variabel, og bytter ud med ingen ting */
    this.cl += " active"; /* adder "active" til det element jeg har klikket på, til hvilken klasse der nu eksiterer der */

    /* -jeg har sat data-filter på alle knapper. det skal egj bruge til at få fat i min beskrivelse ved klik */

    /* Skift indhold */
    const filter = e.target.dataset.filter; /* Min html har "data-filter", så derfor target jeg med dataset, det filter, jeg har angivet i html, for at kunne bytte tekst ud */
    console.log(filter);

    /* Nu vil jeg se igennem alt mit indhold */
    allContent.forEach((content) => {
      /* Her har vi lavet vore "content" */
      if (content.classList.contains(filter)) {
        /*Hvis min content.classList(som er min beskrivende tekst), indeholder fileteret(mit dataset) som jeg har sat på knapperne, skal den gøre...*/
        /* Som vi har lavet i linje 14, som tageter min data proppeties i min html */
        content.style.display = "block";
      } else {
        content.style.display = "non";
      }

      /*med dataset proppety, kan jeg filtere, informtion, og få det vist, når jeg adder et event*/
    });
  });
}
