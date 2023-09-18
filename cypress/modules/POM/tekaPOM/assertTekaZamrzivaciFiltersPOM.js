class AssertTekaZamrzivaciFiltersPOM {
  get noFrostNeCheckbox() {
    return cy.get("input[id='a11696a']");
  }
  get belaCheckbox() {
    return cy.get("input[id='a11339a']");
  }
  get sirina60cmCheckbox() {
    return cy.get("input[id='a11271a']");
  }
  get visina82cmCheckbox() {
    return cy.get("input[id='a11711a']");
  }
  get ugradniCheckbox() {
    return cy.get("input[id='a11625a']");
  }
}
export const assertTekaZamrzivaciFiltersPOM =
  new AssertTekaZamrzivaciFiltersPOM();
