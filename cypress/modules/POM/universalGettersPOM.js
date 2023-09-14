class UniversalGettersPOM {
  get stanjeCheckbox() {
    return cy.get("input[id='stanje']");
  }
  get izdvajamoCheckbox() {
    return cy.get("#izdvojeni_div");
  }
  get ponistiBtn() {
    return cy.contains("Poništi");
  }
  get productCharacteristics() {
    return cy.get("ul[class='product-characteristics text-center']");
  }
}
export const universalGettersPOM = new UniversalGettersPOM();
