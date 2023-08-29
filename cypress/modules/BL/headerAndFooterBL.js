import { headerAndFooterPOM } from "../POM/headerAndFooterPOM/headerAndFooterPOM";

class HeaderAndFooterBL {
  assertHeaderAndFooterElemets() {
    cy.get("body").then(($body) => {
      if ($body.find("button[id='gdpr-cookie-accept']").length > 0) {
        headerAndFooterPOM.prihvatiKolaciceBtn.click();
      }
    });
    cy.scrollTo("top");
    headerAndFooterPOM.myCartBtn.should("be.visible");
    headerAndFooterPOM.searchIcon.should("be.visible");
    headerAndFooterPOM.homePageBtn
      .should("be.visible")
      .and("have.attr", "width", "195")
      .and("have.attr", "height", "60");
    headerAndFooterPOM.b2bPrijavaBtn
      .should("have.attr", "href", `${Cypress.env("baseUrl")}login`)
      .and("be.visible");
    headerAndFooterPOM.blancoDropDownMenu
      .trigger("mouseover")
      .should("be.visible")
      .and("contain.text", "BLANCO");
    headerAndFooterPOM.electroluxDropDownMenu
      .should("be.visible")
      .and("contain.text", "ELECTROLUX");
    headerAndFooterPOM.tekaDropDownMenu
      .should("be.visible")
      .and("contain.text", "TEKA");
    headerAndFooterPOM.syskorDropDownMenu
      .should("be.visible")
      .and("contain.text", "SYSKOR");
    headerAndFooterPOM.oNamaBtn
      .should("be.visible")
      .and("contain.text", "O nama");
    headerAndFooterPOM.inspiracijeBtn
      .should("be.visible")
      .and("contain.text", "Inspiracije");
    headerAndFooterPOM.kontaktBtn
      .should("be.visible")
      .and("contain.text", "Kontakt");
    cy.scrollTo("bottom");
    cy.url().then((item) => {
      cy.log(item);
      if (
        item.includes("about-us") ||
        item.includes("id=-1000121") ||
        item.includes("syskor")
      ) {
        headerAndFooterPOM.backToTopOfThePageBtn.should("not.be.visible");
      } else {
        headerAndFooterPOM.backToTopOfThePageBtn.should("be.visible");
      }
    });
    headerAndFooterPOM.usloviKupovineBtn.should("be.visible");
    headerAndFooterPOM.odustanakOdKupovineBtn.should("be.visible");
    headerAndFooterPOM.dostavaBtn.should("be.visible");
    headerAndFooterPOM.oNamaFooterLink
      .should("be.visible")
      .and("have.text", "O nama");
    headerAndFooterPOM.polisaPrivatnostiFooterLink
      .should("be.visible")
      .and("contain", "Polisa privatnosti");
    headerAndFooterPOM.kontaktirajteNasFooterLink
      .should("be.visible")
      .and("have.text", "Kontaktirajte nas");
    headerAndFooterPOM.usloviKupovineFooterLink
      .should("be.visible")
      .and("have.text", "Uslovi kupovine");
    headerAndFooterPOM.nacinIUsloviPlacanja
      .should("be.visible")
      .and("have.text", "Način i uslovi plaćanja");
    headerAndFooterPOM.dostavaFooterLink
      .should("be.visible")
      .and("have.text", "Dostava");
    headerAndFooterPOM.usloviKoriscenjaFooterLink
      .should("be.visible")
      .and("have.text", "Uslovi korišćenja");
    headerAndFooterPOM.odustanakOdKupovineFooterLink
      .should("be.visible")
      .and("have.text", "Odustanak od kupovine");
    headerAndFooterPOM.reklamacijePrigovorFooterLink
      .should("be.visible")
      .and("have.text", "Reklamacije-prigovor");
    headerAndFooterPOM.phoneNum1Link
      .should("be.visible")
      .and("contain", "021 6216959");
    headerAndFooterPOM.phoneNum2Link
      .should("be.visible")
      .and("contain", " 021 6216955");
    headerAndFooterPOM.emailLink
      .should("be.visible")
      .and("contain", "web@kobex.rs");
    headerAndFooterPOM.homePageFooterBtn.find("img").should("be.visible");
    headerAndFooterPOM.masterCardLink.should("be.visible");
    headerAndFooterPOM.visaLink.should("be.visible");
    headerAndFooterPOM.bancaIntesaLink.should("be.visible");
    headerAndFooterPOM.facebookLink.should("be.visible");
    headerAndFooterPOM.instagramLink.should("be.visible");
    headerAndFooterPOM.youTubeLink.should("be.visible");
  }
}

export const headerAndFooterBL = new HeaderAndFooterBL();
