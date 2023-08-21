import { headerAndFooterPOM } from "./headerAndFooterPOM";
class ElectroluxDropDownMenu {
  get ploceLink() {
    return cy.get("a[href='/electrolux/ploce']").eq(1);
  }
  get rerneLink() {
    return cy.get("a[href='/electrolux/rerne']").eq(1);
  }
  get aspiratoriLink() {
    return cy.get("a[href='/electrolux/aspiratori']").eq(1);
  }
  get sudomasineLink() {
    return cy.get("a[href='/electrolux/sudomasine']").eq(1);
  }
  get frizideriLink() {
    return cy.get("a[href='/electrolux/frizideri']").eq(1);
  }
  get zamrzivaciLink() {
    return cy.get("a[href='/electrolux/zamrzivaci']").eq(1);
  }
  get mikrotalasnaLink() {
    return cy.get("a[href='/electrolux/mikrotalasna']").eq(1);
  }
  get vesMasineLink() {
    return cy.get("a[href='/electrolux/ves-masine']").eq(1);
  }
  get sporetiLink() {
    return cy.get("a[href='/electrolux/sporeti']").eq(1);
  }
  get mkaLink() {
    return cy.get("a[href='/electrolux/mali-kucni-aparati']").eq(1);
  }
  get electroluxPriborLink() {
    return cy.get("a[href='/electrolux/electrolux-pribor']").eq(1);
  }
  assertElectroluxDropDownMenu() {
    headerAndFooterPOM.electroluxDropDownMenu.trigger("mouseover");
    this.ploceLink.should("be.visible").and("contain", "Ploče");
    this.rerneLink.should("be.visible").and("contain", "Rerne");
    this.aspiratoriLink.should("be.visible").and("contain", "Aspiratori");
    this.sudomasineLink.should("be.visible").and("contain", "Sudomašine");
    this.frizideriLink.should("be.visible").and("contain", "Frižideri");
    this.zamrzivaciLink.should("be.visible").and("contain", "Zamrzivači");
    this.mikrotalasnaLink.should("be.visible").and("contain", "Mikrotalasna");
    this.vesMasineLink.should("be.visible").and("contain", "Veš mašine");
    this.sporetiLink.should("be.visible").and("contain", "Šporeti");
    this.mkaLink.should("be.visible").and("contain", "MKA");
    this.electroluxPriborLink
      .should("be.visible")
      .and("contain", "ELECTROLUX Pribor");
  }
}
export const electroluxDropDownMenu = new ElectroluxDropDownMenu();
