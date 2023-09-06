/// <reference types="Cypress" />

import { assertBlancoSudopereFiltersBL } from "../../modules/BL/blancoBL/assertBlancoSudopereFiltersBL";

describe("Asssert filters on product pages", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}blanco/sudopere`);
  });

  it("Assert Blanco - Sudopere page filters - Izdvajamo filter filter", () => {
    assertBlancoSudopereFiltersBL.assertIzdvajamoFilter();
  });

  it("Assert Blanco - Sudopere page filters - Metod ugradnje - ugradne filter filter", () => {
    assertBlancoSudopereFiltersBL.assertUgradneFilter();
  });

  it("Assert Blanco - Sudopere page filters - Metod ugradnje - podgradne filter filter", () => {
    assertBlancoSudopereFiltersBL.assertPodgradneFilter();
  });

  it("Assert Blanco - Sudopere page filters - Materijal - Inox filter", () => {
    assertBlancoSudopereFiltersBL.assertInoxFilter();
  });

  it("Assert Blanco - Sudopere page filters - Materijal - Silgranit filter", () => {
    assertBlancoSudopereFiltersBL.assertSilgranitFilter();
  });

  it("Assert Blanco - Sudopere page filters - Materijal - Keramika filter", () => {
    assertBlancoSudopereFiltersBL.assertKeramikaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Element - 30cm filter", () => {
    assertBlancoSudopereFiltersBL.assertElement30cmFilter();
  });

  it("Assert Blanco - Sudopere page filters - Element - 40cm filter", () => {
    assertBlancoSudopereFiltersBL.assertElement40cmFilter();
  });

  it("Assert Blanco - Sudopere page filters - Element - 45cm filter", () => {
    assertBlancoSudopereFiltersBL.assertElement45cmFilter();
  });

  it("Assert Blanco - Sudopere page filters - Element - 50cm filter", () => {
    assertBlancoSudopereFiltersBL.assertElement50cmFilter();
  });

  it("Assert Blanco - Sudopere page filters - Element - 60cm filter", () => {
    assertBlancoSudopereFiltersBL.assertElement60cmFilter();
  });

  it("Assert Blanco - Sudopere page filters - Element - 80cm filter", () => {
    assertBlancoSudopereFiltersBL.assertElement80cmFilter();
  });

  it("Assert Blanco - Sudopere page filters - Element - 90cm filter", () => {
    assertBlancoSudopereFiltersBL.assertElement90cmFilter();
  });

  it("Assert Blanco - Sudopere page filters - Element - Ugaona filter", () => {
    assertBlancoSudopereFiltersBL.assertElementUgaonaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Broj korita - 1 korito filter", () => {
    assertBlancoSudopereFiltersBL.assert1KoritoFilter();
  });

  it("Assert Blanco - Sudopere page filters - Broj korita - 1 korito sa ocedjivacem filter", () => {
    assertBlancoSudopereFiltersBL.assert1KoritoSaOcedjivacemFilter();
  });

  it("Assert Blanco - Sudopere page filters - Broj korita - 2 korita filter", () => {
    assertBlancoSudopereFiltersBL.assert2KoritaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Broj korita - 2 korita sa ocedjivacem filter", () => {
    assertBlancoSudopereFiltersBL.assert2KoritaSaOcedjivacemFilter();
  });

  it("Assert Blanco - Sudopere page filters - Dubina korita - do 150mm filter", () => {
    assertBlancoSudopereFiltersBL.assertDo150mmDubinaKoritaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Dubina korita - od 186mm do 204mm filter", () => {
    assertBlancoSudopereFiltersBL.assertOd186Do204mmDubinaKoritaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Dubina korita - od 150mm do 165mm filter", () => {
    assertBlancoSudopereFiltersBL.assertOd150Do165mmDubinaKoritaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Dubina korita - od 166mm do 185mm filter", () => {
    assertBlancoSudopereFiltersBL.assertOd166Do185mmDubinaKoritaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Dubina korita - preko 205mm filter", () => {
    assertBlancoSudopereFiltersBL.assertPreko205mmDubinaKoritaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja silgranita - Crna filter", () => {
    assertBlancoSudopereFiltersBL.assertCrnaBojaSilgranitaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja silgranita - Antracit filter", () => {
    assertBlancoSudopereFiltersBL.assertAntracitBojaSilgranitaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja silgranita - Stena siva filter", () => {
    assertBlancoSudopereFiltersBL.assertStenaSivaBojaSilgranitaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja silgranita - Vulkan siva filter", () => {
    assertBlancoSudopereFiltersBL.assertVulkanSivaBojaSilgranitaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja silgranita - Alumetalik filter", () => {
    assertBlancoSudopereFiltersBL.assertAlumetalikBojaSilgranitaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja silgranita - Bela filter", () => {
    assertBlancoSudopereFiltersBL.assertBelaBojaSilgranitaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja silgranita - Neznobela filter", () => {
    assertBlancoSudopereFiltersBL.assertNeznobelaBojaSilgranitaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja silgranita - Tartuf filter", () => {
    assertBlancoSudopereFiltersBL.assertTartufBojaSilgranitaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja silgranita - Kafa filter", () => {
    assertBlancoSudopereFiltersBL.assertKafaBojaSilgranitaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja keramike - Crna filter", () => {
    assertBlancoSudopereFiltersBL.assertCrnaBojaKeramikeFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja keramike - Bazalt filter", () => {
    assertBlancoSudopereFiltersBL.assertBazaltBojaKeramikeFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja keramike - Kristalno bela filter", () => {
    assertBlancoSudopereFiltersBL.assertKristalnoBelaBojaKeramikeFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja keramike - Magnolija filter", () => {
    assertBlancoSudopereFiltersBL.assertMagnolijaBojaKeramikeFilter();
  });

  it("Assert Blanco - Sudopere page filters - Podizac cepa - Bez podizaca filter", () => {
    assertBlancoSudopereFiltersBL.assertBezPodizacaCepaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Podizac cepa - Sa podizacem filter", () => {
    assertBlancoSudopereFiltersBL.assertSaPodizacemCepaFilter();
  });
});
