class AssertBlancoDozerFiltersPOM {
  get stanjeCheckbox() {
    return cy.get("input[id='stanje']");
  }
  get izdvajamoCheckbox() {
    return cy.get("input[id='izdvojeni']");
  }
  get blackMattCheckbox() {
    return cy.get("input[id='a2648a']");
  }
  get crnaCheckbox() {
    return cy.get("input[id='a3146a']");
  }
  get antracitSilgranitCheckbox() {
    return cy.get("input[id='a2669a']");
  }
  get stenaSivaSilgranitCheckbox() {
    return cy.get("input[id='a2679a']");
  }
  get vulkanSivaSilgranitCheckbox() {
    return cy.get("input[id='a3465a']");
  }
  get alumetalikSilgranitCheckbox() {
    return cy.get("input[id='a2671a']");
  }
  get belaSilgranitCheckbox() {
    return cy.get("input[id='a2673a']");
  }
  get neznobelaSilgranitCheckbox() {
    return cy.get("input[id='a3467a']");
  }
  get tartufSilgranitCheckbox() {
    return cy.get("input[id='a2677a']");
  }
  get kafaSilgranitCheckbox() {
    return cy.get("input[id='a2675a']");
  }
  get silgranitLookCheckbox() {
    return cy.get("input[id='a292a']");
  }
  get metalikCheckbox() {
    return cy.get("input[id='a31a']");
  }
  get hromCheckbox() {
    return cy.get("input[id='a32a']");
  }
  get zlatnoSatenCheckbox() {
    return cy.get("input[id='a3411a']");
  }
  get inoxMassiveCheckbox() {
    return cy.get("input[id='a473a']");
  }
  get inoxFinishUltraResistCheckbox() {
    return cy.get("input[id='a2667a']");
  }
  get inoxFinishCheckbox() {
    return cy.get("input[id='a39a']");
  }
  get ponistiBtn() {
    return cy.get("button").contains("Poništi");
  }
  get productCharacteristics() {
    return cy.get("ul[class='product-characteristics text-center']");
  }
}
export const assertBlancoDozerFiltersPOM = new AssertBlancoDozerFiltersPOM();
