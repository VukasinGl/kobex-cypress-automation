import { headerAndFooterPOM } from "./headerAndFooterPOM";

class BlancoDropDownMenuPOM {
  get vodicZaSudopereLink() {
    return cy.get(`a[href='${Cypress.env("baseUrl")}news&cat=1']`).eq(1);
  }
  get kakoOdabratiSudoperuLink() {
    return cy
      .get(
        `a[href='${Cypress.env("baseUrl")}news-details/kako-odabrati-sudoperu']`
      )
      .eq(1);
  }
  get blancoUnitBesprekornoIntegrisanaJedinicaLink() {
    return cy
      .get(
        `a[href='${Cypress.env(
          "baseUrl"
        )}news-details/blanco-unit-besprekorno-integrisana-jedinica']`
      )
      .eq(1);
  }
  get materijaliIOdrzavanjeLink() {
    return cy
      .get(
        `a[href='${Cypress.env("baseUrl")}news-details/materijali-i-odravanje']`
      )
      .eq(1);
  }
  get naciniUgradnjeSudoperaLink() {
    return cy
      .get(
        `a[href='${Cypress.env(
          "baseUrl"
        )}news-details/naini-ugradnje-sudopera']`
      )
      .eq(1);
  }
  get vodicZaSlavineLink() {
    return cy.get(`a[href='${Cypress.env("baseUrl")}news&cat=2']`).eq(1);
  }
  get verzijeIVarijacijeLink() {
    return cy
      .get(
        `a[href='${Cypress.env("baseUrl")}news-details/verzije-i-varijacije']`
      )
      .eq(1);
  }
  get kakoOdabratiSlavinuLink() {
    return cy
      .get(
        `a[href='${Cypress.env("baseUrl")}news-details/kako-odabrati-slavinu']`
      )
      .eq(1);
  }
  get slavinaIspredProzoraLink() {
    return cy
      .get(
        `a[href='${Cypress.env("baseUrl")}news-details/slavina-ispred-prozora']`
      )
      .eq(1);
  }
  get drinkFilterNewsLink() {
    return cy
      .get(`a[href='${Cypress.env("baseUrl")}news-details/drink-filter']`)
      .eq(1);
  }
  get prikljucakZaVoduLink() {
    return cy
      .get(`a[href='${Cypress.env("baseUrl")}news-details/prikljuak-za-vodu']`)
      .eq(1);
  }
  get resenjaZaOtpadLink() {
    return cy.get(`a[href='${Cypress.env("baseUrl")}news&cat=3']`).eq(1);
  }
  get zaFrontBezPostojeceFiokeLink() {
    return cy
      .get(
        `a[href='${Cypress.env(
          "baseUrl"
        )}news-details/za-front-bez-postojee-fioke']`
      )
      .eq(1);
  }
  get zaFrontSaPostojecomFiokomLink() {
    return cy
      .get(
        `a[href='${Cypress.env(
          "baseUrl"
        )}news-details/za-front-sa-postojeom-fiokom']`
      )
      .eq(1);
  }
  get zaVrataOrmaricaLink() {
    return cy
      .get(`a[href='${Cypress.env("baseUrl")}news-details/za-vrata-ormarica']`)
      .eq(1);
  }
  get zaRadnuPlocuLink() {
    return cy
      .get(`a[href='${Cypress.env("baseUrl")}news-details/za-radnu-plou']`)
      .eq(1);
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
    this.kakoOdabratiSudoperuLink
      .should("be.visible")
      .and("have.text", "Kako odabrati sudoperu?");
    this.blancoUnitBesprekornoIntegrisanaJedinicaLink
      .should("be.visible")
      .and("have.text", "BLANCO UNIT - besprekorno integrisana jedinica");
    this.materijaliIOdrzavanjeLink
      .should("be.visible")
      .and("have.text", "Materijali i održavanje");
    this.naciniUgradnjeSudoperaLink
      .should("be.visible")
      .and("have.text", "Načini ugradnje sudopera");
    this.vodicZaSlavineLink.realHover();
    this.verzijeIVarijacijeLink
      .should("be.visible")
      .and("have.text", "Verzije i varijacije");
    this.kakoOdabratiSlavinuLink
      .should("be.visible")
      .and("have.text", "Kako odabrati slavinu?");
    this.slavinaIspredProzoraLink
      .should("be.visible")
      .and("have.text", "Slavina ispred prozora");
    this.drinkFilterNewsLink
      .should("be.visible")
      .and("have.text", "Drink.filter");
    this.prikljucakZaVoduLink
      .should("be.visible")
      .and("have.text", "Priključak za vodu");
    this.sudopereLink.should("be.visible").and("contain", "Sudopere");
    this.slavinaLink.should("be.visible").and("contain", "Slavina");
    this.sistemiZaRazdvajanjeOtpada
      .should("be.visible")
      .and("contain", "Sistem za razdvajanje otpada");
    this.dozerLink.should("be.visible").and("contain", "Dozer");
    this.blancoPriborLink.should("be.visible").and("contain", "BLANCO Pribor");
    this.meljacBioOtpadaLink
      .should("be.visible")
      .and("contain", "Meljač BIO otpada");
    this.drinkFilterLink.should("be.visible").and("contain", "drink.filter");
  }
}
export const blancoDropDownMenuPOM = new BlancoDropDownMenuPOM();
