import { headerAndFooterPOM } from "./headerAndFooterPOM";
class SyskorDropDownMenu {
  get syskorProizvodiLink() {
    return cy.get(`a[href='${Cypress.env("baseUrl")}news&cat=6']`).eq(1);
  }
  get brendSyskorUnosiRedUVasDomLink() {
    return cy
      .get(
        `a[href='${Cypress.env(
          "baseUrl"
        )}news-details/brend-syskor-unosi-red-u-va-dom']`
      )
      .eq(1);
  }
  get klizniSistemiLink() {
    return cy.get("a[href='/syskor/klizni-sistemi']").eq(1);
  }
  get mkaLink() {
    return cy.get("a[href='/syskor/mka']").eq(1);
  }
  assertSyskorDropDownMenu() {
    headerAndFooterPOM.syskorDropDownMenu.trigger("mouseover");
    this.syskorProizvodiLink
      .should("be.visible")
      .and("contain", "Syskor proizvodi")
      .realHover();
    this.brendSyskorUnosiRedUVasDomLink
      .should("be.visible")
      .and("contain", "Brend Syskor unosi red u vaš dom");
    this.klizniSistemiLink
      .should("be.visible")
      .and("contain", "Klizni sistemi");
    this.mkaLink.should("be.visible").and("contain", "MKA");
  }
}
export const syskorDropDownMenu = new SyskorDropDownMenu();
