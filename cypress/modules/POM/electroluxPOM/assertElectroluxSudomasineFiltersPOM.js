class AssertElectroluxSudomasineFiltersPOM {
  get stanjeCheckbox() {
    return cy.get("input[id='stanje']");
  }
  get izdvajamoFilter() {
    return cy.get("#izdvojeni_div");
  }
  get jacinaZvuka44DbCheckbox() {
    return cy.get("input[id='a8792a']");
  }
  get jacinaZvuka49DbCheckbox() {
    return cy.get("input[id='a8813a']");
  }
  get jacinaZvuka39DbCheckbox() {
    return cy.get("input[id='a8820a']");
  }
  get jacinaZvuka42DbCheckbox() {
    return cy.get("input[id='a8827a']");
  }
  get jacinaZvuka48DbCheckbox() {
    return cy.get("input[id='a8848a']");
  }
  get jacinaZvuka46DbCheckbox() {
    return cy.get("input[id='a8855a']");
  }
  get svetlosniSnopCheckbox() {
    return cy.get("input[id='a8790a']");
  }
  get projekcijaVremenaCheckbox() {
    return cy.get("input[id='a8804a']");
  }
  get dveKorpeCheckbox() {
    return cy.get("input[id='a8789a']");
  }
  get triKorpeCheckbox() {
    return cy.get("input[id='a8796a']");
  }
  get ugradnaCheckbox() {
    return cy.get("input[id='a8794a']");
  }
  get kapacitet14kompletaCheckbox() {
    return cy.get("input[id='a8821a']");
  }
  get kapacitet16kompletaCheckbox() {
    return cy.get("input[id='a8828a']");
  }
  get kapacitet17kompletaCheckbox() {
    return cy.get("input[id='a8835a']");
  }
  get kapacitet13kompletaCheckbox() {
    return cy.get("input[id='a8849a']");
  }
  get kapacitet9kompletaCheckbox() {
    return cy.get("input[id='a8793a']");
  }
  get kapacitet10kompletaCheckbox() {
    return cy.get("input[id='a8800a']");
  }
  get kapacitet15kompletaCheckbox() {
    return cy.get("input[id='a8842a']");
  }
  get sirina45cmCheckbox() {
    return cy.get("input[id='a8795a']");
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
export const assertElectroluxSudomasineFiltersPOM =
  new AssertElectroluxSudomasineFiltersPOM();
