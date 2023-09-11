/// <reference types="Cypress" />

import { assertElectroluxSudomasineFiltersBL } from "../../modules/BL/electroluxBL/assertElectroluxSudomasineFiltersBL";

describe("Assert filters on product pages", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}electrolux/sudomasine`);
  });

  it("Assert Electrolux - Sudomasine page filters - 44dB filter", () => {
    assertElectroluxSudomasineFiltersBL.assert44DbFilter();
  });

  it("Assert Electrolux - Sudomasine page filters - 49dB filter", () => {
    assertElectroluxSudomasineFiltersBL.assert49DbFilter();
  });

  it("Assert Electrolux - Sudomasine page filters - 39dB filter", () => {
    assertElectroluxSudomasineFiltersBL.assert39DbFilter();
  });

  it("Assert Electrolux - Sudomasine page filters - 42dB filter", () => {
    assertElectroluxSudomasineFiltersBL.assert42DbFilter();
  });

  it("Assert Electrolux - Sudomasine page filters - 48dB filter", () => {
    assertElectroluxSudomasineFiltersBL.assert48DbFilter();
  });

  it("Assert Electrolux - Sudomasine page filters - 46dB filter", () => {
    assertElectroluxSudomasineFiltersBL.assert46DbFilter();
  });

  it("Assert Electrolux - Sudomasine page filters - Svetlosni snop filter", () => {
    assertElectroluxSudomasineFiltersBL.assertSvetlosniSnopFilter();
  });

  it("Assert Electrolux - Sudomasine page filters - Projekcija vremena filter", () => {
    assertElectroluxSudomasineFiltersBL.assertProjekcijaVremenaFilter();
  });

  it("Assert Electrolux - Sudomasine page filters - 2 korpe filter", () => {
    assertElectroluxSudomasineFiltersBL.assert2KorpeFilter();
  });

  it("Assert Electrolux - Sudomasine page filters - 3 korpe filter", () => {
    assertElectroluxSudomasineFiltersBL.assert3KorpeFilter();
  });

  it("Assert Electrolux - Sudomasine page filters - Ugradna filter", () => {
    assertElectroluxSudomasineFiltersBL.assertUgradnaFilter();
  });

  it("Assert Electrolux - Sudomasine page filters - 14 kompleta filter", () => {
    assertElectroluxSudomasineFiltersBL.assert14kompletaFilter();
  });

  it("Assert Electrolux - Sudomasine page filters - 16 kompleta filter", () => {
    assertElectroluxSudomasineFiltersBL.assert16kompletaFilter();
  });

  it("Assert Electrolux - Sudomasine page filters - 17 kompleta filter", () => {
    assertElectroluxSudomasineFiltersBL.assert17kompletaFilter();
  });

  it("Assert Electrolux - Sudomasine page filters - 13 kompleta filter", () => {
    assertElectroluxSudomasineFiltersBL.assert13kompletaFilter();
  });

  it("Assert Electrolux - Sudomasine page filters - 9 kompleta filter", () => {
    assertElectroluxSudomasineFiltersBL.assert9kompletaFilter();
  });

  it("Assert Electrolux - Sudomasine page filters - 10 kompleta filter", () => {
    assertElectroluxSudomasineFiltersBL.assert10kompletaFilter();
  });

  it("Assert Electrolux - Sudomasine page filters - 15 kompleta filter", () => {
    assertElectroluxSudomasineFiltersBL.assert15kompletaFilter();
  });

  it("Assert Electrolux - Sudomasine page filters - 45cm filter", () => {
    assertElectroluxSudomasineFiltersBL.assert45cmFilter();
  });

  it("Assert Electrolux - Sudomasine page filters - 60cm filter", () => {
    assertElectroluxSudomasineFiltersBL.assert60cmFilter();
  });
});
