import { headerAndFooterPOM } from "./headerAndFooterPOM";
class BlancoDropDownMenuPOM {
  get vodicZaSudopereLink() {
    return cy.get(`a[href='${Cypress.env("baseUrl")}news&cat=1']`).eq(1);
  }
  get kakoOdabratiSudoperuLink() {
    return cy
      .get(`a[href='${Cypress.env("newsUrl")}kako-odabrati-sudoperu']`)
      .eq(1);
  }
  get blancoUnitBesprekornoIntegrisanaJedinicaLink() {
    return cy
      .get(
        `a[href='${Cypress.env(
          "newsUrl"
        )}blanco-unit-besprekorno-integrisana-jedinica']`
      )
      .eq(1);
  }
  get materijaliIOdrzavanjeLink() {
    return cy
      .get(`a[href='${Cypress.env("newsUrl")}materijali-i-odravanje']`)
      .eq(1);
  }
  get naciniUgradnjeSudoperaLink() {
    return cy
      .get(`a[href='${Cypress.env("newsUrl")}naini-ugradnje-sudopera']`)
      .eq(1);
  }
  get vodicZaSlavineLink() {
    return cy.get(`a[href='${Cypress.env("baseUrl")}news&cat=2']`).eq(1);
  }
  get verzijeIVarijacijeLink() {
    return cy
      .get(`a[href='${Cypress.env("newsUrl")}verzije-i-varijacije']`)
      .eq(1);
  }
  get kakoOdabratiSlavinuLink() {
    return cy
      .get(`a[href='${Cypress.env("newsUrl")}kako-odabrati-slavinu']`)
      .eq(1);
  }
  get slavinaIspredProzoraLink() {
    return cy
      .get(`a[href='${Cypress.env("newsUrl")}slavina-ispred-prozora']`)
      .eq(1);
  }
  get drinkFilterNewsLink() {
    return cy.get(`a[href='${Cypress.env("newsUrl")}drink-filter']`).eq(1);
  }
  get prikljucakZaVoduLink() {
    return cy.get(`a[href='${Cypress.env("newsUrl")}prikljuak-za-vodu']`).eq(1);
  }
  get resenjaZaOtpadLink() {
    return cy.get(`a[href='${Cypress.env("baseUrl")}news&cat=3']`).eq(1);
  }
  get zaFrontBezPostojeceFiokeLink() {
    return cy
      .get(`a[href='${Cypress.env("newsUrl")}za-front-bez-postojee-fioke']`)
      .eq(1);
  }
  get zaFrontSaPostojecomFiokomLink() {
    return cy
      .get(`a[href='${Cypress.env("newsUrl")}za-front-sa-postojeom-fiokom']`)
      .eq(1);
  }
  get zaVrataOrmaricaLink() {
    return cy.get(`a[href='${Cypress.env("newsUrl")}za-vrata-ormarica']`).eq(1);
  }
  get zaRadnuPlocuLink() {
    return cy.get(`a[href='${Cypress.env("newsUrl")}za-radnu-plou']`).eq(1);
  }
  get sudopereLink() {
    return cy.get("a[href='/blanco/sudopere']").eq(1);
  }
  get slavinaLink() {
    return cy.get("a[href='/blanco/slavina']").eq(1);
  }
  get sistemiZaRazdvajanjeOtpada() {
    return cy.get("a[href='/blanco/sistem-za-razdvajanje-otpada']").eq(1);
  }
  get dozerLink() {
    return cy.get("a[href='/blanco/dozer']").eq(1);
  }
  get blancoPriborLink() {
    return cy.get("a[href='/blanco/blanco-pribor']").eq(1);
  }
  get meljacBioOtpadaLink() {
    return cy.get("a[href='/blanco/meljac-bio-otpada']").eq(1);
  }
  get drinkFilterLink() {
    return cy.get("a[href='/blanco/drink.filter']").eq(1);
  }
  assertBlancoDropdownMenu() {
    headerAndFooterPOM.blancoDropDownMenu.trigger("mouseover");
    this.vodicZaSudopereLink.realHover();
    this.kakoOdabratiSudoperuLink.should("be.visible");
    this.blancoUnitBesprekornoIntegrisanaJedinicaLink.should("be.visible");
    this.materijaliIOdrzavanjeLink.should("be.visible");
    this.materijaliIOdrzavanjeLink.should("be.visible");
    this.naciniUgradnjeSudoperaLink.should("be.visible");
    this.vodicZaSlavineLink.realHover();
    this.verzijeIVarijacijeLink.should("be.visible");
    this.kakoOdabratiSlavinuLink.should("be.visible");
    this.slavinaIspredProzoraLink.should("be.visible");
    this.drinkFilterNewsLink.should("be.visible");
    this.prikljucakZaVoduLink.should("be.visible");
    this.sudopereLink.should("be.visible");
    this.slavinaLink.should("be.visible");
    this.sistemiZaRazdvajanjeOtpada.should("be.visible");
    this.dozerLink.should("be.visible");
    this.blancoPriborLink.should("be.visible");
    this.meljacBioOtpadaLink.should("be.visible");
    this.drinkFilterLink.should("be.visible");
  }
}
export const blancoDropDownMenuPOM = new BlancoDropDownMenuPOM();
