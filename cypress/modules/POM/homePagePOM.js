class HomePagePOM {
  get saznajViseBtn() {
    return cy.get(
      "a[href='http://kobex.rs/news-details/blanco-unit-besprekorno-integrisana-jedinica']"
    );
  }
  get sledeciBtn() {
    return cy.get("button[aria-label='Sledeći']");
  }
  get prethodniBtn() {
    return cy.get("button[aria-label='Prethodni']");
  }
  get blancoPageLink() {
    return cy.get("a[href='https://kobex.rs/blanco']");
  }
  get tekaPageLink() {
    return cy.get("a[href='https://kobex.rs/teka']");
  }
  get syskorPageLink() {
    return cy.get("a[href='https://kobex.rs/syskor']");
  }
  get electroluxPageLink() {
    return cy.get("a[href='https://kobex.rs/electrolux']");
  }
  get nextArrow() {
    return cy.get("button[aria-label='Next']");
  }
  get previousArrow() {
    return cy.get("button[aria-label='Previous']");
  }
  get blancoLogo() {
    return cy.get(
      "img[src='https://kobex.rs/uploads/brendovi/63d51d6d125e0.webp']"
    );
  }
  get elextroluxLogo() {
    return cy.get(
      "img[src='https://kobex.rs/uploads/brendovi/63d52a2401524.webp']"
    );
  }
  get ritterLogo() {
    return cy.get(
      "img[src='https://kobex.rs/uploads/brendovi/63d52d385dea2.webp']"
    );
  }
  get syskorLogo() {
    return cy.get(
      "img[data-src='https://kobex.rs/uploads/brendovi/63d52bb4779b9.webp']"
    );
  }
  get tekaLogo() {
    return cy.get(
      "img[src='https://kobex.rs/uploads/brendovi/63d52cc047bb2.webp']"
    );
  }
  get izdvajamoSection() {
    return cy.contains("Izdvajamo");
  }
  get sveVestiBtn() {
    return cy.contains("Sve vesti");
  }
  get inspiracijeBtn() {
    return cy.get("a[href='https://kobex.rs/news']").eq(2);
  }
  get blancoUnitBackgroundImg() {
    return cy.get("#slick-slide00");
  }
  get blancoEtagonBackgroundImg() {
    return cy.get("#slick-slide01");
  }
  get silgranitBackgroundImg() {
    return cy.get("#slick-slide02");
  }
  get zaVelikeiMaleBackgroundImg() {
    return cy.get("#slick-slide03");
  }
  get blancoUnit2BackgroundImg() {
    return cy.get("#slick-slide04");
  }
  get slider() {
    return cy.get("ul[role='tablist']");
  }
}
export const homePagePOM = new HomePagePOM();
