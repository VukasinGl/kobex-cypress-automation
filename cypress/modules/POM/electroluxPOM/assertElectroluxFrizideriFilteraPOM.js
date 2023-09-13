class AssertElectroluxFrizideriFiltersPOM {
  get stanjeCheckbox() {
    return cy.get("input[id='stanje']");
  }
  get izdvajamoCheckbox() {
    return cy.get("#izdvojeni_div");
  }
  get bezKomoreCheckbox() {
    return cy.get("input[id='a12623a']");
  }
  get saKomoromCheckbox() {
    return cy.get("input[id='a12149a']");
  }
  get visina186cmCheckbox() {
    return cy.get("input[id='a10626a']");
  }
  get visina82cmCheckbox() {
    return cy.get("input[id='a10620a']");
  }
  get visina88cmCheckbox() {
    return cy.get("input[id='a11000a']");
  }
  get visina122cmCheckbox() {
    return cy.get("input[id='a11040a']");
  }
  get visina178cmCheckbox() {
    return cy.get("input[id='a10600a']");
  }
  get visina144cmCheckbox() {
    return cy.get("input[id='a11048a']");
  }
  get visina189cmCheckbox() {
    return cy.get("input[id='a10936a']");
  }
  get visina201cmCheckbox() {
    return cy.get("input[id='a10968a']");
  }
  get visina192cmCheckbox() {
    return cy.get("input[id='a10952a']");
  }
  get zapremina133lCheckbox() {
    return cy.get("input[id='a9154a']");
  }
  get zapremina187lCheckbox() {
    return cy.get("input[id='a11153a']");
  }
  get zapremina253lCheckbox() {
    return cy.get("input[id='a9042a']");
  }
  get zapremina273lCheckbox() {
    return cy.get("input[id='a11145a']");
  }
  get zapremina324lCheckbox() {
    return cy.get("input[id='a9122a']");
  }
  get zapremina331lCheckbox() {
    return cy.get("input[id='a9130a']");
  }
  get zapremina367lCheckbox() {
    return cy.get("input[id='a9114a']");
  }
  get zapremina461lCheckbox() {
    return cy.get("input[id='a9098a']");
  }
  get zapremina387lCheckbox() {
    return cy.get("input[id='a9034a']");
  }
  get zapremina371lCheckbox() {
    return cy.get("input[id='a9090a']");
  }
  get zapremina127lCheckbox() {
    return cy.get("input[id='a9178a']");
  }
  get zapremina109lCheckbox() {
    return cy.get("input[id='a9162a']");
  }
  get zapremina142lCheckbox() {
    return cy.get("input[id='a9202a']");
  }
  get zapremina122lCheckbox() {
    return cy.get("input[id='a9146a']");
  }
  get zapremina207lCheckbox() {
    return cy.get("input[id='a9186a']");
  }
  get zapremina310lCheckbox() {
    return cy.get("input[id='a9018a']");
  }
  get zapremina217lCheckbox() {
    return cy.get("input[id='a9194a']");
  }
  get zapremina267lCheckbox() {
    return cy.get("input[id='a9050a']");
  }
  get samoFriziderCheckbox() {
    return cy.get("input[id='a12274a']");
  }
  get kombinovaniCheckbox() {
    return cy.get("input[id='a12297a']");
  }
  get samostojeciCheckbox() {
    return cy.get("input[id='a9031a']");
  }
  get ugradniCheckbox() {
    return cy.get("input[id='a9015a']");
  }
  get crnaCheckbox() {
    return cy.get("input[id='a9132a']");
  }
  get inoxCheckbox() {
    return cy.get("input[id='a9028a']");
  }
  get belaCheckbox() {
    return cy.get("input[id='a9012a']");
  }
  get sivaCheckbox() {
    return cy.get("input[id='a9108a']");
  }
  get lowFrostCheckbox() {
    return cy.get("input[id='a13284a']");
  }
  get noFrostCheckbox() {
    return cy.get("input[id='a13300a']");
  }
  get sirina60cmCheckbox() {
    return cy.get("input[id='a8823a']");
  }
  get sirina56cmCheckbox() {
    return cy.get("input[id='a10604a']");
  }
  get sirina54cmCheckbox() {
    return cy.get("input[id='a10878a']");
  }
  get sirina55cmCheckbox() {
    return cy.get("input[id='a10598a']");
  }
  get sirina70cmCheckbox() {
    return cy.get("input[id='a10942a']");
  }
  get ponistiBtn() {
    return cy.contains("Poništi");
  }
  get productCharacteristics() {
    return cy.get("ul[class='product-characteristics text-center']");
  }
}
export const assertElectroluxFrizideriFiltersPOM =
  new AssertElectroluxFrizideriFiltersPOM();
