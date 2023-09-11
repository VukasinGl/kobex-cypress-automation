class AssertElectroluxRerneFiltersPOM {
  get stanjeCheckbox() {
    return cy.get("input[id='stanje']");
  }
  get izdvajamoCheckbox() {
    return cy.get("input[id='izdvojeni']");
  }
  get ponistiBtn() {
    return cy.get("button").contains("Poništi");
  }
  get productCharacteristics() {
    return cy.get("ul[class='product-characteristics text-center']");
  }
  get multifunkcionalnaCheckbox() {
    return cy.get("input[id='a9284a']");
  }
  get parnaCheckbox() {
    return cy.get("input[id='a9290a']");
  }
  get ventilatorskaCheckbox() {
    return cy.get("input[id='a9332a']");
  }
  get grejnaFiokaCheckbox() {
    return cy.get("input[id='a9415a']");
  }
  get ugradnaCheckbox() {
    return cy.get("input[id='a8794a']");
  }
  get aquaCleanCheckbox() {
    return cy.get("input[id='a8794a']");
  }
  get pirolitickoCheckbox() {
    return cy.get("input[id='a9348a']");
  }
  get katalitickoCheckbox() {
    return cy.get("input[id='a9504a']");
  }
  get zapremina42L() {
    return cy.get("input[id='a9285a']");
  }
  get zapremina71L() {
    return cy.get("input[id='a9291a']");
  }
  get zapremina65L() {
    return cy.get("input[id='a9321a']");
  }
  get zapremina57L() {
    return cy.get("input[id='a9333a']");
  }
  get crnaCheckbox() {
    return cy.get("input[id='a9132a']");
  }
  get crnaSaInoxDetaljimaCheckbox() {
    return cy.get("input[id='a9298a']");
  }
  get inoxCheckbox() {
    return cy.get("input[id='a9028a']");
  }
  get naDodirCheckbox() {
    return cy.get("input[id='a9230a']");
  }
  get potapajuciDugmiciCheckbox() {
    return cy.get("input[id='a9301a']");
  }
  get mehanickoCheckbox() {
    return cy.get("input[id='a9331a']");
  }
}
export const assertElectroluxRerneFiltersPOM =
  new AssertElectroluxRerneFiltersPOM();
