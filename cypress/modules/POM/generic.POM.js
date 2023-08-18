class GenericPOM {
  get searchIcon() {
    return cy.contains("Pretraga artikla");
  }
  get homePageBtn() {
    return cy
      .get(
        "img[src='https://kobex.rs/uploads/webshop/kobex-635a5268e204e.png']"
      )
      .eq(1);
  }
  get b2bPrijavaBtn() {
    return cy.get("a[href='https://kobex.rs/login']").eq(0);
  }
  get myCartBtn() {
    return cy.get("#miniCart");
  }
  get blancoDropDownMenu() {
    return cy.get("a[href='/blanco']");
  }
  get electroluxDropDownMenu() {
    return cy.get("a[href='/electrolux']");
  }
  get tekaDropDownMenu() {
    return cy.get("a[href='/teka']");
  }
  get syskorDropDownMenu() {
    return cy.get("a[href='/syskor']");
  }
  get oNamaBtn() {
    return cy.get("a[href='https://kobex.rs/about-us']").eq(1);
  }
  get inspiracijeBtn() {
    return cy.get("a[href='https://kobex.rs/news']").eq(1);
  }
  get kontaktBtn() {
    return cy.get("a[href='https://kobex.rs/contact-us']").eq(1);
  }
  get usloviKupovineBtn() {
    return cy.get("a[href='https://kobex.rs/faq/uslovi-kupovine']").eq(0);
  }
  get odustanakOdKupovineBtn() {
    return cy.get("a[href='https://kobex.rs/faq/odustanak-od-kupovine']").eq(0);
  }
  get dostavaBtn() {
    return cy.get("a[href='https://kobex.rs/faq/dostava']").eq(0);
  }
  get oNamaFooterLink() {
    return cy.get("footer").find("a[href='https://kobex.rs/about-us']");
  }
  get polisaPrivatnostiFooterLink() {
    return cy.get("a[href='https://kobex.rs/faq/polisa-privatnosti']");
  }
  get kontaktirajteNasFooterLink() {
    return cy.get("footer").find("a[href='https://kobex.rs/contact-us']");
  }
  get usloviKupovineFooterLink() {
    return cy
      .get("footer")
      .find("a[href='https://kobex.rs/faq/uslovi-kupovine']");
  }
  get nacinIUsloviPlacanja() {
    return cy.get("a[href='https://kobex.rs/faq/nain-i-uslovi-plaanja']");
  }
  get dostavaFooterLink() {
    return cy.get("footer").find("a[href='https://kobex.rs/faq/dostava']");
  }
  get usloviKoriscenjaFooterLink() {
    return cy.get("a[href='https://kobex.rs/faq/uslovi-korienja']");
  }
  get odustanakOdKupovineFooterLink() {
    return cy
      .get("footer")
      .find("a[href='https://kobex.rs/faq/odustanak-od-kupovine']");
  }
  get reklamacijePrigovorFooterLink() {
    return cy.get("a[href='https://kobex.rs/faq/reklamacije-prigovor']");
  }
  get phoneNum1Link() {
    return cy.get("a[href='tel:0216216959']");
  }
  get phoneNum2Link() {
    return cy.get("a[href='tel:0216216955']");
  }
  get emailLink() {
    return cy.get("a[href='mailto:web@kobex.rs']");
  }
  get homePageFooterBtn() {
    return cy.get("footer").find("a[href='https://kobex.rs/']").eq(0);
  }
  get backToTopOfThePageBtn() {
    return cy.get("a[title='Na početak strane']");
  }
  get facebookLink() {
    return cy.get("a[href='https://www.facebook.com/blancoSrbija']");
  }
  get instagramLink() {
    return cy.get("a[href='https://www.instagram.com/blanco_srbija/']");
  }
  get youTubeLink() {
    return cy.get(
      "a[href='https://www.youtube.com/@kobexsrbija-blancogermany5608']"
    );
  }
  get masterCardLink() {
    return cy.get(
      "a[href='http://www.mastercard.com/rs/consumer/credit-cards.html']"
    );
  }
  get visaLink() {
    return cy.get(
      "a[href='https://rs.visa.com/pay-with-visa/security-and-assistance/protected-everywhere.html']"
    );
  }
  get bancaIntesaLink() {
    return cy.get("a[href='http://www.bancaintesa.rs']");
  }
}
export const genericPOM = new GenericPOM();
