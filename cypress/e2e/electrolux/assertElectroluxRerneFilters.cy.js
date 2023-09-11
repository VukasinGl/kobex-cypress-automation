/// <reference types="Cypress" />

import { assertElectroluxRerneFiltersBL } from "../../modules/BL/electroluxBL/assertElectroluxRerneFiltersBL";

describe("Assert filters on product pages", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}electrolux/rerne`);
  });

  it("Assert Electrolux - Rerne page filters - Multifunkcionalna filter", () => {
    assertElectroluxRerneFiltersBL.assertMultifunkcionalnaFilter();
  });

  it("Assert Electrolux - Rerne page filters - Parna filter", () => {
    assertElectroluxRerneFiltersBL.assertParnaFilter();
  });

  it("Assert Electrolux - Rerne page filters - Ventilatorska filter", () => {
    assertElectroluxRerneFiltersBL.assertVentilatorskaFilter();
  });

  it("Assert Electrolux - Rerne page filters - Grejna fioka filter", () => {
    assertElectroluxRerneFiltersBL.assertGrejnaFiokaFilter();
  });

  it("Assert Electrolux - Rerne page filters - Ugradna filter", () => {
    assertElectroluxRerneFiltersBL.assertUgradnaFilter();
  });

  it("Assert Electrolux - Rerne page filters - Aqua Clean filter", () => {
    assertElectroluxRerneFiltersBL.assertAquaCleanFilter();
  });

  it("Assert Electrolux - Rerne page filters - Piroliticko filter", () => {
    assertElectroluxRerneFiltersBL.assertPirolitickoFilter();
  });

  it("Assert Electrolux - Rerne page filters - Kataliticko filter", () => {
    assertElectroluxRerneFiltersBL.assertKatalitickoFilter();
  });

  it("Assert Electrolux - Rerne page filters - crna filter", () => {
    assertElectroluxRerneFiltersBL.assertCrnaFilter();
  });

  it("Assert Electrolux - Rerne page filters - Crna sa inox detaljima filter", () => {
    assertElectroluxRerneFiltersBL.assertCrnaSaInoxDetaljimaFilter();
  });

  it("Assert Electrolux - Rerne page filters - Inox filter", () => {
    assertElectroluxRerneFiltersBL.assertInoxFilter();
  });

  it("Assert Electrolux - Rerne page filters - Zapremina 57l filter", () => {
    assertElectroluxRerneFiltersBL.assertZapremina57LFilter();
  });

  it("Assert Electrolux - Rerne page filters - Zapremina 42l filter", () => {
    assertElectroluxRerneFiltersBL.assertZapremina42LFilter();
  });

  it("Assert Electrolux - Rerne page filters - Zapremina 71l filter", () => {
    assertElectroluxRerneFiltersBL.assertZapremina71LFilter();
  });

  it("Assert Electrolux - Rerne page filters - Zapremina 65l filter", () => {
    assertElectroluxRerneFiltersBL.assertZapremina65LFilter();
  });

  it("Assert Electrolux - Rerne page filters - Na dodir filter", () => {
    assertElectroluxRerneFiltersBL.assertNaDodirFilter();
  });

  it("Assert Electrolux - Rerne page filters -  Potapajuci dugmici filter", () => {
    assertElectroluxRerneFiltersBL.assertPotapajuciDugmiciFilter();
  });

  it("Assert Electrolux - Rerne page filters - Mehanicko filter", () => {
    assertElectroluxRerneFiltersBL.assertMehanickoFilter();
  });
});
