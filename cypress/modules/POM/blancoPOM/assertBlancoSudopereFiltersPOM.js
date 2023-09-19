class AssertBlancoSudopereFiltersPOM {
  get stanjeCheckbox() {
    return cy.get("input[id='stanje']");
  }
  get izdvajamoCheckbox() {
    return cy.get("input[id='izdvojeni']");
  }
  get ugradneCheckbox() {
    return cy.get("input[id='a5a']");
  }
  get podgradneCheckbox() {
    return cy.get("input[id='a601a']");
  }
  get inoxCheckbox() {
    return cy.get("input[id='a4a']");
  }
  get silgranitCheckbox() {
    return cy.get("input[id='a44a']");
  }
  get keramikaCheckbox() {
    return cy.get("input[id='a2395a']");
  }
  get cm30ElementCheckbox() {
    return cy.get("input[id='a9a']");
  }
  get cm40ElementCheckbox() {
    return cy.get("input[id='a3a']");
  }
  get cm45ElementCheckbox() {
    return cy.get("input[id='a15a']");
  }
  get cm50ElementCheckbox() {
    return cy.get("input[id='a85a']");
  }
  get cm60ElementCheckbox() {
    return cy.get("input[id='a43a']");
  }
  get cm80ElementCheckbox() {
    return cy.get("input[id='a117a']");
  }
  get cm90ElementCheckbox() {
    return cy.get("input[id='a147a']");
  }
  get ugaonaElementCheckbox() {
    return cy.get("input[id='a196a']");
  }
  get korito1Checkbox() {
    return cy.get("input[id='a1a']");
  }
  get korito1SaOcedjivacemCheckbox() {
    return cy.get("input[id='a13a']");
  }
  get korito2Checkbox() {
    return cy.get("input[id='a115a']");
  }
  get korito2SaOcedjivacemCheckbox() {
    return cy.get("input[id='a41a']");
  }
  get od186mmDo204mmCheckbox() {
    return cy.get("input[id='a1743a']");
  }
  get crnaSilgranitCheckbox() {
    return cy.get("input[id='a1386a']");
  }
  get antracitSilgranitCheckbox() {
    return cy.get("input[id='a54a']");
  }
  get stenaSivaSilgranitCheckbox() {
    return cy.get("input[id='a678a']");
  }
  get vulkanSivaSilgranitCheckbox() {
    return cy.get("input[id='a458a']");
  }
  get alumetalikSilgranitCheckbox() {
    return cy.get("input[id='a40a']");
  }
  get belaSilgranitCheckbox() {
    return cy.get("input[id='a47a']");
  }
  get neznobelaSilgranitCheckbox() {
    return cy.get("input[id='a344a']");
  }
  get tartufSilgranitCheckbox() {
    return cy.get("input[id='a444a']");
  }
  get kafaSilgranitCheckbox() {
    return cy.get("input[id='a214a']");
  }
  get crnaKeramikaCheckbox() {
    return cy.get("input[id='a2412a']");
  }
  get bazaltKeramikaCheckbox() {
    return cy.get("input[id='a2405a']");
  }
  get kristalnoBelaKeramikaCheckbox() {
    return cy.get("input[id='a2391a']");
  }
  get magnolijaKeramikaCheckbox() {
    return cy.get("input[id='a2398a']");
  }
  get bezPodizacaCheckbox() {
    return cy.get("input[id='a6a']");
  }
  get saPodizacemCheckbox() {
    return cy.get("input[id='a46a']");
  }
  get ponistiBtn() {
    return cy.get("button").contains("Poništi");
  }
  get productCharacteristics() {
    return cy.get("ul[class='product-characteristics text-center']");
  }
  get imgArea() {
    return cy.get("div[class='prd-img-area']");
  }
}
export const assertBlancoSudopereFiltersPOM =
  new AssertBlancoSudopereFiltersPOM();
