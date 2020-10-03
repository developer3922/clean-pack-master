console.log("main");

let textHero = $(".texto-hero")

let containerHero = $(".hero")

containerHero.mouseenter(() => {
    textHero.css("display", "block")
})

containerHero.mouseleave(() => {
    textHero.css("display", "none")
})

