/// <reference types="Cypress" />

import { assertFiltersBL } from "../modules/BL/assertFiltersBL";

describe("Asssert filters on product pages", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}blanco/sudopere`);
  });

  it("Assert Blanco - Sudopere page filters - Izdvajamo filter filter", () => {
    assertFiltersBL.assertIzdvajamoFilter();
  });

  it("Assert Blanco - Sudopere page filters - Metod ugradnje - ugradne filter filter", () => {
    assertFiltersBL.assertUgradneFilter();
  });

  it("Assert Blanco - Sudopere page filters - Metod ugradnje - podgradne filter filter", () => {
    assertFiltersBL.assertPodgradneFilter();
  });

  it("Assert Blanco - Sudopere page filters - Materijal - Inox filter", () => {
    assertFiltersBL.assertInoxFilter();
  });

  it("Assert Blanco - Sudopere page filters - Materijal - Silgranit filter", () => {
    assertFiltersBL.assertSilgranitFilter();
  });

  it("Assert Blanco - Sudopere page filters - Materijal - Keramika filter", () => {
    assertFiltersBL.assertKeramikaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Element - 30cm filter", () => {
    assertFiltersBL.assertElement30cmFilter();
  });

  it("Assert Blanco - Sudopere page filters - Element - 40cm filter", () => {
    assertFiltersBL.assertElement40cmFilter();
  });

  it("Assert Blanco - Sudopere page filters - Element - 45cm filter", () => {
    assertFiltersBL.assertElement45cmFilter();
  });

  it("Assert Blanco - Sudopere page filters - Element - 50cm filter", () => {
    assertFiltersBL.assertElement50cmFilter();
  });

  it("Assert Blanco - Sudopere page filters - Element - 60cm filter", () => {
    assertFiltersBL.assertElement60cmFilter();
  });

  it("Assert Blanco - Sudopere page filters - Element - 80cm filter", () => {
    assertFiltersBL.assertElement80cmFilter();
  });

  it("Assert Blanco - Sudopere page filters - Element - 90cm filter", () => {
    assertFiltersBL.assertElement90cmFilter();
  });

  it("Assert Blanco - Sudopere page filters - Element - Ugaona filter", () => {
    assertFiltersBL.assertElementUgaonaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Broj korita - 1 korito filter", () => {
    assertFiltersBL.assert1KoritoFilter();
  });

  it("Assert Blanco - Sudopere page filters - Broj korita - 1 korito sa ocedjivacem filter", () => {
    assertFiltersBL.assert1KoritoSaOcedjivacemFilter();
  });

  it("Assert Blanco - Sudopere page filters - Broj korita - 2 korita filter", () => {
    assertFiltersBL.assert2KoritaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Broj korita - 2 korita sa ocedjivacem filter", () => {
    assertFiltersBL.assert2KoritaSaOcedjivacemFilter();
  });

  it("Assert Blanco - Sudopere page filters - Dubina korita - do 150mm filter", () => {
    assertFiltersBL.assertDo150mmDubinaKoritaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Dubina korita - od 186mm do 204mm filter", () => {
    assertFiltersBL.assertOd186Do204mmDubinaKoritaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Dubina korita - od 150mm do 165mm filter", () => {
    assertFiltersBL.assertOd150Do165mmDubinaKoritaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Dubina korita - od 166mm do 185mm filter", () => {
    assertFiltersBL.assertOd166Do185mmDubinaKoritaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Dubina korita - preko 205mm filter", () => {
    assertFiltersBL.assertPreko205mmDubinaKoritaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja silgranita - Crna filter", () => {
    assertFiltersBL.assertCrnaBojaSilgranitaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja silgranita - Antracit filter", () => {
    assertFiltersBL.assertAntracitBojaSilgranitaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja silgranita - Stena siva filter", () => {
    assertFiltersBL.assertStenaSivaBojaSilgranitaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja silgranita - Vulkan siva filter", () => {
    assertFiltersBL.assertVulkanSivaBojaSilgranitaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja silgranita - Alumetalik filter", () => {
    assertFiltersBL.assertAlumetalikBojaSilgranitaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja silgranita - Bela filter", () => {
    assertFiltersBL.assertBelaBojaSilgranitaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja silgranita - Neznobela filter", () => {
    assertFiltersBL.assertNeznobelaBojaSilgranitaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja silgranita - Tartuf filter", () => {
    assertFiltersBL.assertTartufBojaSilgranitaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja silgranita - Kafa filter", () => {
    assertFiltersBL.assertKafaBojaSilgranitaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja keramike - Crna filter", () => {
    assertFiltersBL.assertCrnaBojaKeramikeFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja keramike - Bazalt filter", () => {
    assertFiltersBL.assertBazaltBojaKeramikeFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja keramike - Kristalno bela filter", () => {
    assertFiltersBL.assertKristalnoBelaBojaKeramikeFilter();
  });

  it("Assert Blanco - Sudopere page filters - Boja keramike - Magnolija filter", () => {
    assertFiltersBL.assertMagnolijaBojaKeramikeFilter();
  });

  it("Assert Blanco - Sudopere page filters - Podizac cepa - Bez podizaca filter", () => {
    assertFiltersBL.assertBezPodizacaCepaFilter();
  });

  it("Assert Blanco - Sudopere page filters - Podizac cepa - Sa podizacem filter", () => {
    assertFiltersBL.assertSaPodizacemCepaFilter();
  });
});
