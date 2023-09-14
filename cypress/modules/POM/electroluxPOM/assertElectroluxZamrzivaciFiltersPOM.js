class AssertElectroluxZamrzivaciFiltersPOM {
  get stanjeCheckbox() {
    return cy.get("input[id='stanje']");
  }
  get izdvajamoCheckbox() {
    return cy.get("#izdvojeni_div");
  }
  get visina186cmCheckbox() {
    return cy.get("input[id='a10626a']");
  }
  get visina178cmCheckbox() {
    return cy.get("input[id='a10600a']");
  }
  get visina82cmCheckbox() {
    return cy.get("input[id='a10620a']");
  }
  get zapremina95lCheckbox() {
    return cy.get("input[id='a10625a']");
  }
  get zapremina204lCheckbox() {
    return cy.get("input[id='a10599a']");
  }
  get zapremina86lCheckbox() {
    return cy.get("input[id='a10619a']");
  }
  get noFrostDaCheckbox() {
    return cy.get("input[id='a9040a']");
  }
  get noFrostNeCheckbox() {
    return cy.get("input[id='a9016a']");
  }
  get ugradniCheckbox() {
    return cy.get("input[id='a9015a']");
  }
  get belaCheckbox() {
    return cy.get("input[id='a9012a']");
  }
  get sirina56cmCheckbox() {
    return cy.get("input[id='a10604a']");
  }
  get sirina55cmCheckbox() {
    return cy.get("input[id='a10598a']");
  }
  get sirina60cmCheckbox() {
    return cy.get("input[id='a8823a']");
  }
  get ponistiBtn() {
    return cy.contains("Poništi");
  }
  get productCharacteristics() {
    return cy.get("ul[class='product-characteristics text-center']");
  }
}
export const assertElectroluxZamrzivaciFiltersPOM =
  new AssertElectroluxZamrzivaciFiltersPOM();
