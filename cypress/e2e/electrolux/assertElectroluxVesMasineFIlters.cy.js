/// <reference types="Cypress" />

import { assertElectroluxVesMasineFiltersPOM } from "../../modules/POM/electroluxPOM/assertElectroluxVesMasineFIltersPOM";
import { productFilters } from "../../fixtures/testData";

describe("Assert filters on product pages", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("baseUrl")}electrolux/ves-masine`);
  });

  it("Assert Electrolux - Ves masine page filters - kapacitet - 9kg filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.kapacitet9kgCheckbox,
      productFilters.kapacitet9kg
    );
  });

  it("Assert Electrolux - Ves masine page filters - kapacitet - 10/6kg filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.kapacitet10_6kgCheckbox,
      productFilters.kapacitet10_6kg
    );
  });

  it("Assert Electrolux - Ves masine page filters - kapacitet - 6kg filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.kapacitet6kgCheckbox,
      productFilters.kapacitet6kg
    );
  });

  it("Assert Electrolux - Ves masine page filters - kapacitet - 8kg filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.kapacitet8kgCheckbox,
      productFilters.kapacitet8kg
    );
  });

  it("Assert Electrolux - Ves masine page filters - kapacitet - 10kg filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.kapacitet10kgCheckbox,
      productFilters.kapacitet10kg
    );
  });

  it("Assert Electrolux - Ves masine page filters - kapacitet - 7kg filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.kapacitet7kgCheckbox,
      productFilters.kapacitet7kg
    );
  });

  it("Assert Electrolux - Ves masine page filters - kapacitet - 7/5kg filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.kapacitet7_5kgCheckbox,
      productFilters.kapacitet7_5kg
    );
  });

  it("Assert Electrolux - Ves masine page filters - inverter motort - Da filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.inverterDaCheckbox,
      productFilters.da
    );
  });

  it("Assert Electrolux - Ves masine page filters - inverter motort - Ne filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.inverterNeCheckbox,
      productFilters.ne
    );
  });

  it("Assert Electrolux - Ves masine page filters - nacin punjenja - Frontalno filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.frontalnoCheckbox,
      productFilters.frontalno
    );
  });

  it("Assert Electrolux - Ves masine page filters - nacin punjenja - Odozgo filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.odozgoCheckbox,
      productFilters.odozgo
    );
  });

  it("Assert Electrolux - Ves masine page filters - energetski razred - C filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.cRazredCheckbox,
      productFilters.cRazred
    );
  });

  it("Assert Electrolux - Ves masine page filters - energetski razred - A filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.aRazredCheckbox,
      productFilters.aRazred
    );
  });

  it("Assert Electrolux - Ves masine page filters - energetski razred - B filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.bRazredCheckbox,
      productFilters.bRazred
    );
  });

  it("Assert Electrolux - Ves masine page filters - energetski razred - D filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.dRazredCheckbox,
      productFilters.dRazred
    );
  });

  it("Assert Electrolux - Ves masine page filters - slim - Da filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.slimDaCheckbox,
      productFilters.da
    );
  });

  it("Assert Electrolux - Ves masine page filters - slim - Ne filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.slimNeCheckbox,
      productFilters.ne
    );
  });

  it("Assert Electrolux - Ves masine page filters - nacin susenja - Toplotna pumpa filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.toplotnaPumpaCheckbox,
      productFilters.toplotnaPumpa
    );
  });

  it("Assert Electrolux - Ves masine page filters - nacin susenja - Grejacem filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.grejacemCheckbox,
      productFilters.grejacem
    );
  });

  it("Assert Electrolux - Ves masine page filters - broj obrtaja - 1200 filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.brojObrtaja1200Checkbox,
      productFilters.brojObrtaja1200
    );
  });

  it("Assert Electrolux - Ves masine page filters - broj obrtaja - 1400 filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.brojObrtaja1400Checkbox,
      productFilters.brojObrtaja1400
    );
  });

  it("Assert Electrolux - Ves masine page filters - broj obrtaja - 1300 filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.brojObrtaja1300Checkbox,
      productFilters.brojObrtaja1300
    );
  });

  it("Assert Electrolux - Ves masine page filters - broj obrtaja - 1600 filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.brojObrtaja1600Checkbox,
      productFilters.brojObrtaja1600
    );
  });

  it("Assert Electrolux - Ves masine page filters - broj obrtaja - 1000 filter", () => {
    cy.assertFilters(
      assertElectroluxVesMasineFiltersPOM.brojObrtaja1000Checkbox,
      productFilters.brojObrtaja1000
    );
  });
});
