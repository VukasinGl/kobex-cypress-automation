class AssertElectroluxAspiratoriFiltersPOM {
  get stanjeCheckbox() {
    return cy.get("input[id='stanje']");
  }
  get izdvajamoCheckbox() {
    return cy.get("#izdvojeni_div");
  }
  get daCheckbox() {
    return cy.get("input[id='a12158a']");
  }
  get element60cmCheckbox() {
    return cy.get("input[id='a9217a']");
  }
  get element90cmCheckbox() {
    return cy.get("input[id='a9227a']");
  }
  get inoxCheckbox() {
    return cy.get("input[id='a9028a']");
  }
  get crnaCheckbox() {
    return cy.get("input[id='a9132a']");
  }
  get tasteriCheckbox() {
    return cy.get("input[id='a9132a']");
  }
  get naDodirCheckbox() {
    return cy.get("input[id='a9230a']");
  }
  get jacina410m3hCheckbox() {
    return cy.get("input[id='a9243a']");
  }
  get jacina600m3hCheckbox() {
    return cy.get("input[id='a9223a']");
  }
  get jacina580m3hCheckbox() {
    return cy.get("input[id='a9238a']");
  }
  get jacina700m3hCheckbox() {
    return cy.get("input[id='a9258a']");
  }
  get jacina620m3hCheckbox() {
    return cy.get("input[id='a9253a']");
  }
  get jacina615m3hCheckbox() {
    return cy.get("input[id='a9233a']");
  }
  get jacina650m3hCheckbox() {
    return cy.get("input[id='a9228a']");
  }
  get jacina420m3hCheckbox() {
    return cy.get("input[id='a9218a']");
  }
  get jacina330m3hCheckbox() {
    return cy.get("input[id='a10707a']");
  }
  get teleskopskiCheckbox() {
    return cy.get("input[id='a9224a']");
  }
  get ugradniCheckbox() {
    return cy.get("input[id='a9015a']");
  }
  get dekorativniCheckbox() {
    return cy.get("input[id='a9219a']");
  }
  get ostrvskiCheckbox() {
    return cy.get("input[id='a9254a']");
  }
  get ponistiBtn() {
    return cy.contains("Poništi");
  }
  get productCharacteristics() {
    return cy.get("ul[class='product-characteristics text-center']");
  }
}
export const assertElectroluxAspiratoriFiltersPOM =
  new AssertElectroluxAspiratoriFiltersPOM();
