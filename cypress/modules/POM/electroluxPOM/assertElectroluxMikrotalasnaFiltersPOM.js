class ElectroluxMikrotalasnaFiltersPOM {
  get ugradnaCheckbox() {
    return cy.get("input[id='a8794a']");
  }
  get jacina900wCheckbox() {
    return cy.get("input[id='a9383a']");
  }
  get jacina800wCheckbox() {
    return cy.get("input[id='a9393a']");
  }
  get jacina700wCheckbox() {
    return cy.get("input[id='a9403a']");
  }
  get zapremina20lCheckbox() {
    return cy.get("input[id='a9406a']");
  }
  get zapremina25lCheckbox() {
    return cy.get("input[id='a9386a']");
  }
  get zapremina17lCheckbox() {
    return cy.get("input[id='a9396a']");
  }
  get mehanickoCheckbox() {
    return cy.get("input[id='a9331a']");
  }
  get naDodirCheckbox() {
    return cy.get("input[id='a9230a']");
  }
  get neCheckbox() {
    return cy.get("input[id='a9387a']");
  }
  get daCheckbox() {
    return cy.get("input[id='a9382a']");
  }
}
export const electroluxMikrotalasnaFiltersPOM =
  new ElectroluxMikrotalasnaFiltersPOM();
