class AssertElectroluxPloceFiltersPOM {
  get stanjeCheckbox() {
    return cy.get("input[id='stanje']");
  }
  get izdvajamoFilter() {
    return cy.get("#izdvojeni_div");
  }
  get crnaCheckbox() {
    return cy.get("input[id='a9132a']");
  }
  get belaCheckbox() {
    return cy.get("input[id='a9012a']");
  }
  get inoxCheckbox() {
    return cy.get("input[id='a9028a']");
  }
  get senzorskoCheckbox() {
    return cy.get("input[id='a9422a']");
  }
  get mehanickoCheckbox() {
    return cy.get("input[id='a9331a']");
  }
  get sirina60cmCheckbox() {
    return cy.get("input[id='a8823a']");
  }
  get sirina30cmCheckbox() {
    return cy.get("input[id='a9471a']");
  }
  get sirina80cmCheckbox() {
    return cy.get("input[id='a9576a']");
  }
  get sirina83cmCheckbox() {
    return cy.get("input[id='a9641a']");
  }
  get sirina75cmCheckbox() {
    return cy.get("input[id='a9656a']");
  }
  get sirina90cmCheckbox() {
    return cy.get("input[id='a9626a']");
  }
  get staklokeramikaCheckbox() {
    return cy.get("input[id='a9207a']");
  }
  get gasCheckbox() {
    return cy.get("input[id='a9659a']");
  }
  get kombinovanaCheckbox() {
    return cy.get("input[id='a9704a']");
  }
  get indukcijaCheckbox() {
    return cy.get("input[id='a9464a']");
  }
  get neCheckbox() {
    return cy.get("input[id='a9423a']");
  }
  get daCheckbox() {
    return cy.get("input[id='a9468a']");
  }
  get ponistiBtn() {
    return cy.contains("Poništi");
  }
  get productCharacteristics() {
    return cy.get("ul[class='product-characteristics text-center']");
  }
}
export const assertElectroluxPloceFiltersPOM =
  new AssertElectroluxPloceFiltersPOM();
