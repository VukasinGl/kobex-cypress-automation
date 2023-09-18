class AssertElectroluxSporetiFiltersPOM {
  get staklokeramikaCheckbox() {
    return cy.get("input[id='a9205a']");
  }
  get aquaCleanCheckbox() {
    return cy.get("input[id='a9205a']");
  }
  get belaCheckbox() {
    return cy.get("input[id='a9012a']");
  }
  get inoxCheckbox() {
    return cy.get("input[id='a9028a']");
  }
  get sirina60cmCheckbox() {
    return cy.get("input[id='a8823a']");
  }
  get sirina50cmCheckbox() {
    return cy.get("input[id='a9278a']");
  }
}
export const assertElectroluxSporetiFiltersPOM =
  new AssertElectroluxSporetiFiltersPOM();
