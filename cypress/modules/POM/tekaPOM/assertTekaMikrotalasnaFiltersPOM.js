class AssertTekaMikrotalasnaFiltersPOM {
  get zapremina20lCheckbox() {
    return cy.get("input[id='a11855a']");
  }
  get mehanickoCheckbox() {
    return cy.get("input[id='a11396a']");
  }
  get ugradnaCheckbox() {
    return cy.get("input[id='a11270a']");
  }
  get daCheckbox() {
    return cy.get("input[id='a11533a']");
  }
  get jacina1200wCheckbox() {
    return cy.get("input[id='a11857a']");
  }
}
export const assertTekaMikrotalasnaFiltersPOM =
  new AssertTekaMikrotalasnaFiltersPOM();
