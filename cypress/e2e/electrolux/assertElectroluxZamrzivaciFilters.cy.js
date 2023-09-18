/// <reference types="Cypress" />

import { productFilters } from "../../fixtures/testData";
import { assertElectroluxZamrzivaciFiltersPOM } from "../../modules/POM/electroluxPOM/assertElectroluxZamrzivaciFiltersPOM";

describe("Assert filters on product pages", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}electrolux/zamrzivaci`);
  });

  it("Assert Electrolux - Zamrzivaci page filters - Visina 82cm filter", () => {
    cy.assertFilters(
      assertElectroluxZamrzivaciFiltersPOM.visina82cmCheckbox,
      productFilters.cm82
    );
  });

  it("Assert Electrolux - Zamrzivaci page filters - Visina 186cm filter", () => {
    cy.assertFilters(
      assertElectroluxZamrzivaciFiltersPOM.visina186cmCheckbox,
      productFilters.cm186
    );
  });

  it("Assert Electrolux - Zamrzivaci page filters - Visina 178cm filter", () => {
    cy.assertFilters(
      assertElectroluxZamrzivaciFiltersPOM.visina178cmCheckbox,
      productFilters.cm178
    );
  });

  it("Assert Electrolux - Zamrzivaci page filters - Zapremina 95l filter", () => {
    cy.assertFilters(
      assertElectroluxZamrzivaciFiltersPOM.zapremina95lCheckbox,
      productFilters.l95
    );
  });

  it("Assert Electrolux - Zamrzivaci page filters - Zapremina 204l filter", () => {
    cy.assertFilters(
      assertElectroluxZamrzivaciFiltersPOM.zapremina204lCheckbox,
      productFilters.l204
    );
  });

  it("Assert Electrolux - Zamrzivaci page filters - Zapremina 86l filter", () => {
    cy.assertFilters(
      assertElectroluxZamrzivaciFiltersPOM.zapremina86lCheckbox,
      productFilters.l86
    );
  });

  it("Assert Electrolux - Zamrzivaci page filters - No frost - Da filter", () => {
    cy.assertFilters(
      assertElectroluxZamrzivaciFiltersPOM.noFrostDaCheckbox,
      productFilters.da
    );
  });

  it("Assert Electrolux - Zamrzivaci page filters - No frost - Ne filter", () => {
    cy.assertFilters(
      assertElectroluxZamrzivaciFiltersPOM.noFrostNeCheckbox,
      productFilters.ne
    );
  });

  it("Assert Electrolux - Zamrzivaci page filters - Ugradni filter", () => {
    cy.assertFilters(
      assertElectroluxZamrzivaciFiltersPOM.ugradniCheckbox,
      productFilters.ugradni
    );
  });

  it("Assert Electrolux - Zamrzivaci page filters - Bela filter", () => {
    cy.assertFilters(
      assertElectroluxZamrzivaciFiltersPOM.belaCheckbox,
      productFilters.bela
    );
  });

  it("Assert Electrolux - Zamrzivaci page filters - Sirina 60cm filter", () => {
    cy.assertFilters(
      assertElectroluxZamrzivaciFiltersPOM.sirina60cmCheckbox,
      productFilters.cm60
    );
  });

  it("Assert Electrolux - Zamrzivaci page filters - Sirina 56cm filter", () => {
    cy.assertFilters(
      assertElectroluxZamrzivaciFiltersPOM.sirina56cmCheckbox,
      productFilters.cm56
    );
  });

  it("Assert Electrolux - Zamrzivaci page filters - Sirina 55cm filter", () => {
    cy.assertFilters(
      assertElectroluxZamrzivaciFiltersPOM.sirina55cmCheckbox,
      productFilters.cm55
    );
  });
});
