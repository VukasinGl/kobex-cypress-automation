class AssertBlancoSistemZaOtpadFiltersPOM {
  get stanjeCheckbox() {
    return cy.get("input[id='stanje']");
  }
  get izdvajamoCheckbox() {
    return cy.get("input[id='izdvojeni']");
  }
  get zaFrontSaFiokomCheckbox() {
    return cy.get("input[id='a8173a']");
  }
  get zaFrontBezFiokeCheckbox() {
    return cy.get("input[id='a8413a']");
  }
  get zaVrataCheckbox() {
    return cy.get("input[id='a7944a']");
  }
  get cm30ElementCheckbox() {
    return cy.get("input[id='a9a']");
  }
  get cm40ElementCheckbox() {
    return cy.get("input[id='a3a']");
  }
  get cm45ElementCheckbox() {
    return cy.get("input[id='a15a']");
  }
  get cm50ElementCheckbox() {
    return cy.get("input[id='a85a']");
  }
  get cm60ElementCheckbox() {
    return cy.get("input[id='a43a']");
  }
  get cm80ElementCheckbox() {
    return cy.get("input[id='a117a']");
  }
  get ponistiBtn() {
    return cy.get("button").contains("Poništi");
  }
  get productCharacteristics() {
    return cy.get("ul[class='product-characteristics text-center']");
  }
}
export const assertBlancoSistemZaOtpadFiltersPOM =
  new AssertBlancoSistemZaOtpadFiltersPOM();
