/// <reference types="Cypress" />

import { assertBlancoDrinkFilterFiltersBL } from "../../modules/BL/blancoBL/assertBlancoDrinkFilterFiltersBL";

describe("Assert filters on product pages", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}blanco/drink.filter`);
  });
  it("Assert Blanco- drink.filter page filters - Black Matt filter", () => {
    assertBlancoDrinkFilterFiltersBL.assertBlackMattFilter();
  });

  it("Assert Blanco- drink.filter page filters - Crna filter", () => {
    assertBlancoDrinkFilterFiltersBL.assertCrnaFilter();
  });

  it("Assert Blanco- drink.filter page filters - Antracit filter", () => {
    assertBlancoDrinkFilterFiltersBL.assertAntracitFilter();
  });

  it("Assert Blanco- drink.filter page filters - Stena siva filter", () => {
    assertBlancoDrinkFilterFiltersBL.assertStenaSivaFilter();
  });

  it("Assert Blanco- drink.filter page filters - Alumetalik filter", () => {
    assertBlancoDrinkFilterFiltersBL.assertAlumetalikFilter();
  });

  it("Assert Blanco- drink.filter page filters - Bela filter", () => {
    assertBlancoDrinkFilterFiltersBL.assertBelaFilter();
  });

  it("Assert Blanco- drink.filter page filters - Tartuf filter", () => {
    assertBlancoDrinkFilterFiltersBL.assertTartufFilter();
  });

  it("Assert Blanco- drink.filter page filters - Kafa filter", () => {
    assertBlancoDrinkFilterFiltersBL.assertKafaFilter();
  });

  it("Assert Blanco- drink.filter page filters - Metalik filter", () => {
    assertBlancoDrinkFilterFiltersBL.assertMetalikFilter();
  });

  it("Assert Blanco- drink.filter page filters - Silgranit-Look filter", () => {
    assertBlancoDrinkFilterFiltersBL.assertSilgranitLookFilter();
  });

  it("Assert Blanco- drink.filter page filters - Silgranit filter", () => {
    assertBlancoDrinkFilterFiltersBL.assertSilgranitFilter();
  });

  it("Assert Blanco- drink.filter page filters - Inox filter", () => {
    assertBlancoDrinkFilterFiltersBL.assertInoxFilter();
  });

  it("Assert Blanco- drink.filter page filters - Sa tusem filter", () => {
    assertBlancoDrinkFilterFiltersBL.assertSaTusemFilter();
  });

  it("Assert Blanco- drink.filter page filters - Bez tusa filter", () => {
    assertBlancoDrinkFilterFiltersBL.assertBezTusaFilter();
  });

  it("Assert Blanco- drink.filter page filters - InoxFinish UltraResist filter", () => {
    assertBlancoDrinkFilterFiltersBL.assertInoxFinishUltraResistFilter();
  });

  it("Assert Blanco- drink.filter page filters - Zlatno saten filter", () => {
    assertBlancoDrinkFilterFiltersBL.assertZlatnoSatenFilter();
  });

  it("Assert Blanco- drink.filter page filters - Hrom filter", () => {
    assertBlancoDrinkFilterFiltersBL.assertHromFilter();
  });
});
