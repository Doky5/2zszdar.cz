let triangles = document.querySelectorAll(".triangle");
let ps = document.querySelectorAll("p");


setTimeout(() => {
  window.scrollTo(0, 0);
}, 500);

gsap.to(".triangle", { rotate: 360, duration: 10, repeat: -1, ease: "none" });
// COOOOOOOOOLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL

ps.forEach((p) => {
  if (p.innerHTML.includes("Dukátové")) {
    console.log(p.innerHTML);
  }
})

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#triangle1",
    start: "top center",
    end: "+=200px center",
    scrub: 2,
  },
});

tl2.fromTo(
  "#triangle1",
  { x: 100, y: -100, duration: 2.5 },
  { x: -100, y: 100 },
);
tl2.fromTo(".up", { y: 600, visibility: 0 }, { y: 0, visibility: 1 });

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#triangle2",
    start: "top center",
    end: "+=200px center",
    scrub: 2,
  },
});
tl3.fromTo("#triangle2", { x: 0, y: 0 }, { x: 400, y: 400 });

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#triangle3",
    start: "top center",
    end: "+=200px center",
    scrub: 2,
  },
});
tl4.fromTo(
  "#triangle3",
  { x: 200, y: -200, duration: 2.5 },
  { x: -100, y: 100, duration: 2.5 },
);

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#triangle4",
    start: "top center",
    end: "+=700px center",
    scrub: 2,
  },
});
tl5.fromTo("#triangle4", { x: 0, y: 0 }, { x: 450, y: 650 });

let lichy = gsap.utils.toArray([
  ".scroller h2",
  ".scroller h3",
  ".scroller p",
  ".scroller img",
]);
lichy.forEach((el) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top 70%",
      end: "+=350px 70%",
      scrub: false,
    },
  });
  tl.fromTo(el, { opacity: 0, y: 30 }, { opacity: 1, y: 0 });
});

let obedy = gsap.utils.toArray([".jidla div, table > * > *, .media *"]);
obedy.forEach((item) => {
  let jidlotimeline = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top 90%",
      end: "0px 5%",
      scrub: false,
      toggleActions: "play reverse play reverse",
    },
  });
  jidlotimeline.fromTo(item, { opacity: 0, y: 30 }, { opacity: 1, y: 0 });
});

let divs = document.querySelectorAll(".uspechy section div");
let div1 = document.querySelector(".one");
let div2 = document.querySelector(".two");
let div3 = document.querySelector(".three");
let div4 = document.querySelector(".four");
let div5 = document.querySelector(".five");
let div6 = document.querySelector(".six");
let p = document.querySelector(".javascript");


div1.addEventListener("click", () => {
  console.log("div1");
  p.innerHTML = "Finále ČR proběhlo v Opavě a naši chlapci obsadili 9. místo. V jednotlivcích si nejlépe vedl Jan Džurban (22. místo). Reprezentovali nás: J.Džurban, A.Jungr, J.Benc, M.Chmelíček, V.Petráš. Děkujeme všem za výborné výkony v průběhu celé soutěže a reprezentaci školy.";
});
div2.addEventListener("click", () => {
  p.innerHTML = "Místo: Třebíč atletický stadion, Výsledky: Mladší žáci (kategorie III.): 5. místo D.Němec, D.Antl, P.Mrázik, V.Svoboda (7.A) R.Krejčí, A.Bukáček, (7.A), Š.Sopčák (6.A), Š.Černý(6.B) Starší žákyně (kategorie IV.): 5. místo  B.Benešová, K.Mlíková, K.Kakačová (8.B) V.Dočekalová, E.Šoustarová (9.A), N.Vlasáková (9.B), P.Plevová, B.Mráziková (9.C) Starší žáci (kategorie IV.): 4. místo J.Benc (8.A), A.Jungr (9.A), V.Petráš, O.Vlasák, D.Žák, D.Vostřejš, M.Chmelíček (9.B), J.Džurban (9.C)";
});
div3.addEventListener("click", () => {
  p.innerHTML = "Okresní kolo matematické  olympiády pro 6. - 8. ročník se uskutečnilo opět polodistanční formou  12.4. 2023. Za naši školu řešilo soutěžní úlohy 6 žáků. Úspěšnými řešiteli se stali: V.Závorka z 6. B obsadil 4. místo, N.Holoubkové ze 7. B patří 19. místo a z 8. B si nejlépe vedli J.Dokulil a K.Mlíková, kteří se dělí o 9. - 11. místo a Š.Trojanové, která si vypočítala 12. místo. Všem žákům gratulujeme.";
});
div4.addEventListener("click", () => {
  p.innerHTML = "V krajském kole měli soutěžící za úkol zpracovat návrh naučné stezky (prezentace) a rozpočet (Excel). Naši školu reprezentovali 2 žáci. Jirka Dokulil v krajském kole zvítězil a Karolína Leksová obsadila výborné druhé místo. Oba postoupili do republikového finále. Ve finále v Praze 10. května oba velmi pěkně předvedli své práceezentace. I když nebyli vyhodnoceni na medailových místech, odvedli perfektní práci. Děkujeme.";
});
div5.addEventListener("click", () => {
  p.innerHTML = "Tomáš Trojan (2.B) je umístil na krásném 2. místě v kategorii - část výtvarná. 17.května byl v Přibyslavi na předání cen. Moc se mu tam líbilo.";
});
div6.addEventListener("click", () => {
  p.innerHTML = "Do tradiční soutěže pořádané pražským Gymnáziem Oty Pavla letos přispělo 5 žáků: K.Ondráčková (9.B), V.Kolková (8.B), S.Topinková, M.Kubiš a T.Srnský (všichni 6.B). Na 14 fotkách zpracovali témata: Mosty, Práce a pracující člověk, Symetrie / asymetrie.  Fotka Školní chodba (Symetrie/Asymetrie) byla vybrána do celostátního finále a její autorka V.Kolková byla pozvána na slavnostní vyhodnocení do Prahy, kde se dozvěděla, že obsadila krásné 3. místo.";
});