class AssertTekaFrizideriFiltersPOM {
  get samostojeciCheckbox() {
    return cy.get("input[id='a11650a']");
  }
  get ugradniCheckbox() {
    return cy.get("input[id='a11625a']");
  }
  get samoFriziderCheckbox() {
    return cy.get("input[id='a12164a']");
  }
  get kombinovaniCheckbox() {
    return cy.get("input[id='a12169a']");
  }
  get crnaCheckbox() {
    return cy.get("input[id='a11314a']");
  }
  get inoxCheckbox() {
    return cy.get("input[id='a11394a']");
  }
  get belaCheckbox() {
    return cy.get("input[id='a11339a']");
  }
  get bezKomoreCheckbox() {
    return cy.get("input[id='a12514a']");
  }
  get saKomoromCheckbox() {
    return cy.get("input[id='a12554a']");
  }
  get lowFrostCheckbox() {
    return cy.get("input[id='a12885a']");
  }
  get noFrostCheckbox() {
    return cy.get("input[id='a13222a']");
  }
}
export const assertTekaFrizideriFiltersPOM =
  new AssertTekaFrizideriFiltersPOM();
