/// <reference types="Cypress" />

import { assertBlancoDozerFiltersBL } from "../../modules/BL/blancoBL/assertBlancoDozerFiltersBL";

describe("Assert filters on product pages", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}blanco/dozer`);
  });

  it("Assert Blanco - Dozer page filters - Black Matt filter", () => {
    assertBlancoDozerFiltersBL.assertBlackMattFilter();
  });

  it("Assert Blanco - Dozer page filters - Crna filter", () => {
    assertBlancoDozerFiltersBL.assertCrnaFilter();
  });

  it("Assert Blanco - Dozer page filters - Antracit filter", () => {
    assertBlancoDozerFiltersBL.assertAntracitFilter();
  });

  it("Assert Blanco - Dozer page filters - Stena siva filter", () => {
    assertBlancoDozerFiltersBL.assertStenaSivaFilter();
  });

  it("Assert Blanco - Dozer page filters - Vulkasn siva filter", () => {
    assertBlancoDozerFiltersBL.assertVulkanSivaFilter();
  });

  it("Assert Blanco - Dozer page filters - Alumetalik filter", () => {
    assertBlancoDozerFiltersBL.assertAlumetalikFilter();
  });

  it("Assert Blanco - Dozer page filters - Bela filter", () => {
    assertBlancoDozerFiltersBL.assertBelaFilter();
  });

  it("Assert Blanco - Dozer page filters - Nezbo bela filter", () => {
    assertBlancoDozerFiltersBL.assertNeznobelaFilter();
  });

  it("Assert Blanco - Dozer page filters - Tartuf filter", () => {
    assertBlancoDozerFiltersBL.assertTartufFilter();
  });

  it("Assert Blanco - Dozer page filters - Kafa filter", () => {
    assertBlancoDozerFiltersBL.assertKafaFilter();
  });

  it("Assert Blanco - Dozer page filters - Silgranit-Look filter", () => {
    assertBlancoDozerFiltersBL.assertSilgranitLookFilter();
  });

  it("Assert Blanco - Dozer page filters - Metalik filter", () => {
    assertBlancoDozerFiltersBL.assertMetalikFilter();
  });

  it("Assert Blanco - Slavine page filters - Hrom filter", () => {
    assertBlancoDozerFiltersBL.assertHromFilter();
  });

  it("Assert Blanco - Slavine page filters - Zlatno saten filter", () => {
    assertBlancoDozerFiltersBL.assertZlatnoSatenFilter();
  });

  it("Assert Blanco - Slavine page filters - Inox Massive filter", () => {
    assertBlancoDozerFiltersBL.assertInoxMassiveFilter();
  });

  it("Assert Blanco - Slavine page filters - InoxFinish UltraResist filter", () => {
    assertBlancoDozerFiltersBL.assertInoxFinishUltraResistFilter();
  });

  it("Assert Blanco - Slavine page filters - Inox Finish filter", () => {
    assertBlancoDozerFiltersBL.assertInoxFinishFilter();
  });
});
