class AssertBlancoDrinkFilterFiltersPOM {
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
  get alumetalikSilgranitCheckbox() {
    return cy.get("input[id='a2671a']");
  }
  get belaSilgranitCheckbox() {
    return cy.get("input[id='a2673a']");
  }
  get tartufSilgranitCheckbox() {
    return cy.get("input[id='a2677a']");
  }
  get kafaSilgranitCheckbox() {
    return cy.get("input[id='a2675a']");
  }
  get inoxCheckbox() {
    return cy.get("input[id='a4a']");
  }
  get silgranitCheckbox() {
    return cy.get("input[id='a44a']");
  }
  get silgranitLookCheckbox() {
    return cy.get("input[id='a292a']");
  }
  get metalikCheckbox() {
    return cy.get("input[id='a31a']");
  }
  get saTusemCheckbox() {
    return cy.get("input[id='a35a']");
  }
  get bezTusaCheckbox() {
    return cy.get("input[id='a144a']");
  }
  get inoxFinishUltraResistCheckbox() {
    return cy.get("input[id='a2653a']");
  }
  get hromCheckbox() {
    return cy.get("input[id='a32a']");
  }
  get zlatnoSatenCheckbox() {
    return cy.get("input[id='a7913a']");
  }
  get ponistiBtn() {
    return cy.get("button").contains("Poništi");
  }
  get productCharacteristics() {
    return cy.get("ul[class='product-characteristics text-center']");
  }
}
export const assertBlancoDrinkFilterFiltersPOM =
  new AssertBlancoDrinkFilterFiltersPOM();
