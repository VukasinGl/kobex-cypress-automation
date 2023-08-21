import { headerAndFooterPOM } from "./headerAndFooterPOM";

class TekaDropDownMenu {
  get tekaTehnologijaLink() {
    return cy.get(`a[href='${Cypress.env("baseUrl")}news&cat=7`).eq(1);
  }
  get noveEnergetskeOznakeZaUredjajeLink() {
    return cy
      .get(
        `a[href='${Cypress.env(
          "baseUrl"
        )}news-details/nove-energetske-oznake-za-ureaje']`
      )
      .eq(1);
  }
  get zamrzivaciLink() {
    return cy.get("a[href='/teka-/zamrzivaci']").eq(1);
  }
  get mikrotalasnaLink() {
    return cy.get("a[href='/teka-/mikrotalasna']").eq(1);
  }
  get kafeAparatiLink() {
    return cy.get("a[href='/teka-/kafe-aparati']").eq(1);
  }
  get frizideriLink() {
    return cy.get("a[href='/teka-/frizideri']").eq(1);
  }
  get aspiratoriLink() {
    return cy.get("a[href='/teka-/aspiratori']").eq(1);
  }
  get sudomasineLink() {
    return cy.get("a[href='/teka-/sudomasine']").eq(1);
  }
  get rerneLink() {
    return cy.get("a[href='/teka-/rerne']").eq(1);
  }
  get ploceLink() {
    return cy.get("a[href='/teka-/ploce']").eq(1);
  }
  assertTekaDropDownMenu() {
    headerAndFooterPOM.tekaDropDownMenu.trigger("mouseover");
    this.tekaTehnologijaLink
      .should("be.visible")
      .and("contain", "Teka tehnologija")
      .realHover();
    this.noveEnergetskeOznakeZaUredjajeLink
      .should("be.visible")
      .and("contain", "Nove energetske oznake za uređaje");
    this.zamrzivaciLink.should("be.visible").and("contain", "Zamrzivači");
    this.mikrotalasnaLink.should("be.visible").and("contain", "Mikrotalasna");
    this.kafeAparatiLink.should("be.visible").and("contain", "Kafe aparati");
    this.frizideriLink.should("be.visible").and("contain", "Frižideri");
    this.aspiratoriLink.should("be.visible").and("contain", "Aspiratori");
    this.sudomasineLink.should("be.visible").and("contain", "Sudomašine");
    this.rerneLink.should("be.visible").and("contain", "Rerne");
    this.ploceLink.should("be.visible").and("contain", "Ploče");
  }
}
export const tekaDropDownMenu = new TekaDropDownMenu();
