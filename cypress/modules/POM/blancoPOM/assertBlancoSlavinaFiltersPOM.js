class AssertBlancoSlavinaFiltersPOM {
  get stanjeCheckbox() {
    return cy.get("input[id='stanje']");
  }
  get izdvajamoCheckbox() {
    return cy.get("input[id='izdvojeni']");
  }
  get saTusemCheckbox() {
    return cy.get("input[id='a35a']");
  }
  get bezTusaCheckbox() {
    return cy.get("input[id='a144a']");
  }
  get silgranitLookCheckbox() {
    return cy.get("input[id='a292a']");
  }
  get metalikCheckbox() {
    return cy.get("input[id='a31a']");
  }
  get blackMattCheckbox() {
    return cy.get("input[id='a2655a']");
  }
  get crnaCheckbox() {
    return cy.get("input[id='a3106a']");
  }
  get antracitSilgranitCheckbox() {
    return cy.get("input[id='a297a']");
  }
  get stenaSivaSilgranitCheckbox() {
    return cy.get("input[id='a656a']");
  }
  get vulkanSivaSilgranitCheckbox() {
    return cy.get("input[id='a3428a']");
  }
  get alumetalikSilgranitCheckbox() {
    return cy.get("input[id='a291a']");
  }
  get belaSilgranitCheckbox() {
    return cy.get("input[id='a294a']");
  }
  get neznobelaSilgranitCheckbox() {
    return cy.get("input[id='a3431a']");
  }
  get tartufSilgranitCheckbox() {
    return cy.get("input[id='a549a']");
  }
  get kafaSilgranitCheckbox() {
    return cy.get("input[id='a300a']");
  }
  get hromCheckbox() {
    return cy.get("input[id='a32a']");
  }
  get zlatnoSatenCheckbox() {
    return cy.get("input[id='a7913a']");
  }
  get inoxMassiveCheckbox() {
    return cy.get("input[id='a473a']");
  }
  get inoxFinishUltraResistCheckbox() {
    return cy.get("input[id='a2653a']");
  }
  get ponistiBtn() {
    return cy.get("button").contains("Poništi");
  }
  get productCharacteristics() {
    return cy.get("ul[class='product-characteristics text-center']");
  }
}
export const assertBlancoSlavinaFiltersPOM =
  new AssertBlancoSlavinaFiltersPOM();
