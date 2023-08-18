import { genericPOM } from "../POM/generic.POM";

class GenericBL {
  assertGenericElemets() {
    genericPOM.searchIcon.should("be.visible");
    genericPOM.homePageBtn
      .should("be.visible")
      .and("have.attr", "width", "195")
      .and("have.attr", "height", "60");
    genericPOM.b2bPrijavaBtn
      .should("have.attr", "href", "https://kobex.rs/login")
      .and("be.visible");
    genericPOM.myCartBtn.should("be.visible");
    genericPOM.blancoDropDownMenu
      .trigger("mouseover")
      .should("be.visible")
      .and("contain.text", "BLANCO");
    genericPOM.electroluxDropDownMenu
      .should("be.visible")
      .and("contain.text", "ELECTROLUX");
    genericPOM.tekaDropDownMenu
      .should("be.visible")
      .and("contain.text", "TEKA");
    genericPOM.syskorDropDownMenu
      .should("be.visible")
      .and("contain.text", "SYSKOR");
    genericPOM.oNamaBtn.should("be.visible").and("contain.text", "O nama");
    genericPOM.inspiracijeBtn
      .should("be.visible")
      .and("contain.text", "Inspiracije");
    genericPOM.kontaktBtn.should("be.visible").and("contain.text", "Kontakt");
    genericPOM.backToTopOfThePageBtn.should("not.be.visible");
    cy.scrollTo("bottom");
    genericPOM.backToTopOfThePageBtn.should("be.visible");
    genericPOM.usloviKupovineBtn.should("be.visible");
    genericPOM.odustanakOdKupovineBtn.should("be.visible");
    genericPOM.dostavaBtn.should("be.visible");
    genericPOM.oNamaFooterLink.should("be.visible").and("have.text", "O nama");
    genericPOM.polisaPrivatnostiFooterLink
      .should("be.visible")
      .and("have.text", "Polisa privatnosti");
    genericPOM.kontaktirajteNasFooterLink
      .should("be.visible")
      .and("have.text", "Kontaktirajte nas");
    genericPOM.usloviKupovineFooterLink
      .should("be.visible")
      .and("have.text", "Uslovi kupovine");
    genericPOM.nacinIUsloviPlacanja
      .should("be.visible")
      .and("have.text", "Način i uslovi plaćanja");
    genericPOM.dostavaFooterLink
      .should("be.visible")
      .and("have.text", "Dostava");
    genericPOM.usloviKoriscenjaFooterLink
      .should("be.visible")
      .and("have.text", "Uslovi korišćenja");
    genericPOM.odustanakOdKupovineFooterLink
      .should("be.visible")
      .and("have.text", "Odustanak od kupovine");
    genericPOM.reklamacijePrigovorFooterLink
      .should("be.visible")
      .and("have.text", "Reklamacije-prigovor");
    genericPOM.phoneNum1Link
      .should("be.visible")
      .and("have.text", "021 6216959");
    genericPOM.phoneNum2Link
      .should("be.visible")
      .and("have.text", " 021 6216955");
    genericPOM.emailLink.should("be.visible").and("have.text", "web@kobex.rs");
    genericPOM.homePageFooterBtn.find("img").should("be.visible");
    genericPOM.masterCardLink.should("be.visible");
    genericPOM.visaLink.should("be.visible");
    genericPOM.bancaIntesaLink.should("be.visible");
    genericPOM.facebookLink.should("be.visible");
    genericPOM.instagramLink.should("be.visible");
    genericPOM.youTubeLink.should("be.visible");
  }
}
export const genericBL = new GenericBL();
