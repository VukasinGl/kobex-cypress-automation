/// <reference types="Cypress" />

import { assertElectroluxPloceFiltersBL } from "../../modules/BL/electroluxBL/assertElectroluxPloceFiltersBL";

describe("Assert filters on product pages", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}electrolux/ploce`);
  });

  it("Assert Electrolux - Ploce page filters - Crna filter", () => {
    assertElectroluxPloceFiltersBL.assertCrnaFilter();
  });

  it("Assert Electrolux - Ploce page filters - Bela filter", () => {
    assertElectroluxPloceFiltersBL.assertBelaFilter();
  });

  it("Assert Electrolux - Ploce page filters - Inox filter", () => {
    assertElectroluxPloceFiltersBL.assertInoxFilter();
  });

  it("Assert Electrolux - Ploce page filters - Senzorsko filter", () => {
    assertElectroluxPloceFiltersBL.assertSenzorskoFilter();
  });

  it("Assert Electrolux - Ploce page filters - Mehanicko filter", () => {
    assertElectroluxPloceFiltersBL.assertMehanickoFilter();
  });

  it("Assert Electrolux - Ploce page filters - 60cm filter", () => {
    assertElectroluxPloceFiltersBL.assert60cmFilter();
  });

  it("Assert Electrolux - Ploce page filters - 30cm filter", () => {
    assertElectroluxPloceFiltersBL.assert30cmFilter();
  });

  it("Assert Electrolux - Ploce page filters - 80cm filter", () => {
    assertElectroluxPloceFiltersBL.assert80cmFilter();
  });

  it("Assert Electrolux - Ploce page filters - 83cm filter", () => {
    assertElectroluxPloceFiltersBL.assert83cmFilter();
  });

  it("Assert Electrolux - Ploce page filters - 75cm filter", () => {
    assertElectroluxPloceFiltersBL.assert75cmFilter();
  });

  it("Assert Electrolux - Ploce page filters - 90cm filter", () => {
    assertElectroluxPloceFiltersBL.assert90cmFilter();
  });

  it("Assert Electrolux - Ploce page filters - Staklokeramika filter", () => {
    assertElectroluxPloceFiltersBL.assertStaklokeramikaFilter();
  });

  it("Assert Electrolux - Ploce page filters - Gas filter", () => {
    assertElectroluxPloceFiltersBL.assertGasFilter();
  });

  it("Assert Electrolux - Ploce page filters - Kombinovana filter", () => {
    assertElectroluxPloceFiltersBL.assertKombinovanaFilter();
  });

  it("Assert Electrolux - Ploce page filters - Indukcija filter", () => {
    assertElectroluxPloceFiltersBL.assertIndukcijaFilter();
  });

  it("Assert Electrolux - Ploce page filters - Uranjanje u mermer - Da filter", () => {
    assertElectroluxPloceFiltersBL.assertDaFilter();
  });

  it("Assert Electrolux - Ploce page filters - Uranjanje u mermer - Ne filter", () => {
    assertElectroluxPloceFiltersBL.assertNeFilter();
  });
});
