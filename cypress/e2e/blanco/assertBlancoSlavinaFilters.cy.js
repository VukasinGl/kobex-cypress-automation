/// <reference types="Cypress" />

import { assertBlancoSlavinaFiltersBL } from "../../modules/BL/blancoBL/assertBlancoSlavinaFiltersBL";

describe("Assert filters on product pages", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}blanco/slavina`);
  });

  it("Assert Blanco- Slavine page filters - Sa tusem filter", () => {
    assertBlancoSlavinaFiltersBL.assertSaTusemFilter();
  });

  it("Assert Blanco- Slavine page filters - Bez tusa filter", () => {
    assertBlancoSlavinaFiltersBL.assertBezTusaFilter();
  });

  it("Assert Blanco- Slavine page filters - Silgranit-Look filter", () => {
    assertBlancoSlavinaFiltersBL.assertSilgranitLookFilter();
  });

  it("Assert Blanco- Slavine page filters - Metalik filter", () => {
    assertBlancoSlavinaFiltersBL.assertMetalikFilter();
  });

  it("Assert Blanco- Slavine page filters - Black Matt filter", () => {
    assertBlancoSlavinaFiltersBL.assertBlackMattFilter();
  });

  it("Assert Blanco- Slavine page filters - Crna filter", () => {
    assertBlancoSlavinaFiltersBL.assertCrnaFilter();
  });

  it("Assert Blanco- Slavine page filters - Antracit filter", () => {
    assertBlancoSlavinaFiltersBL.assertAntracitFilter();
  });

  it("Assert Blanco- Slavine page filters - Stena siva filter", () => {
    assertBlancoSlavinaFiltersBL.assertStenaSivaFilter();
  });

  it("Assert Blanco- Slavine page filters - Vulkasn siva filter", () => {
    assertBlancoSlavinaFiltersBL.assertVulkanSivaFilter();
  });

  it("Assert Blanco- Slavine page filters - Alumetalik filter", () => {
    assertBlancoSlavinaFiltersBL.assertAlumetalikFilter();
  });

  it("Assert Blanco- Slavine page filters - Bela filter", () => {
    assertBlancoSlavinaFiltersBL.assertBelaFilter();
  });

  it("Assert Blanco- Slavine page filters - Nezbo bela filter", () => {
    assertBlancoSlavinaFiltersBL.assertBelaFilter();
  });

  it("Assert Blanco- Slavine page filters - Tartuf filter", () => {
    assertBlancoSlavinaFiltersBL.assertTartufFilter();
  });

  it("Assert Blanco- Slavine page filters - Kafa filter", () => {
    assertBlancoSlavinaFiltersBL.assertKafaFilter();
  });

  it("Assert Blanco- Slavine page filters - Hrom filter", () => {
    assertBlancoSlavinaFiltersBL.assertHromFilter();
  });

  it("Assert Blanco- Slavine page filters - Zlatno saten filter", () => {
    assertBlancoSlavinaFiltersBL.assertZlatnoSatenFilter();
  });

  it("Assert Blanco- Slavine page filters - Inox Massive filter", () => {
    assertBlancoSlavinaFiltersBL.assertInoxMassiveFilter();
  });

  it("Assert Blanco- Slavine page filters - InoxFinish UltraResist filter", () => {
    assertBlancoSlavinaFiltersBL.assertInoxFinishUltraResistFilter();
  });
});
